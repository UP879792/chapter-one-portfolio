import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: () => {
      toast.error("Failed to send message. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Fill out the form below
              or reach out directly—we typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-2">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button type="submit" disabled={submitMutation.isPending}>
                      {submitMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:welearnfy@gmail.com" className="text-muted-foreground hover:text-primary">
                    welearnfy@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
