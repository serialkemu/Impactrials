import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-24 pb-16 bg-[var(--cream)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--earth-dark)] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[var(--warm-brown)]">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-[var(--earth-dark)] mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" rows={6} required />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-[var(--earth-dark)] mb-6">
                    Get in touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[var(--deep-green)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--earth-dark)] mb-1">
                          Email
                        </h3>
                        <a 
                          href="mailto:info@impacttrailsafrica.com"
                          className="text-[var(--warm-brown)] hover:text-[var(--clay)]"
                        >
                          info@impacttrailsafrica.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[var(--deep-green)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--earth-dark)] mb-1">
                          Phone
                        </h3>
                        <a 
                          href="tel:+254700000000"
                          className="text-[var(--warm-brown)] hover:text-[var(--clay)]"
                        >
                          +254 700 000 000
                        </a>
                        <p className="text-sm text-[var(--warm-brown)] mt-1">
                          WhatsApp available
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--cream)] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[var(--deep-green)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--earth-dark)] mb-1">
                          Location
                        </h3>
                        <p className="text-[var(--warm-brown)]">
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[var(--deep-green)] text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">
                    Office Hours
                  </h3>
                  <p className="mb-2">Monday - Friday: 9:00 AM - 5:00 PM EAT</p>
                  <p className="mb-4">Saturday: 10:00 AM - 2:00 PM EAT</p>
                  <p className="text-sm opacity-90">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
