import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Calendar, Code2, Database, Gauge, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Tailored web applications built with modern technologies to solve your unique business challenges.",
    },
    {
      icon: Calendar,
      title: "Booking & Scheduling Systems",
      description: "Automated appointment management that reduces no-shows and streamlines your operations.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Real-time data visualization and reporting tools that empower data-driven decision making.",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database architecture and optimization for high-performance applications.",
    },
  ];

  const featuredWork = [
    {
      title: "Healthcare Booking Platform",
      client: "MediCare Clinics",
      result: "+40% increase in online bookings",
      image: "/homepage_hero_mockup.png",
    },
    {
      title: "E-commerce Analytics Dashboard",
      client: "RetailPro",
      result: "20% reduction in decision-making time",
      image: "/interactive_demos_mockup.png",
    },
    {
      title: "Restaurant Reservation System",
      client: "Gourmet Bistro",
      result: "50% decrease in no-shows",
      image: "/homepage_hero_mockup.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-foreground animate-fade-in">
              Building Digital Experiences That Drive Business Growth
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-in animate-delay-100">
              We create custom web applications, booking systems, and analytics dashboards
              that transform how businesses operate and engage with their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-200">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Live Demos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we deliver comprehensive web solutions
              tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Demo Callout */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">See Our Work In Action</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Don't just take our word for it. Experience the quality and functionality
                of our solutions through our interactive demos. Test drive a fully
                functional booking system and explore a real-time analytics dashboard.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Booking System</h4>
                    <p className="text-sm text-muted-foreground">
                      Interactive calendar with real-time availability and smart scheduling
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Gauge className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Live data visualization with interactive charts and KPI tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise-Grade Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Built with industry best practices for data protection and privacy
                    </p>
                  </div>
                </div>
              </div>
              <Link href="/demos">
                <Button size="lg">
                  Explore Live Demos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/interactive_demos_mockup.png"
                alt="Interactive Demos Preview"
                className="rounded-lg shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results for real businesses. See how we've helped our clients
              achieve their goals through custom web solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-all hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-primary">
                    {project.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button variant="outline">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Build Something Great?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with a custom
              web solution designed specifically for your needs.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
