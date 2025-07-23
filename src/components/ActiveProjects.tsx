import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Users, ArrowRight, Badge } from "lucide-react";

const ActiveProjects = () => {
  const projects = [
    {
      title: "Digital Library Archive",
      description: "Digitizing and preserving university historical documents, photographs, and publications for future generations of students and researchers.",
      image: "/placeholder.svg",
      startDate: "2024-01-15",
      category: "Education",
      participants: 25
    },
    {
      title: "Alumni Mentorship Platform",
      description: "Building a comprehensive platform to connect recent graduates with experienced alumni for career guidance and professional development.",
      image: "/placeholder.svg",
      startDate: "2023-09-10",
      category: "Technology", 
      participants: 45
    },
    {
      title: "Scholarship Fund Initiative",
      description: "Establishing a sustainable scholarship program to support underprivileged students pursuing higher education at our university.",
      image: "/placeholder.svg",
      startDate: "2023-11-22",
      category: "Fundraising",
      participants: 67
    },
    {
      title: "Campus Sustainability Program",
      description: "Implementing green technologies and sustainable practices across campus facilities to reduce environmental impact.",
      image: "/placeholder.svg",
      startDate: "2024-02-01",
      category: "Environment",
      participants: 32
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Active <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the exciting projects our alumni community is working on together. 
            Join us in making a lasting impact on our university and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {project.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {project.participants}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  Started {formatDate(project.startDate)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="group-hover:border-accent group-hover:text-accent">
                  View More Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActiveProjects;