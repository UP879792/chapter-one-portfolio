import BookingDemo from "@/components/BookingDemo";
import DashboardDemo from "@/components/DashboardDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Gauge } from "lucide-react";

export default function Demos() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Interactive Demos</h1>
            <p className="text-lg text-muted-foreground">
              Experience our capabilities firsthand with fully functional demos of booking systems
              and analytics dashboards. These are real, working applications that demonstrate
              the quality and functionality we deliver to our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <Tabs defaultValue="booking" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="booking" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Booking System
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Analytics Dashboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="booking" className="space-y-6">
              <Card className="border-border bg-muted/30">
                <CardHeader>
                  <CardTitle>Advanced Booking System Demo</CardTitle>
                  <CardDescription>
                    This interactive demo showcases a fully functional appointment booking system
                    with real-time availability, service selection, and automated confirmations.
                    Perfect for healthcare providers, consultants, service businesses, and any
                    organization that needs to manage appointments efficiently.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Service selection</li>
                        <li>• Calendar integration</li>
                        <li>• Time slot management</li>
                        <li>• Email confirmations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Business Benefits</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Reduce no-shows by 35%</li>
                        <li>• Save staff time</li>
                        <li>• 24/7 booking availability</li>
                        <li>• Automated reminders</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technology</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• React & TypeScript</li>
                        <li>• Database integration</li>
                        <li>• Responsive design</li>
                        <li>• API-ready backend</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="max-w-2xl mx-auto">
                <BookingDemo />
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-6">
              <Card className="border-border bg-muted/30">
                <CardHeader>
                  <CardTitle>Analytics Dashboard Demo</CardTitle>
                  <CardDescription>
                    This interactive dashboard demonstrates real-time data visualization,
                    KPI tracking, and business intelligence capabilities. Ideal for executives,
                    managers, and teams who need to make data-driven decisions quickly and
                    confidently.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Real-time KPI cards</li>
                        <li>• Interactive charts</li>
                        <li>• Data filtering</li>
                        <li>• Customer insights</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Business Benefits</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Faster decision-making</li>
                        <li>• Identify trends early</li>
                        <li>• Track performance</li>
                        <li>• Improve ROI</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technology</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Advanced charting</li>
                        <li>• Responsive layouts</li>
                        <li>• Custom metrics</li>
                        <li>• Export capabilities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <DashboardDemo />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
