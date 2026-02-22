import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[var(--deep-green)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Community"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Impact Trails Africa
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[var(--warm-brown)]">
              Impact Trails Africa is a women-led travel and volunteer platform built for people exploring Africa with intention.
            </p>
            
            <h2 className="text-3xl font-bold text-[var(--earth-dark)] mt-12 mb-6">
              We offer two pathways:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <div className="bg-[var(--cream)] p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[var(--deep-green)] mb-4">
                  Community-Based Volunteering
                </h3>
                <p className="text-[var(--warm-brown)] leading-relaxed">
                  Shaped by local priorities and guided by community partners. Our volunteer programs are designed and led by the communities themselves, ensuring that every contribution is meaningful, respectful, and aligned with local needs.
                </p>
              </div>
              
              <div className="bg-[var(--cream)] p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-[var(--deep-green)] mb-4">
                  Immersive Travel Experiences
                </h3>
                <p className="text-[var(--warm-brown)] leading-relaxed">
                  Rooted in culture, nature, and authentic connection. We curate ethical adventures that support local guides, hosts, and small businesses, offering travelers a chance to experience Kenya beyond the typical tourist trail.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-lg leading-relaxed text-[var(--warm-brown)]">
                For volunteers, we connect individuals to projects designed and guided by local communities. 
                For travelers, we curate ethical adventures that support local guides, hosts, and small businesses.
              </p>
              
              <p className="text-lg leading-relaxed text-[var(--warm-brown)] mt-6">
                Founded by women working closely with grassroots partners, our experiences are accessible, 
                meaningful, and deeply rooted in the places we serve.
              </p>
              
              <p className="text-lg leading-relaxed text-[var(--warm-brown)] mt-6">
                Whether you're traveling, volunteering, or combining both — we have what you're looking for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1759344114577-b6c32e4d68c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmFybSUyMGFncmljdWx0dXJlJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzExOTExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agriculture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-12 text-center">
            Our Commitment
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-[var(--deep-green)] pl-6">
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-2">
                Community-First Approach
              </h3>
              <p className="text-[var(--warm-brown)] leading-relaxed">
                Every program is shaped by local priorities. We work alongside community leaders, 
                not in place of them, ensuring that volunteer placements strengthen—not disrupt—existing initiatives.
              </p>
            </div>
            
            <div className="border-l-4 border-[var(--clay)] pl-6">
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-2">
                Ethical & Responsible Travel
              </h3>
              <p className="text-[var(--warm-brown)] leading-relaxed">
                We believe travel should benefit the places and people you visit. Our experiences 
                support local economies, respect cultural practices, and promote environmental sustainability.
              </p>
            </div>
            
            <div className="border-l-4 border-[var(--olive)] pl-6">
              <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-2">
                Accessible & Backpacker-Friendly
              </h3>
              <p className="text-[var(--warm-brown)] leading-relaxed">
                We design experiences for travelers on the move. Whether you're backpacking across 
                Africa or planning a focused volunteer stint, our programs are flexible, affordable, and built for real travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-[var(--deep-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Launching in Kenya. Expanding across Africa.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join us as we build a new model for ethical travel and community engagement.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
