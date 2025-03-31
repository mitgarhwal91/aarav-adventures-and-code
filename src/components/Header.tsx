
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X, Code, Image } from 'lucide-react';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <span>Aarav Garhwal</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background z-40 animate-fade-in">
                <nav className="flex flex-col gap-2 p-4">
                  <Link 
                    to="/" 
                    className="p-3 hover:bg-secondary rounded-md font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/travel" 
                    className="p-3 hover:bg-secondary rounded-md font-medium flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image size={18} /> Travel Photos
                  </Link>
                  <Link 
                    to="/code" 
                    className="p-3 hover:bg-secondary rounded-md font-medium flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Code size={18} /> Code Snippets
                  </Link>
                  <Link 
                    to="/upload" 
                    className="p-3 hover:bg-accent hover:text-accent-foreground rounded-md font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Upload Content
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-6">
            <Link to="/" className="hover:text-primary font-medium">Home</Link>
            <Link to="/travel" className="hover:text-primary font-medium flex items-center gap-1">
              <Image size={18} /> Travel Photos
            </Link>
            <Link to="/code" className="hover:text-primary font-medium flex items-center gap-1">
              <Code size={18} /> Code Snippets
            </Link>
            <Link to="/upload">
              <Button variant="default">Upload Content</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
