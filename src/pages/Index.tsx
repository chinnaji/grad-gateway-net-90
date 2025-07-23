import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AlumniSpotlight from "@/components/AlumniSpotlight";
import Events from "@/components/Events";
import ActiveProjects from "@/components/ActiveProjects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AlumniSpotlight />
      <Events />
      <ActiveProjects />
      <Footer />
    </div>
  );
};

export default Index;