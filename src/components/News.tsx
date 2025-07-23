import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "University Alumni Fund Reaches $50M Milestone",
      excerpt: "Thanks to generous contributions from our alumni community, the university endowment has reached a historic milestone, enabling new scholarships and research initiatives.",
      date: "2024-01-15",
      readTime: "3 min read",
      category: "Fundraising",
      featured: true
    },
    {
      title: "Class of '98 Reunion: A Weekend to Remember",
      excerpt: "Over 200 alumni gathered for the 25th reunion celebration, reconnecting with classmates and sharing career achievements.",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Events",
      featured: false
    },
    {
      title: "Alumni Startup Acquired for $150M",
      excerpt: "Congratulations to Sarah Kim '15 whose AI-powered healthcare startup was acquired by a Fortune 500 company.",
      date: "2024-01-08",
      readTime: "2 min read",
      category: "Success Stories",
      featured: false
    },
    {
      title: "New Career Services Platform Launches",
      excerpt: "Our enhanced career services platform now offers AI-powered job matching and expanded mentorship opportunities.",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "Career Services",
      featured: false
    },
    {
      title: "Global Alumni Network Expands to Asia-Pacific",
      excerpt: "New regional chapters launched in Singapore, Tokyo, and Sydney to better serve our growing international alumni base.",
      date: "2024-01-03",
      readTime: "3 min read",
      category: "Global Network",
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
    <section id="news" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-accent">News</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest updates from our alumni community, 
            university developments, and member achievements.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Article */}
          {newsArticles.filter(article => article.featured).map((article, index) => (
            <Card key={index} className="border-accent ring-1 ring-accent/20 hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                    Featured
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    <Tag className="h-3 w-3 mr-1" />
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 hover:text-accent transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  {article.excerpt}
                </p>
                <Button variant="gold">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Regular Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      <Tag className="h-3 w-3 mr-1" />
                      {article.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(article.date)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:border-accent group-hover:text-accent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;