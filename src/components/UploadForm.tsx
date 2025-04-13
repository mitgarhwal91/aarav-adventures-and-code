import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface UploadedContent {
  type: 'photo' | 'code';
  title: string;
  content: string | File;
  location?: string;
  description?: string;
  language?: string;
  timestamp: Date;
  previewUrl?: string;
}

const UploadForm = () => {
  const { toast } = useToast();
  const [uploadType, setUploadType] = useState<'photo' | 'code'>('photo');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedItems, setUploadedItems] = useState<UploadedContent[]>([]);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Create new uploaded content object
    const newContent: UploadedContent = {
      type: uploadType,
      title: formData.get('title') as string,
      content: uploadType === 'photo' 
        ? (form.querySelector('#photo-upload') as HTMLInputElement).files?.[0] as File
        : formData.get('code') as string,
      timestamp: new Date(),
    };
    
    if (uploadType === 'photo') {
      newContent.location = formData.get('location') as string;
      newContent.description = formData.get('description') as string;
      newContent.previewUrl = photoPreview || undefined;
    } else {
      newContent.language = formData.get('language') as string;
      newContent.description = formData.get('description') as string;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setUploadedItems(prev => [newContent, ...prev]);
      setPhotoPreview(null);
      
      toast({
        title: 'Content uploaded successfully!',
        description: 'Your content has been saved and will be available shortly.',
      });
      
      // Reset form
      form.reset();
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>What are you uploading?</Label>
              <RadioGroup 
                defaultValue="photo" 
                className="flex gap-4"
                onValueChange={(value) => {
                  setUploadType(value as 'photo' | 'code');
                  setPhotoPreview(null);
                }}
                name="uploadType"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="photo" id="photo" />
                  <Label htmlFor="photo" className="cursor-pointer">Travel Photo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="code" id="code" />
                  <Label htmlFor="code" className="cursor-pointer">Code Snippet</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Give your content a title" required />
            </div>

            {uploadType === 'photo' ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" placeholder="Where was this photo taken?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo-upload">Upload Photo</Label>
                  <Input 
                    id="photo-upload" 
                    name="photo" 
                    type="file" 
                    accept="image/*" 
                    required 
                    onChange={handleFileChange}
                  />
                  {photoPreview && (
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <img 
                        src={photoPreview} 
                        alt="Preview" 
                        className="w-full max-h-60 object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Photo Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    placeholder="Tell us about this photo..." 
                    className="min-h-24"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="language">Programming Language</Label>
                  <Input id="language" name="language" placeholder="e.g. JavaScript, Python, etc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    placeholder="What does this code do?" 
                    className="min-h-20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="code">Code Snippet</Label>
                  <Textarea 
                    id="code" 
                    name="code"
                    placeholder="Paste your code here..." 
                    className="min-h-32 font-mono"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Or Upload File (Optional)</Label>
                  <Input id="file-upload" type="file" accept=".js,.py,.java,.html,.css,.ts,.jsx,.tsx" />
                </div>
              </>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Uploading...' : (
                <>
                  <Upload className="mr-2 h-4 w-4" /> Upload {uploadType === 'photo' ? 'Photo' : 'Code'}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {uploadedItems.length > 0 && (
        <Card className="w-full max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Your Recent Uploads</h2>
            <div className="space-y-4">
              {uploadedItems.map((item, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex items-start gap-4">
                    {item.type === 'photo' && item.previewUrl && (
                      <div className="w-24 h-24 overflow-hidden rounded-md flex-shrink-0">
                        <img 
                          src={item.previewUrl} 
                          alt={item.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                    {item.type === 'code' && (
                      <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center flex-shrink-0">
                        <div className="text-slate-500 dark:text-slate-400">
                          <code className="text-xs">{`{ }`}</code>
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.type === 'photo' ? item.location : item.language}
                      </p>
                      {item.description && (
                        <p className="text-sm mt-1">{item.description}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        Uploaded {item.timestamp.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UploadForm;
