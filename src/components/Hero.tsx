import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Award } from "lucide-react";
import universityHero from "@/assets/university-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={universityHero}
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Connect.
            <br />
            <span className="text-accent">Inspire.</span>
            <br />
            Succeed.
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of university alumni building meaningful connections, 
            advancing careers, and making a lasting impact on our community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="gold" size="lg" className="text-lg px-8">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent mr-2" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">15K+</div>
              <div className="text-primary-foreground/80 text-sm">Active Alumni</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-accent mr-2" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">200+</div>
              <div className="text-primary-foreground/80 text-sm">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-accent mr-2" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground">50+</div>
              <div className="text-primary-foreground/80 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;