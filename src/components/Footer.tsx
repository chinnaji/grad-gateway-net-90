import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Events", href: "#events" },
        { label: "All Alumni", href: "/all-alumni" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Store", href: "/store" },
        { label: "Projects", href: "/projects" },
        { label: "Career Services", href: "#careers" },
        { label: "Mentorship", href: "#mentorship" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Newsletter", href: "#newsletter" },
        { label: "Alumni Directory", href: "#directory" },
        { label: "Event Calendar", href: "#calendar" },
        { label: "Contact Us", href: "#contact" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="University Alumni Logo" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">University Alumni</span>
                  <span className="text-sm text-primary-foreground/80">Network</span>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Connecting graduates worldwide through meaningful relationships, 
                professional development, and lifelong learning opportunities.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.slice(0, 2).map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-accent mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact & Social Section */}
            <div>
              <h3 className="text-lg font-semibold text-accent mb-4">
                Contact Us
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-accent" />
                  <span className="text-sm">123 University Ave, Campus City, ST 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-accent" />
                  <span className="text-sm">(555) 123-ALUM</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-accent" />
                  <span className="text-sm">alumni@university.edu</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 University Alumni Network. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;