import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, Users } from 'lucide-react';

export function TravelExperiences() {
  const experiences = [
    {
      category: 'Safari Adventures',
      items: [
        {
          title: 'Masai Mara Safari',
          description: 'Experience Kenya\'s most iconic wildlife reserve with experienced local guides.',
          image: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHdpbGRsaWZlJTIwc2FmYXJpJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzExOTA2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '3-4 days',
          location: 'Masai Mara',
        },
        {
          title: 'Olkaria / Naivasha Experience',
          description: 'Explore the geothermal wonders and lake ecosystems of the Great Rift Valley.',
          image: 'https://images.unsplash.com/photo-1623951581058-58138db08519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTE5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '2 days',
          location: 'Naivasha',
        },
        {
          title: 'Nairobi National Park',
          description: 'Wildlife safari just outside the city center - perfect for a day trip.',
          image: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHdpbGRsaWZlJTIwc2FmYXJpJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzExOTA2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '1 day',
          location: 'Nairobi',
        },
      ],
    },
    {
      category: 'Coast Experiences',
      items: [
        {
          title: 'Diani Beach',
          description: 'Pristine white sand beaches and turquoise waters perfect for relaxation.',
          image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: 'Flexible',
          location: 'Diani',
        },
        {
          title: 'Kilifi',
          description: 'Historic coastal town with creek views and Swahili culture.',
          image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: 'Flexible',
          location: 'Kilifi',
        },
        {
          title: 'Mombasa',
          description: 'Vibrant coastal city with rich history and cultural heritage.',
          image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: 'Flexible',
          location: 'Mombasa',
        },
        {
          title: 'Lamu',
          description: 'UNESCO World Heritage site with traditional Swahili architecture.',
          image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: 'Flexible',
          location: 'Lamu',
        },
      ],
    },
    {
      category: 'Outdoor Adventures',
      items: [
        {
          title: 'Ngong Hills Hiking',
          description: 'Scenic day hike with panoramic views of the Great Rift Valley.',
          image: 'https://images.unsplash.com/photo-1740343328268-0a126bf87c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTE5MDYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '1 day',
          location: 'Ngong Hills',
        },
        {
          title: 'Mount Kenya Hiking',
          description: 'Multi-day trekking on Africa\'s second highest mountain.',
          image: 'https://images.unsplash.com/photo-1740343328268-0a126bf87c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTE5MDYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '3-5 days',
          location: 'Mount Kenya',
        },
      ],
    },
    {
      category: 'Cultural Immersion',
      items: [
        {
          title: 'Busia Village Experience',
          description: 'Deep cultural immersion within a Bantu community in Western Kenya.',
          image: 'https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMHRyYWRpdGlvbmFsJTIwaG9tZXMlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '2-3 days',
          location: 'Busia',
        },
        {
          title: 'Nairobi City Tour',
          description: 'Discover Nairobi\'s culture, history, and urban life in one day.',
          image: 'https://images.unsplash.com/photo-1741991109886-90e70988f27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWlyb2JpJTIwY2l0eSUyMHNreWxpbmUlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          duration: '1 day',
          location: 'Nairobi',
        },
        {
          title: 'Local Market & Cooking Experience',
          description: 'Visit a local market and learn to cook traditional Kenyan dishes.',
          image: 'https://images.unsplash.com/photo-1723643343026-b42936dba48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjb29raW5nJTIwZmlyZSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
          duration: 'Half day',
          location: 'Various',
        },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-6">
            Travel & Experiences
          </h2>
          <p className="text-lg text-[#6B5D4F] max-w-3xl mx-auto">
            Explore Kenya beyond the surface. Our travel experiences can be booked 
            independently or added to your volunteer journey.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl sm:text-3xl text-[#2C2417] mb-6 sm:mb-8">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-[#086770]/10"
                  >
                    <div className="h-56 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl text-[#2C2417] mb-3">{item.title}</h4>
                      <p className="text-[#6B5D4F] mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[#6B5D4F] mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#086770]" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-[#086770]" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <button className="w-full px-4 py-2 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}