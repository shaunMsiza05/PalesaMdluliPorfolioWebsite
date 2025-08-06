import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  Clock, 
  ShieldCheck, 
  Monitor, 
  PuzzleIcon,
  Eye,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Communication & Media",
      icon: <MessageSquare className="w-6 h-6" />,
      skills: [
        { name: "Written and verbal communication skills", level: "Expert" },
        { name: "Radio Broadcasting", level: "Expert" },
        { name: "Public Speaking", level: "Advanced" },
        { name: "Content Creation", level: "Advanced" }
      ],
      color: "bg-blue-500"
    },
    {
      title: "Customer Relations",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Customer service", level: "Expert" },
        { name: "Client Consultation", level: "Advanced" },
        { name: "Relationship Building", level: "Advanced" },
        { name: "Conflict Resolution", level: "Intermediate" }
      ],
      color: "bg-green-500"
    },
    {
      title: "Professional Skills",
      icon: <ShieldCheck className="w-6 h-6" />,
      skills: [
        { name: "Multitasking and prioritizing", level: "Expert" },
        { name: "Dependability", level: "Expert" },
        { name: "Problem-solving", level: "Advanced" },
        { name: "Ability to work under pressure", level: "Advanced" }
      ],
      color: "bg-purple-500"
    },
    {
      title: "Technical & Office",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "Familiarity with Microsoft Office", level: "Advanced" },
        { name: "Audio Equipment Operation", level: "Intermediate" },
        { name: "Social Media Management", level: "Intermediate" },
        { name: "Data Entry", level: "Intermediate" }
      ],
      color: "bg-orange-500"
    }
  ];

  const softSkills = [
    { name: "Attention to detail", icon: <Eye className="w-4 h-4" /> },
    { name: "Team Collaboration", icon: <Users className="w-4 h-4" /> },
    { name: "Time Management", icon: <Clock className="w-4 h-4" /> },
    { name: "Adaptability", icon: <Zap className="w-4 h-4" /> },
    { name: "Creative Thinking", icon: <PuzzleIcon className="w-4 h-4" /> },
    { name: "Leadership", icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive skill set built through diverse professional experiences
          </p>
        </div>

        {/* Core Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-elegant hover-lift">
              <CardHeader className="bg-gradient-subtle">
                <div className="flex items-center gap-3">
                  <div className={`${category.color} p-3 rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-muted-foreground font-medium">{skill.name}</span>
                      <Badge className={getLevelColor(skill.level)} variant="outline">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="card-elegant hover-lift">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Soft Skills & Personal Qualities</CardTitle>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="text-primary">
                    {skill.icon}
                  </div>
                  <span className="text-muted-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;