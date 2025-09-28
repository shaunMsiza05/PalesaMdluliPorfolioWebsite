import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "palesanarcissus@gmail.com",
      link: "mailto:palesanarcissus@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "061 469 7344",
      link: "tel:+27614697344"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "4581 One Heart Street, Evaton West, 1984",
      link: null
    }
  ];

  const references = [
    {
      name: "Siyabonga Skosana",
      title: "Station Manager",
      company: "Inakekelo Fm",
      phone: "083 926 6446"
    },
    {
      name: "Lunga Masete",
      title: "Manager", 
      company: "Ditlamelo",
      phone: "012 880 1057"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring passion and expertise to your next project. Let's discuss opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-elegant hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-muted-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-muted-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-muted-foreground">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What would you like to discuss?"
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="border-muted-foreground/20 focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full hover-lift">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-elegant hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download CV */}
            <Card className="card-elegant hover-lift bg-gradient-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Download My CV</h3>
                <p className="mb-6 opacity-90">
                  Get a comprehensive overview of my experience and qualifications
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="hover-lift"
                  onClick={() => {
                    // Create a download link for CV
                    const link = document.createElement('a');
                    link.href = '#';
                    link.download = 'Palesa_Mdluli_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV (PDF)
                </Button>
              </CardContent>
            </Card>

            {/* References */}
            <Card className="card-elegant hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">References</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {references.map((ref, index) => (
                    <div key={index} className="border-l-4 border-accent pl-4">
                      <h3 className="font-semibold text-foreground">{ref.name}</h3>
                      <p className="text-muted-foreground font-medium">{ref.title}</p>
                      <p className="text-muted-foreground">{ref.company}</p>
                      <a 
                        href={`tel:+27${ref.phone.replace(/\s/g, '')}`}
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        {ref.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;