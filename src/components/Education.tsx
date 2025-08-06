import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Red Cross Facility and Training (Evaton)",
      program: "Comprehensive Commercial Counseling",
      year: "Completed 2017",
      description: "HIV and AIDS/TB/STIs, Grief/relationship/couples counseling, Preparing station/blood collection finger prick and quality assurance, communication/conflict management and problem solving.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-red-500"
    },
    {
      institution: "Poelano Secondary School (Evaton)",
      program: "National Senior Certificate",
      year: "Completed 2017",
      description: "Successfully completed secondary education with focus on communication and interpersonal skills development.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-500"
    }
  ];

  const certifications = [
    "HIV and AIDS Counseling Certification",
    "TB/STIs Counseling Certification", 
    "Grief Counseling Certification",
    "Relationship & Couples Counseling",
    "Blood Collection & Quality Assurance",
    "Communication & Conflict Management"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Education & Training
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive education and specialized training in counseling and communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="card-elegant hover-lift">
              <CardHeader className="bg-gradient-subtle">
                <div className="flex items-start gap-4">
                  <div className={`${edu.color} p-3 rounded-lg text-white flex-shrink-0`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary mb-2">{edu.program}</CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mb-2">{edu.institution}</p>
                    <Badge variant="secondary" className="flex items-center gap-2 w-fit">
                      <Calendar className="w-3 h-3" />
                      {edu.year}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="card-elegant hover-lift">
          <CardHeader className="text-center bg-gradient-accent text-accent-foreground">
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <Award className="w-6 h-6" />
              Professional Certifications
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;