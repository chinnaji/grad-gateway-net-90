import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, GraduationCap, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import alumni1 from "@/assets/alumni-1.jpg";
import alumni2 from "@/assets/alumni-2.jpg";
import alumni3 from "@/assets/alumni-3.jpg";

const AllAlumni = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allAlumni = [
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
    },
    {
      name: "Jennifer Williams",
      class: "Class of '01",
      title: "Senior Software Engineer",
      company: "Meta",
      location: "Seattle, WA",
      image: alumni1,
      achievement: "Led development of critical infrastructure serving billions",
      quote: "University taught me to solve complex problems systematically."
    },
    {
      name: "Ahmed Hassan",
      class: "Class of '93",
      title: "Investment Director",
      company: "Goldman Sachs",
      location: "Dubai, UAE",
      image: alumni2,
      achievement: "Managed $5B+ in investment portfolios across MENA region",
      quote: "The analytical skills I learned continue to guide my decisions."
    },
    {
      name: "Lisa Thompson",
      class: "Class of '99",
      title: "Principal Consultant",
      company: "McKinsey & Company",
      location: "Toronto, Canada",
      image: alumni3,
      achievement: "Advised Fortune 500 companies on digital transformation",
      quote: "University prepared me to tackle any challenge with confidence."
    }
  ];

  const filteredAlumni = allAlumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All <span className="text-accent">Alumni</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with our amazing community of graduates making their mark around the world.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search alumni by name, class, company, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni, index) => (
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
                  
                  <blockquote className="text-sm italic text-foreground border-l-2 border-accent pl-3">
                    "{alumni.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No alumni found matching your search criteria.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default AllAlumni;