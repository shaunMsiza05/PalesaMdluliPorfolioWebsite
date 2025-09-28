import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Mic, Radio, Volume2 } from "lucide-react";
import { generatePalesaCVPDF } from "@/utils/generatePDF";

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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift"
                  onClick={generatePalesaCVPDF}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Professional Visual Element */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Main Broadcasting Symbol */}
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/20 backdrop-blur-sm border border-accent/30 shadow-glow hover-lift flex items-center justify-center">
                  <div className="relative">
                    {/* Radio Waves Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-2 border-accent/40 animate-ping"></div>
                      <div className="absolute w-24 h-24 rounded-full border-2 border-accent/60 animate-ping animation-delay-200"></div>
                      <div className="absolute w-16 h-16 rounded-full border-2 border-accent/80 animate-ping animation-delay-400"></div>
                    </div>
                    
                    {/* Center Microphone Icon */}
                    <div className="relative z-10 bg-gradient-to-br from-accent to-accent-light p-6 rounded-full shadow-xl">
                      <Mic className="w-12 h-12 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full p-3 animate-pulse">
                  <Radio className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent-light/20 backdrop-blur-sm border border-accent-light/30 rounded-full p-2 animate-pulse delay-1000">
                  <Volume2 className="w-5 h-5 text-accent-light" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;