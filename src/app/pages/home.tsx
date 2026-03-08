import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { WhatsIncluded } from '../components/whats-included';
import { Heart, Users, Globe, Leaf, HandHeart, Sparkles, ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1623951581058-58138db08519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTE5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Kenya Savannah Landscape"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Explore Africa with Purpose
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8">
            Volunteer. Travel. Connect.
          </p>
          <p className="text-base sm:text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're backpacking across Africa, looking to give back meaningfully, or seeking immersive travel experiences rooted in culture and community — your journey starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/volunteer-apply" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90 text-white px-8 py-6 text-lg"
              >
                Join as a Volunteer
              </Button>
            </Link>
            <Link to="/travel" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[var(--earth-dark)] px-8 py-6 text-lg"
              >
                Explore Our Trails
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--earth-dark)] mb-6">
              About Impact Trails Africa
            </h2>
            <p className="text-lg leading-relaxed text-[var(--warm-brown)] mb-6">
              Impact Trails Africa is a women-led travel and volunteer platform built for people exploring Africa with intention.
            </p>
            <p className="text-lg leading-relaxed text-[var(--warm-brown)] mb-6">
              We offer two pathways:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--deep-green)] mb-3">
                  Community-Based Volunteering
                </h3>
                <p className="text-[var(--warm-brown)]">
                  Shaped by local priorities and guided by community partners
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[var(--deep-green)] mb-3">
                  Immersive Travel Experiences
                </h3>
                <p className="text-[var(--warm-brown)]">
                  Rooted in culture, nature, and authentic connection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Impact Trails Africa */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-4">
              Why Impact Trails Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[var(--deep-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                Built for Backpacking Africa
              </h3>
              <p className="text-[var(--warm-brown)]">
                Flexible, affordable, and traveler-friendly experiences designed for conscious explorers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--deep-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                Community-Led
              </h3>
              <p className="text-[var(--warm-brown)]">
                Programs shaped and guided by local partners and community priorities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[var(--deep-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                Ethical Travel
              </h3>
              <p className="text-[var(--warm-brown)]">
                Thoughtful experiences that respect people, culture, and place.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[var(--deep-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                Travel Experiences
              </h3>
              <p className="text-[var(--warm-brown)]">
                Hikes, cultural immersions, and nature-based adventures across Kenya.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="w-8 h-8 text-[var(--deep-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                Giving Back
              </h3>
              <p className="text-[var(--warm-brown)]">
                Opportunities to contribute time, skills, and resources meaningfully.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[var(--deep-green)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                Cultural Exchange
              </h3>
              <p className="text-[var(--warm-brown)]">
                Learning, sharing, and building authentic cross-cultural connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Connection Flow */}
      <section className="py-16 md:py-24 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-4">
              How Volunteering & Travel Connect
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-[var(--deep-green)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-[var(--earth-dark)] mb-2">
                Select a Volunteer Project
              </h3>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-[var(--clay)]" />
            <div className="md:hidden w-8 h-8 rotate-90">
              <ArrowRight className="w-8 h-8 text-[var(--clay)]" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-[var(--deep-green)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-[var(--earth-dark)] mb-2">
                Apply as a Volunteer
              </h3>
            </div>

            <ArrowRight className="hidden md:block w-8 h-8 text-[var(--clay)]" />
            <div className="md:hidden w-8 h-8 rotate-90">
              <ArrowRight className="w-8 h-8 text-[var(--clay)]" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-[var(--deep-green)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-[var(--earth-dark)] mb-2">
                Add Experiences to Your Journey
              </h3>
            </div>
          </div>

          <p className="text-center text-[var(--warm-brown)] mt-8">
            Travel experiences are optional add-ons before, during, or after volunteering.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-4">
              What to Expect
            </h2>
          </div>
          <WhatsIncluded
            included={[
              'Accommodation (as specified)',
              'Meals (as specified)',
              'Orientation and local support',
              'Project coordination',
              'Emergency contact support'
            ]}
            notIncluded={[
              'Flights and visas',
              'Travel insurance',
              'Personal expenses',
              'Optional excursions'
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--deep-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to explore with intention?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer-apply">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[var(--deep-green)] hover:bg-[var(--cream)] px-8"
              >
                VOLUNTEER WITH US
              </Button>
            </Link>
            <Link to="/travel">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[var(--deep-green)] px-8"
              >
                TRAVEL WITH US
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}