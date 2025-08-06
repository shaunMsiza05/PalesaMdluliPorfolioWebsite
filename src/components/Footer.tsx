import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Palesa Mdluli</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Media professional and radio presenter with a passion for excellence 
              and a proven track record in broadcasting and customer service.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:palesanarcissus@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>palesanarcissus@gmail.com</span>
              </a>
              
              <a 
                href="tel:+27614697344"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>061 469 7344</span>
              </a>
              
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>4581 One Heart Street, Evaton West, 1984</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Professional Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Radio Broadcasting & Presentation</li>
              <li>• Customer Service Excellence</li>
              <li>• Media & Communication</li>
              <li>• Counseling & Consultation</li>
              <li>• Team Leadership</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Palesa Mdluli. All rights reserved.
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;