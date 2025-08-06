import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Radio, Users, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Presenter",
      company: "Timeline Radio (Johannesburg)",
      period: "Nov 2020 - Dec 2022",
      icon: <Radio className="w-6 h-6" />,
      achievements: [
        "Introduced streamlined system for music libraries and media files",
        "Educated listeners about breaking news and led regular station news announcements",
        "Gathered audience feedback and peer suggestions to consistently improve presentation",
        "Offered commentary on music, local politics and other matters",
        "Provided commentary during sporting events, parades and conventions"
      ],
      color: "bg-blue-500"
    },
    {
      title: "Provident Fund Specialist",
      company: "Ditlamelo Benefits Consulting (Johannesburg)",
      period: "Jun 2020 - Oct 2022",
      icon: <TrendingUp className="w-6 h-6" />,
      achievements: [
        "Exceeded customer satisfaction by finding creative solutions to problems",
        "Recognized by management for providing exceptional customer service",
        "Planned and completed group projects, working smoothly with others",
        "Assisted with customer requests and answered questions to improve satisfaction",
        "Promoted high customer satisfaction by resolving problems with knowledgeable and friendly service",
        "Assisted clients with claiming under 37C"
      ],
      color: "bg-green-500"
    },
    {
      title: "Radio Presenter",
      company: "Inakekelo FM Radio (Siyabuswa)",
      period: "May 2019 - Apr 2020",
      icon: <Mic className="w-6 h-6" />,
      achievements: [
        "Planned shows by selecting music and topics and writing content",
        "Introduced fresh and news angles on previously material to update and inform listeners",
        "Read news flashes to inform audiences of important events",
        "Used proper elocution and articulation to deliver news and features stories during broadcasts",
        "Shared public service announcement, music information and upcoming events with audiences",
        "Interviewed show guests about lives, work or topics of current interest",
        "Built relationships with sponsors to promote endorsements",
        "Helped increase active listener audience by posting updates on station's social media pages",
        "Educated listeners about breaking news and led regular station news announcements"
      ],
      color: "bg-purple-500"
    },
    {
      title: "Merchandiser",
      company: "PicknPay (Johannesburg)",
      period: "Dec 2017 - Oct 2018",
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "Examined stock to verify conformance to quality specifications and took pride in products being distributed",
        "Created retail displays to highlight particular product and drive sales according to corporate strategy",
        "Printed labels and tags for sale merchandise",
        "Kept work area clean, neat and organized for optimal productivity and worker safety",
        "Placed price and descriptive signage to enhance display and promote items",
        "Scanned shelves and product cases for expired stock to discard outdated items"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A proven track record of excellence across media, consulting, and retail sectors
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-elegant hover-lift overflow-hidden">
              <CardHeader className="bg-gradient-subtle">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`${exp.color} p-3 rounded-lg text-white`}>
                      {exp.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-sm font-medium">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;