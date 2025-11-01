import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Calendar, Code } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "Healthcare Booking Platform",
      client: "MediCare Clinics",
      industry: "Healthcare",
      challenge: "MediCare Clinics struggled with high no-show rates and inefficient phone-based appointment scheduling.",
      solution: "We built a comprehensive booking platform with automated SMS reminders and real-time availability.",
      results: ["+40% increase in online bookings", "35% reduction in no-shows"],
      image: "/homepage_hero_mockup.png",
      techStack: ["React", "Node.js", "PostgreSQL", "Twilio API"],
      duration: "3 months",
      link: "/demos",
    },
    {
      title: "E-commerce Analytics Dashboard",
      client: "RetailPro",
      industry: "E-commerce",
      challenge: "RetailPro's leadership team spent hours manually compiling sales reports from multiple sources.",
      solution: "We created a real-time analytics dashboard that aggregates data from multiple sources.",
      results: ["20% reduction in decision-making time", "$50K saved annually"],
      image: "/interactive_demos_mockup.png",
      techStack: ["React", "TypeScript", "Express", "Recharts"],
      duration: "4 months",
      link: "/demos",
    },
    {
      title: "Learn-Fy Educational Platform",
      client: "Learn-Fy (learn-fy.com)",
      industry: "Education Technology",
      challenge: "Learn-Fy needed a modern, scalable platform to deliver online courses and manage student progress effectively.",
      solution: "We developed a comprehensive learning management system with interactive course delivery, progress tracking, and student engagement tools.",
      results: ["500+ active students onboarded", "95% course completion rate"],
      image: "/learnfy_thumbnail.webp",
      techStack: ["Next.js", "AI Integration", "TailwindCSS", "Database"],
      duration: "5 months",
      link: "https://learn-fy.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Real results for real businesses. Explore our case studies to see how we've helped clients solve complex challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group"
              >
                <Card className="overflow-hidden border-border hover:shadow-2xl transition-all duration-500 hover-lift h-full relative">
                  {/* Image Container with Overlay */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="object-cover w-full h-full"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Tech Stack */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="mb-3"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Code className="h-4 w-4 text-primary" />
                              <span className="text-xs font-semibold text-white">Tech Stack</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {study.techStack.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>

                          {/* Duration */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-2 text-white mb-3"
                          >
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Duration: {study.duration}</span>
                          </motion.div>

                          {/* View Project Link */}
                          <motion.a
                            href={study.link}
                            target={study.link.startsWith("http") ? "_blank" : undefined}
                            rel={study.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                          >
                            View Project
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <CardHeader>
                    <span className="text-xs font-semibold text-primary mb-2">{study.industry}</span>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{study.challenge}</p>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <p key={idx} className="text-sm font-medium text-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {result}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
