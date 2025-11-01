import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const caseStudies = [
    {
      title: "Healthcare Booking Platform",
      client: "MediCare Clinics",
      industry: "Healthcare",
      challenge: "MediCare Clinics struggled with high no-show rates and inefficient phone-based appointment scheduling.",
      solution: "We built a comprehensive booking platform with automated SMS reminders and real-time availability.",
      results: ["+40% increase in online bookings", "35% reduction in no-shows"],
      image: "/homepage_hero_mockup.png",
    },
    {
      title: "E-commerce Analytics Dashboard",
      client: "RetailPro",
      industry: "E-commerce",
      challenge: "RetailPro's leadership team spent hours manually compiling sales reports from multiple sources.",
      solution: "We created a real-time analytics dashboard that aggregates data from multiple sources.",
      results: ["20% reduction in decision-making time", "$50K saved annually"],
      image: "/interactive_demos_mockup.png",
    },
    {
      title: "Learn-Fy Educational Platform",
      client: "Learn-Fy (learn-fy.com)",
      industry: "Education Technology",
      challenge: "Learn-Fy needed a modern, scalable platform to deliver online courses and manage student progress effectively.",
      solution: "We developed a comprehensive learning management system with interactive course delivery, progress tracking, and student engagement tools.",
      results: ["500+ active students onboarded", "95% course completion rate"],
      image: "/learnfy_thumbnail.webp",
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
              >
                <Card className="overflow-hidden border-border hover:shadow-lg transition-all hover-lift h-full">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img src={study.image} alt={study.title} className="object-cover w-full h-full" />
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
