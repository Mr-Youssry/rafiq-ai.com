
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-foreground">RafiqAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('early-access')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('early-access')}
                className="text-left bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
