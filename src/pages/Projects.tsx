import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Library Archive",
      description: "Digitizing and preserving university historical documents, photographs, and publications for future generations of students and researchers.",
      image: "/placeholder.svg",
      startDate: "2024-01-15",
      category: "Education",
      participants: 25,
      status: "Active"
    },
    {
      id: 2,
      title: "Alumni Mentorship Platform",
      description: "Building a comprehensive platform to connect recent graduates with experienced alumni for career guidance and professional development.",
      image: "/placeholder.svg",
      startDate: "2023-09-10",
      category: "Technology",
      participants: 45,
      status: "Active"
    },
    {
      id: 3,
      title: "Scholarship Fund Initiative",
      description: "Establishing a sustainable scholarship program to support underprivileged students pursuing higher education at our university.",
      image: "/placeholder.svg",
      startDate: "2023-11-22",
      category: "Fundraising",
      participants: 67,
      status: "Active"
    },
    {
      id: 4,
      title: "Campus Sustainability Program",
      description: "Implementing green technologies and sustainable practices across campus facilities to reduce environmental impact.",
      image: "/placeholder.svg",
      startDate: "2024-02-01",
      category: "Environment",
      participants: 32,
      status: "Planning"
    },
    {
      id: 5,
      title: "International Exchange Hub",
      description: "Creating partnerships with global universities to expand study abroad opportunities and cultural exchange programs.",
      image: "/placeholder.svg",
      startDate: "2023-08-14",
      category: "Global",
      participants: 18,
      status: "Active"
    },
    {
      id: 6,
      title: "Research Innovation Center",
      description: "Establishing a state-of-the-art research facility to support cutting-edge scientific and technological research projects.",
      image: "/placeholder.svg",
      startDate: "2024-03-05",
      category: "Research",
      participants: 89,
      status: "Planning"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Planning':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Alumni <span className="text-accent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the exciting projects our alumni community is working on together. 
            Join us in making a lasting impact on our university and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Started {formatDate(project.startDate)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {project.participants} participants
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-accent group-hover:text-accent"
                  onClick={() => {}}
                >
                  View More Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for innovative projects that can benefit our university community. 
              Share your ideas and help us build something amazing together.
            </p>
            <Button variant="gold" size="lg">
              Propose a Project
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;