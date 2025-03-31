
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  location?: string;
}

const PhotoCard = ({ imageUrl, title, location }: PhotoCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <AspectRatio ratio={4/3}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          {location && <p className="text-muted-foreground text-sm">{location}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
