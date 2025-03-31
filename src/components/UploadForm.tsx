
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';

const UploadForm = () => {
  const { toast } = useToast();
  const [uploadType, setUploadType] = useState<'photo' | 'code'>('photo');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Content uploaded successfully!',
        description: 'Your content has been saved and will be available shortly.',
      });
      
      // Reset form - in a real app we would use form state management
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>What are you uploading?</Label>
            <RadioGroup 
              defaultValue="photo" 
              className="flex gap-4"
              onValueChange={(value) => setUploadType(value as 'photo' | 'code')}
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
            <Input id="title" placeholder="Give your content a title" required />
          </div>

          {uploadType === 'photo' ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Where was this photo taken?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photo-upload">Upload Photo</Label>
                <Input id="photo-upload" type="file" accept="image/*" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Photo Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Tell us about this photo..." 
                  className="min-h-24"
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="language">Programming Language</Label>
                <Input id="language" placeholder="e.g. JavaScript, Python, etc." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="What does this code do?" 
                  className="min-h-20"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Code Snippet</Label>
                <Textarea 
                  id="code" 
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
  );
};

export default UploadForm;
