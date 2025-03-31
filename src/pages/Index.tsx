
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import PhotoCard from '@/components/PhotoCard';
import CodeSnippetCard from '@/components/CodeSnippetCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Sample data
  const featuredPhotos = [
    {
      id: 1,
      imageUrl: 'https://source.unsplash.com/photo-1469474968028-56623f02e42e',
      title: 'Mountain Sunrise',
      location: 'Himalayas, India'
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/photo-1482938289607-e9573fc25ebb',
      title: 'River Valley',
      location: 'Rishikesh, India'
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/photo-1470813740244-df37b8c1edcb',
      title: 'Night Sky',
      location: 'Ladakh, India'
    }
  ];

  const featuredCode = [
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
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Adventures in Travel & Code
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Welcome to my personal space where I share beautiful travel moments and 
              useful code snippets from my journey as a developer and explorer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/travel">
                <Button size="lg" variant="secondary" className="text-primary">
                  Explore Photos
                </Button>
              </Link>
              <Link to="/code">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Browse Code Snippets
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Travel Photos */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Travel Photos</h2>
          <Link to="/travel" className="text-primary flex items-center hover:underline">
            View all <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhotos.map((photo) => (
            <PhotoCard 
              key={photo.id}
              imageUrl={photo.imageUrl}
              title={photo.title}
              location={photo.location}
            />
          ))}
        </div>
      </section>

      {/* Featured Code Snippets */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Code Snippets</h2>
          <Link to="/code" className="text-primary flex items-center hover:underline">
            View all <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {featuredCode.map((snippet) => (
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
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Own Adventures</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have a great travel photo or useful code snippet? Upload and share it with the community!
          </p>
          <Link to="/upload">
            <Button size="lg">Upload Content</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
