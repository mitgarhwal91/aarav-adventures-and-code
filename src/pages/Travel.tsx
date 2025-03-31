
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PhotoCard from '@/components/PhotoCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Travel = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - in a real app this would come from an API or database
  const travelPhotos = [
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
    },
    {
      id: 4,
      imageUrl: 'https://source.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Digital Nomad Setup',
      location: 'Goa, India'
    },
    {
      id: 5,
      imageUrl: 'https://source.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Work From Beach',
      location: 'Kerala, India'
    },
    {
      id: 6,
      imageUrl: 'https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: 'Cafe Coding',
      location: 'Bangalore, India'
    }
  ];

  // Filter photos based on search term
  const filteredPhotos = travelPhotos.filter(photo => 
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-theme-blue to-theme-teal text-white p-8 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Photography</h1>
          <p className="text-lg max-w-2xl">
            Explore my journey through different landscapes, cultures, and adventures.
            Each photo tells a story of discovery and wonder.
          </p>
        </div>
      </div>

      {/* Search and filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            <Input 
              placeholder="Search photos by title or location..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setSearchTerm('')}
            disabled={!searchTerm}
          >
            Clear
          </Button>
        </div>

        {/* Photo Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <PhotoCard 
                key={photo.id}
                imageUrl={photo.imageUrl}
                title={photo.title}
                location={photo.location}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No photos found matching your search.</p>
            <Button 
              variant="link" 
              onClick={() => setSearchTerm('')}
              className="mt-2"
            >
              Clear search
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Travel;
