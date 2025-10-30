import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Chapter One</h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate developers, designers, and strategists dedicated to building
              digital experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                At Chapter One, we believe that great software should be accessible to businesses of all sizes.
                Our mission is to deliver enterprise-quality web applications that are tailored to your unique
                needs, without the enterprise price tag or complexity.
              </p>
            </div>
            <div>
              <h2 className="mb-4">What Sets Us Apart</h2>
              <p className="text-muted-foreground mb-4">
                We don't just build websites—we create solutions. Every project starts with understanding your
                business goals, challenges, and vision. From there, we craft custom applications that solve real
                problems and deliver measurable results.
              </p>
              <p className="text-muted-foreground">
                Our team combines technical excellence with business acumen, ensuring that every line of code
                contributes to your bottom line. We're not satisfied until your users are delighted and your
                metrics are moving in the right direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start your next project? We'd love to hear about your vision and explore
              how we can help bring it to life.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
