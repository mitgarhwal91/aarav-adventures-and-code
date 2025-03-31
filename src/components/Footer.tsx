
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Aarav Garhwal</h3>
            <p className="text-muted-foreground">
              Sharing my adventures in travel and coding. 
              Exploring the world one photo and one script at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/travel" className="hover:text-primary">Travel Photos</Link></li>
              <li><Link to="/code" className="hover:text-primary">Code Snippets</Link></li>
              <li><Link to="/upload" className="hover:text-primary">Upload</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <p className="text-muted-foreground mb-2">
              Want to collaborate or get in touch?
            </p>
            <p>
              <a href="mailto:aarav@example.com" className="text-primary hover:underline">
                aarav@example.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aarav Garhwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
