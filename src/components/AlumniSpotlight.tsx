import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, ExternalLink } from "lucide-react";
import alumni1 from "@/assets/alumni-1.jpg";
import alumni2 from "@/assets/alumni-2.jpg";
import alumni3 from "@/assets/alumni-3.jpg";

const AlumniSpotlight = () => {
  const featuredAlumni = [
    {
      name: "Marcus Johnson",
      class: "Class of '95",
      title: "CEO & Founder",
      company: "TechVentures Inc.",
      location: "San Francisco, CA",
      image: alumni1,
      achievement: "Built a $2B fintech company, creating 500+ jobs",
      quote: "The network I built at university opened doors I never imagined."
    },
    {
      name: "Dr. Sarah Chen",
      class: "Class of '02",
      title: "Chief Medical Officer",
      company: "Global Health Initiative",
      location: "New York, NY",
      image: alumni2,
      achievement: "Leading breakthrough research in precision medicine",
      quote: "University taught me to think critically and act compassionately."
    },
    {
      name: "Roberto Martinez",
      class: "Class of '88",
      title: "Global VP of Strategy",
      company: "Fortune 100 Corporation",
      location: "London, UK",
      image: alumni3,
      achievement: "Managed international expansion across 20+ countries",
      quote: "The diverse perspectives at university shaped my global mindset."
    }
  ];

  return (
    <section id="spotlight" className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Alumni <span className="text-accent">Spotlight</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the remarkable achievements of our graduates who are making 
            a difference in industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredAlumni.map((alumni, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{alumni.class}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{alumni.name}</h3>
                  <div className="text-accent font-semibold mb-2">{alumni.title}</div>
                  
                  <div className="flex items-center text-muted-foreground text-sm mb-2">
                    <Building2 className="h-4 w-4 mr-2" />
                    {alumni.company}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {alumni.location}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {alumni.achievement}
                  </p>
                  
                  <blockquote className="text-sm italic text-foreground border-l-2 border-accent pl-3 mb-4">
                    "{alumni.quote}"
                  </blockquote>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/all-alumni">Browse All Alumni</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlumniSpotlight;