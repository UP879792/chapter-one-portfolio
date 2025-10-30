import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Calendar, Code2, Database, Globe, Lock, Palette, Rocket, Search, Settings, Smartphone, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "We build tailored web applications from the ground up using modern frameworks like React, Next.js, and Node.js. Our solutions are scalable, maintainable, and designed to grow with your business.",
      features: [
        "Full-stack development",
        "API integration",
        "Progressive Web Apps (PWA)",
        "Microservices architecture",
      ],
    },
    {
      icon: Calendar,
      title: "Booking & Scheduling Systems",
      description: "Streamline your appointment management with intelligent booking systems that reduce no-shows, automate reminders, and integrate seamlessly with your existing tools.",
      features: [
        "Real-time availability",
        "Automated notifications",
        "Payment integration",
        "Multi-location support",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Transform your data into actionable insights with custom analytics dashboards. We create intuitive visualizations that help you make data-driven decisions quickly and confidently.",
      features: [
        "Real-time data visualization",
        "Custom KPI tracking",
        "Interactive reports",
        "Export and sharing tools",
      ],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Design and optimize database architectures that handle your data efficiently and securely. From schema design to performance tuning, we ensure your data infrastructure is rock-solid.",
      features: [
        "Schema design & optimization",
        "Migration services",
        "Backup & recovery",
        "Performance monitoring",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Every application we build works flawlessly across all devices. Our mobile-first approach ensures your users have a perfect experience whether they're on desktop, tablet, or smartphone.",
      features: [
        "Mobile-first development",
        "Cross-browser compatibility",
        "Touch-optimized interfaces",
        "Adaptive layouts",
      ],
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Protect your business and your users with enterprise-grade security. We implement industry best practices and can help you meet compliance requirements like GDPR, HIPAA, and SOC 2.",
      features: [
        "Authentication & authorization",
        "Data encryption",
        "Security audits",
        "Compliance consulting",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed matters. We optimize every aspect of your application to ensure lightning-fast load times, smooth interactions, and an exceptional user experience.",
      features: [
        "Code optimization",
        "CDN integration",
        "Caching strategies",
        "Load testing",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Launch is just the beginning. Our ongoing maintenance and support plans keep your application running smoothly with regular updates, bug fixes, and feature enhancements.",
      features: [
        "24/7 monitoring",
        "Regular updates",
        "Bug fixes",
        "Feature development",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Get found online. We build SEO-friendly applications with clean code, fast performance, and proper metadata to help you rank higher in search results.",
      features: [
        "Technical SEO",
        "Performance optimization",
        "Structured data",
        "Analytics integration",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love. Our design process focuses on creating intuitive, accessible, and visually stunning experiences that drive engagement.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing",
      ],
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Build a powerful online store that converts visitors into customers. From product catalogs to secure checkout, we create complete e-commerce experiences.",
      features: [
        "Shopping cart integration",
        "Payment processing",
        "Inventory management",
        "Order tracking",
      ],
    },
    {
      icon: Rocket,
      title: "Deployment & DevOps",
      description: "Seamless deployment and continuous integration. We set up automated pipelines that make updates fast, reliable, and stress-free.",
      features: [
        "CI/CD pipelines",
        "Cloud hosting",
        "Automated testing",
        "Monitoring & alerts",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              From concept to deployment and beyond, we provide comprehensive web development
              services tailored to your unique business needs. Our expertise spans the entire
              development lifecycle, ensuring your project succeeds at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution for your business.
              Schedule a free consultation to explore how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demos">
                <Button size="lg" variant="outline">
                  View Live Demos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
