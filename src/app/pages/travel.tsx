import { Link } from 'react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Clock, Users } from 'lucide-react';

const travelExperiences = {
  safari: [
    {
      id: 'masai-mara',
      title: 'Masai Mara Safari',
      description: 'Experience Kenya\'s iconic wildlife in one of Africa\'s most spectacular reserves.',
      image: 'https://images.unsplash.com/photo-1685301093591-1203b0b15eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyME1hc2FpJTIwTWFyYSUyMHNhZmFyaSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExOTExNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2-4 days',
      location: 'Masai Mara',
      category: 'Safari Adventures'
    },
    {
      id: 'olkaria-naivasha',
      title: 'Olkaria / Naivasha Experience',
      description: 'Explore geothermal wonders and the beautiful Lake Naivasha region.',
      image: 'https://images.unsplash.com/photo-1623951581058-58138db08519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTE5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '1-2 days',
      location: 'Naivasha',
      category: 'Safari Adventures'
    },
    {
      id: 'nairobi-national-park',
      title: 'Nairobi National Park',
      description: 'Wildlife safari with Nairobi\'s skyline as your backdrop.',
      image: 'https://images.unsplash.com/photo-1685301093591-1203b0b15eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyME1hc2FpJTIwTWFyYSUyMHNhZmFyaSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExOTExNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Half day',
      location: 'Nairobi',
      category: 'Safari Adventures'
    }
  ],
  coast: [
    {
      id: 'diani',
      title: 'Diani Beach',
      description: 'White sandy beaches and turquoise waters on Kenya\'s stunning coastline.',
      image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNvYXN0JTIwYmVhY2glMjBEaWFuaXxlbnwxfHx8fDE3NzExOTExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3-7 days',
      location: 'Diani',
      category: 'Coast Experiences'
    },
    {
      id: 'kilifi',
      title: 'Kilifi',
      description: 'Relaxed coastal town with pristine beaches and local culture.',
      image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNvYXN0JTIwYmVhY2glMjBEaWFuaXxlbnwxfHx8fDE3NzExOTExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2-5 days',
      location: 'Kilifi',
      category: 'Coast Experiences'
    },
    {
      id: 'mombasa',
      title: 'Mombasa',
      description: 'Historic coastal city blending Swahili culture and beach life.',
      image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNvYXN0JTIwYmVhY2glMjBEaWFuaXxlbnwxfHx8fDE3NzExOTExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2-4 days',
      location: 'Mombasa',
      category: 'Coast Experiences'
    },
    {
      id: 'lamu',
      title: 'Lamu',
      description: 'UNESCO World Heritage island with authentic Swahili architecture.',
      image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNvYXN0JTIwYmVhY2glMjBEaWFuaXxlbnwxfHx8fDE3NzExOTExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3-5 days',
      location: 'Lamu',
      category: 'Coast Experiences'
    }
  ],
  outdoor: [
    {
      id: 'ngong-hills',
      title: 'Ngong Hills Hiking',
      description: 'Scenic hiking trail with panoramic views of the Rift Valley.',
      image: 'https://images.unsplash.com/photo-1646159755791-54e741749028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzcxMTkxMTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Full day',
      location: 'Ngong',
      category: 'Outdoor Adventures'
    },
    {
      id: 'mount-kenya',
      title: 'Mount Kenya Hiking',
      description: 'Multi-day trek on Africa\'s second-highest mountain.',
      image: 'https://images.unsplash.com/photo-1646159755791-54e741749028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzcxMTkxMTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3-5 days',
      location: 'Mount Kenya',
      category: 'Outdoor Adventures'
    }
  ],
  cultural: [
    {
      id: 'busia-village',
      title: 'Busia Village Experience',
      description: 'Deep cultural immersion in a Bantu community with traditional activities.',
      image: 'https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2-3 days',
      location: 'Busia',
      category: 'Cultural Immersion'
    },
    {
      id: 'nairobi-city-tour',
      title: 'Nairobi City Tour',
      description: 'Structured day tour exploring Kenya\'s vibrant capital city.',
      image: 'https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwY29sb3JmdWwlMjBsb2NhbHxlbnwxfHx8fDE3NzExOTExNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Full day',
      location: 'Nairobi',
      category: 'Cultural Immersion'
    },
    {
      id: 'market-cooking',
      title: 'Local Market & Cooking Experience',
      description: 'Visit local markets and learn to cook traditional Kenyan dishes.',
      image: 'https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwY29sb3JmdWwlMjBsb2NhbHxlbnwxfHx8fDE3NzExOTExNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: 'Half day',
      location: 'Various',
      category: 'Cultural Immersion'
    }
  ]
};

export function TravelPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1685301093591-1203b0b15eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyME1hc2FpJTIwTWFyYSUyMHNhZmFyaSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzExOTExNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travel & Experiences
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Explore Kenya beyond the surface
          </p>
        </div>
      </section>

      {/* Safari Adventures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-8">
            Safari Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelExperiences.safari.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Coast Experiences */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-8">
            Coast Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelExperiences.coast.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Adventures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-8">
            Outdoor Adventures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelExperiences.outdoor.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Immersion */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--earth-dark)] mb-8">
            Cultural Immersion Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelExperiences.cultural.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--deep-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            All experiences include local guides and support local businesses
          </p>
          <Link to="/travel-booking">
            <Button
              size="lg"
              className="bg-white text-[var(--deep-green)] hover:bg-[var(--cream)]"
            >
              Start Booking
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ExperienceCard({ experience }: { experience: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-2">
          {experience.title}
        </h3>
        <p className="text-[var(--warm-brown)] mb-4">
          {experience.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-[var(--warm-brown)]">
            <MapPin size={16} />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--warm-brown)]">
            <Clock size={16} />
            <span>{experience.duration}</span>
          </div>
        </div>
        <Link to={`/travel/${experience.id}`}>
          <Button className="w-full bg-[var(--clay)] hover:bg-[var(--clay)]/90">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}