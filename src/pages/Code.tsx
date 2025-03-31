
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CodeSnippetCard from '@/components/CodeSnippetCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Code = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('all');

  // Sample data
  const codeSnippets = [
    {
      id: 1,
      title: 'React Hooks Example',
      description: 'A simple custom hook for fetching data',
      language: 'TypeScript',
      code: `import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;`,
      date: 'May 15, 2023'
    },
    {
      id: 2,
      title: 'Python Image Processing',
      description: 'Basic image manipulation using Pillow',
      language: 'Python',
      code: `from PIL import Image, ImageFilter

def process_image(image_path, output_path):
    # Open the image
    img = Image.open(image_path)
    
    # Apply some filters
    img = img.filter(ImageFilter.SHARPEN)
    img = img.filter(ImageFilter.DETAIL)
    
    # Resize the image
    width, height = img.size
    new_size = (int(width * 0.8), int(height * 0.8))
    img = img.resize(new_size)
    
    # Save the processed image
    img.save(output_path)
    print(f"Image saved to {output_path}")

# Usage
process_image('travel_photo.jpg', 'travel_photo_processed.jpg')`,
      date: 'June 3, 2023'
    },
    {
      id: 3,
      title: 'CSS Grid Layout',
      description: 'Responsive photo gallery using CSS Grid',
      language: 'CSS',
      code: `.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}

.photo-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photo-card:hover {
  transform: translateY(-5px);
}

.photo-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.photo-info {
  padding: 15px;
}

@media (max-width: 768px) {
  .photo-gallery {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}`,
      date: 'July 21, 2023'
    },
  ];

  // Get unique languages for the filter
  const languages = [...new Set(codeSnippets.map(snippet => snippet.language))];

  // Filter snippets based on search term and language filter
  const filteredSnippets = codeSnippets.filter(snippet => 
    (snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    snippet.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (languageFilter === 'all' || snippet.language === languageFilter)
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-theme-indigo to-theme-purple text-white p-8 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Code Snippets</h1>
          <p className="text-lg max-w-2xl">
            A collection of useful code snippets, functions, and solutions
            I've created during my coding journey.
          </p>
        </div>
      </div>

      {/* Search and filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <Input 
              placeholder="Search snippets by title or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>{language}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setLanguageFilter('all');
            }}
            disabled={!searchTerm && languageFilter === 'all'}
          >
            Clear Filters
          </Button>
        </div>

        {/* Code Snippets List */}
        {filteredSnippets.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredSnippets.map((snippet) => (
              <CodeSnippetCard 
                key={snippet.id}
                title={snippet.title}
                description={snippet.description}
                language={snippet.language}
                code={snippet.code}
                date={snippet.date}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No code snippets found matching your criteria.</p>
            <Button 
              variant="link" 
              onClick={() => {
                setSearchTerm('');
                setLanguageFilter('all');
              }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Code;
