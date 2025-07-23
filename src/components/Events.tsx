import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Alumni Gala",
      date: "2024-03-15",
      time: "7:00 PM",
      location: "Grand Ballroom, University Center",
      attendees: 300,
      type: "Networking",
      description: "Join us for an elegant evening of networking, awards, and celebration.",
      featured: true
    },
    {
      title: "Tech Industry Panel",
      date: "2024-02-20",
      time: "6:30 PM",
      location: "Innovation Hub",
      attendees: 85,
      type: "Career",
      description: "Learn from alumni leaders in technology and innovation.",
      featured: false
    },
    {
      title: "Regional Meetup - West Coast",
      date: "2024-02-28",
      time: "5:00 PM",
      location: "San Francisco, CA",
      attendees: 45,
      type: "Social",
      description: "Casual networking event for West Coast alumni.",
      featured: false
    },
    {
      title: "Career Mentorship Workshop",
      date: "2024-03-05",
      time: "2:00 PM",
      location: "Virtual Event",
      attendees: 120,
      type: "Professional Development",
      description: "Connect with mentors and enhance your career trajectory.",
      featured: false
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
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Upcoming <span className="text-accent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected through our diverse range of networking events, 
            professional development sessions, and social gatherings.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-elegant transition-all duration-300 ${
                event.featured ? 'border-accent ring-1 ring-accent/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground group-hover:text-accent transition-colors">
                      {event.title}
                      {event.featured && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                          Featured
                        </span>
                      )}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                      {event.type}
                    </span>
                    <Button variant={event.featured ? "gold" : "outline"} size="sm">
                      Register Now
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/events">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;