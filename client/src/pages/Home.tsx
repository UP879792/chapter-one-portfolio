import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Calendar, Code2, Database } from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  const servicesRef = useRef(null);
  const demoRef = useRef(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"
          style={{ y: heroY }}
        />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1
              className="mb-6 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Digital Experiences That Drive Business Growth
            </motion.h1>
            <motion.p
              className="mb-8 text-lg text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We create custom web applications, booking systems, and analytics dashboards
              that transform how businesses operate and engage with their customers.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview with Stagger Animation */}
      <section className="py-16 md:py-24" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we deliver comprehensive web solutions
              tailored to your business needs.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border hover:border-primary transition-all hover-lift h-full">
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
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/services">
              <Button variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Live Demo Callout with Parallax Image */}
      <section className="py-16 md:py-24 bg-muted/30" ref={demoRef}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">See Our Work In Action</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Don't just take our word for it. Experience the quality and functionality
                of our solutions through our interactive demos. Test drive a fully
                functional booking system and explore a real-time analytics dashboard.
              </p>
              <div className="space-y-4 mb-8">
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Advanced Booking System</h4>
                    <p className="text-sm text-muted-foreground">
                      Interactive calendar with real-time availability and smart scheduling
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time data visualization with interactive charts and KPI tracking
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise-Grade Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Built with industry-best practices for data protection and privacy
                    </p>
                  </div>
                </motion.div>
              </div>
              <Link href="/demos">
                <Button size="lg">
                  Explore Live Demos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/interactive_demos_mockup.png"
                alt="Interactive Demos Preview"
                className="rounded-lg shadow-2xl border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work with Stagger */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results for real businesses. See how we've helped our clients
              achieve their goals through custom web solutions.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuredWork.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all hover-lift h-full">
                  <motion.div
                    className="aspect-video bg-muted relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
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
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/portfolio">
              <Button variant="outline">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">Ready to Build Something Great?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with a custom web
              solution designed specifically for your needs.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
