import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addDays, format, isSameDay, startOfDay } from "date-fns";
import { Calendar, Check } from "lucide-react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { toast } from "sonner";

const services = [
  { id: "consultation", name: "Free Consultation", duration: "30 min" },
  { id: "discovery", name: "Discovery Session", duration: "60 min" },
  { id: "technical", name: "Technical Review", duration: "45 min" },
  { id: "demo", name: "Product Demo", duration: "30 min" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export default function BookingDemo() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !name || !email) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService,
          date: selectedDate.toISOString(),
          timeSlot: selectedTime,
          name,
          email,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create booking');
      }

      setShowSuccess(true);
      toast.success("Booking confirmed! Check your email for details.");

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedService("");
        setSelectedDate(undefined);
        setSelectedTime("");
        setName("");
        setEmail("");
      }, 3000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabledDays = [
    { before: new Date() },
    { dayOfWeek: [0, 6] }, // Disable weekends
  ];

  if (showSuccess) {
    return (
      <Card className="border-primary bg-primary/5">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-4">
              We've sent a confirmation email to {email}
            </p>
            <div className="bg-background rounded-lg p-4 max-w-sm mx-auto">
              <p className="text-sm font-medium">
                {services.find(s => s.id === selectedService)?.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedDate && format(selectedDate, "MMMM d, yyyy")} at {selectedTime}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Book an Appointment
        </CardTitle>
        <CardDescription>
          Select a service, choose a date and time, and provide your contact information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <Label>Select Service</Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.name} ({service.duration})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Calendar */}
          <div className="space-y-2">
            <Label>Select Date</Label>
            <div className="border rounded-lg p-4 flex justify-center">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={disabledDays}
                fromDate={new Date()}
                toDate={addDays(new Date(), 60)}
                className="rdp-custom"
              />
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="space-y-2">
              <Label>Select Time</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant={selectedTime === time ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          {selectedTime && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="booking-name">Your Name</Label>
                <Input
                  id="booking-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="booking-email">Email Address</Label>
                <Input
                  id="booking-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          {selectedTime && (
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Confirming..." : "Confirm Booking"}
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
