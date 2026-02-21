import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useContactData } from '@/hooks/useContactData';
import { useSubmitInquiry } from '@/hooks/useSubmitInquiry';
import { toast } from 'sonner';

const Contact = () => {
  const { data: contactData, isLoading } = useContactData();
  const { mutate: submitInquiry, isPending } = useSubmitInquiry();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    submitInquiry(
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      {
        onSuccess: () => {
          toast.success('Thank you! Your message has been sent successfully.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        onError: (error) => {
          toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Generate Google Maps embed URL with the location coordinates
  const getMapEmbedUrl = () => {
    if (!contactData?.location) return '';
    const { latitude, longitude } = contactData.location;
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${latitude},${longitude}&zoom=15`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-base md:text-lg text-foreground/70">
            We'd love to see you at Urban Rasoi Dhaba. Drop by or get in touch!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/70">
                    {isLoading ? 'Loading...' : contactData?.phoneNumber || '123-456-7890'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">
                    {isLoading ? 'Loading...' : contactData?.email || 'hello@urbanrasoiDhaba.com'}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-foreground/70">
                    {isLoading ? 'Loading...' : contactData?.location.address || '622, Ushanagar, Narendra Tiwari Marg, Annapurna Road, Indore'}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <div className="space-y-1">
                    {isLoading ? (
                      <p className="text-sm text-foreground/70">Loading...</p>
                    ) : (
                      contactData?.hours.map((hour, index) => (
                        <p key={index} className="text-sm text-foreground/70">
                          {hour}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="bg-background rounded-xl shadow-sm overflow-hidden">
              <div className="relative w-full h-[350px]">
                {isLoading ? (
                  <div className="flex items-center justify-center h-full bg-muted">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : contactData?.location ? (
                  <iframe
                    src={getMapEmbedUrl()}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Urban Rasoi Dhaba Location"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-muted">
                    <p className="text-muted-foreground">Map unavailable</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  disabled={isPending}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  required
                  disabled={isPending}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <span className="mr-2">Sending...</span>
                    <span className="animate-spin">⏳</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
