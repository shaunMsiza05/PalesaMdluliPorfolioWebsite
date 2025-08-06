import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center md:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                  Palesa
                  <span className="block text-gradient">Mdluli</span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
                    Media Professional & Radio Presenter
                  </p>
                  <p className="text-lg text-primary-foreground/80">
                    Highly motivated broadcasting professional with proven excellence in radio presentation and media consulting
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-primary-foreground/90">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">palesanarcissus@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">061 469 7344</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Evaton West</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" variant="secondary" className="hover-lift">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-glow hover-lift">
                  <img 
                    src={profilePhoto} 
                    alt="Palesa Mdluli - Professional Portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-light rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;