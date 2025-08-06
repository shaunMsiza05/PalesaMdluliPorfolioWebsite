import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", section: "about" },
    { label: "Experience", section: "experience" },
    { label: "Skills", section: "skills" },
    { label: "Education", section: "education" },
    { label: "Contact", section: "contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            Palesa Mdluli
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              variant={isScrolled ? "default" : "secondary"} 
              size="sm" 
              className="hover-lift"
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-card">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4">
                <Button variant="default" size="sm" className="w-full hover-lift">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;