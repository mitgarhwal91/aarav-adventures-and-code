
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
      imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      title: 'Mountain Sunrise',
      location: 'Himalayas, India'
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      title: 'River Valley',
      location: 'Rishikesh, India'
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
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
      <section className="relative bg-gradient-to-br from-theme-purple/90 via-theme-indigo/80 to-theme-blue/90 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent drop-shadow-lg">
              Adventures in Travel & Code
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90 italic">
              —Aarav Garhwal
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white drop-shadow">
              Welcome to my personal space where I share beautiful travel moments and 
              useful code snippets from my journey as a developer and explorer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/travel">
                <Button size="lg" variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg">
                  Explore Photos
                </Button>
              </Link>
              <Link to="/code">
                <Button size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg">
                  Browse Code Snippets
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Featured Image Section */}
      <section className="container mx-auto px-4 py-16 gradient-bg">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-theme-teal bg-clip-text text-transparent drop-shadow">
            Featured Image
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-white/80 mb-8">
            Capturing moments that inspire both travel and creativity
          </p>
        </div>
        <div className="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-2xl border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
            alt="Featured landscape" 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Featured Profile Image */}
      <section className="container mx-auto px-4 py-16 gradient-bg">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent drop-shadow">
            Aarav Garhwal
          </h2>
          <div className="max-w-md mx-auto overflow-hidden rounded-lg shadow-2xl border border-white/10">
            <img 
              src="/lovable-uploads/b367f678-09f7-433f-8dab-52a488f5ff8c.png" 
              alt="Aarav Garhwal with headphones" 
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
          <p className="mt-6 text-lg text-center max-w-2xl mx-auto text-white/90">
            Explorer, coder, and music enthusiast. Join me on my journey through the worlds of technology and travel.
          </p>
        </div>
      </section>

      {/* Featured Travel Photos */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold gradient-heading">Featured Travel Photos</h2>
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
      <section className="container mx-auto px-4 py-16 gradient-bg rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold gradient-heading">Featured Code Snippets</h2>
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

      {/* User Uploaded Content Section */}
      <section className="container mx-auto px-4 py-16 gradient-bg">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-theme-teal bg-clip-text text-transparent drop-shadow">
            Your Uploaded Content
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-white/80 mb-8">
            See the content you've shared with the community
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/7d17cb9e-1f21-4b07-8657-b82c0f77bf91.jpg" 
              alt="User uploaded content" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Your Recent Upload</h3>
              <p className="text-muted-foreground">Beautiful scenery captured by you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-theme-purple/30 via-theme-indigo/20 to-theme-blue/30 py-16 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-heading">Share Your Own Adventures</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Have a great travel photo or useful code snippet? Upload and share it with the community!
          </p>
          <Link to="/upload">
            <Button size="lg" className="bg-gradient-to-r from-theme-blue via-accent to-theme-purple hover:opacity-90">Upload Content</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
