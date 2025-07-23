import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Globe, Trophy, Heart, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, label: "Alumni Worldwide", value: "150,000+" },
    { icon: Globe, label: "Countries", value: "85" },
    { icon: Trophy, label: "Awards & Honors", value: "500+" },
    { icon: Heart, label: "Funds Raised", value: "$50M+" }
  ];

  const values = [
    {
      icon: GraduationCap,
      title: "Excellence in Education",
      description: "We champion lifelong learning and academic excellence, supporting educational initiatives that benefit current and future students."
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Building meaningful relationships among alumni, fostering collaboration and mutual support across all generations and disciplines."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Impact",
      description: "Driving positive change through innovative projects and initiatives that address real-world challenges and opportunities."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our <span className="text-accent">Alumni Network</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Connecting graduates worldwide through meaningful relationships, professional development, 
              and lifelong learning opportunities since 1950.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-accent">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The University Alumni Network exists to strengthen the lifelong connection between 
                our graduates and their alma mater. We facilitate meaningful relationships, support 
                professional growth, and create opportunities for alumni to give back to their 
                university community.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through networking events, mentorship programs, professional development workshops, 
                and philanthropic initiatives, we help our alumni achieve their personal and 
                professional goals while making a positive impact on future generations of students.
              </p>
              <Button variant="gold" size="lg">
                Join Our Community
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Alumni gathering"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide everything we do in service of our alumni community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <value.icon className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Leadership <span className="text-accent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated alumni volunteers who guide our organization and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="pt-6">
                  <img
                    src="/placeholder.svg"
                    alt="Leadership team member"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-foreground mb-1">Sarah Johnson</h3>
                  <p className="text-accent font-medium mb-2">Board President</p>
                  <p className="text-sm text-muted-foreground">Class of '95, Business</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-accent">Get Involved?</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of alumni who are making a difference in their communities and 
            supporting the next generation of students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Become a Member
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;