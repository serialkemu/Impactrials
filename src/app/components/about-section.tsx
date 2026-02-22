import { Users, Heart, Globe, TrendingUp, HandHeart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Built for Backpacking Africa',
      description: 'Flexible, affordable, and traveler-friendly experiences designed for conscious explorers.',
    },
    {
      icon: Users,
      title: 'Community-Led',
      description: 'Programs shaped and guided by local partners and community priorities.',
    },
    {
      icon: Heart,
      title: 'Ethical Travel',
      description: 'Thoughtful experiences that respect people, culture, and place.',
    },
    {
      icon: Globe,
      title: 'Travel Experiences',
      description: 'Hikes, cultural immersions, and nature-based adventures across Kenya.',
    },
    {
      icon: HandHeart,
      title: 'Giving Back',
      description: 'Opportunities to contribute time, skills, and resources meaningfully.',
    },
    {
      icon: MessageCircle,
      title: 'Cultural Exchange',
      description: 'Learning, sharing, and building authentic cross-cultural connections.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-6">
            About Impact Trails Africa
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-[#6B5D4F]">
            <p className="text-lg sm:text-xl leading-relaxed">
              Impact Trails Africa is a women-led travel and volunteer platform built for 
              people exploring Africa with intention.
            </p>
            <p className="leading-relaxed">
              We offer two pathways: Community-based volunteering shaped by local priorities, 
              and immersive travel experiences rooted in culture, nature, and connection.
            </p>
            <p className="leading-relaxed">
              For volunteers, we connect individuals to projects designed and guided by local communities. 
              For travelers, we curate ethical adventures that support local guides, hosts, and small businesses.
            </p>
            <p className="leading-relaxed">
              Founded by women working closely with grassroots partners, our experiences are 
              accessible, meaningful, and deeply rooted in the places we serve.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/flagged/photo-1559155359-ad9116adc821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBmYXJtaW5nJTIwY29tbXVuaXR5JTIwS2VueWF8ZW58MXx8fHwxNzcxMTkwNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="African women farming community"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMHRyYWRpdGlvbmFsJTIwaG9tZXMlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="African village traditional homes"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Why Impact Trails Africa */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#2C2417] mb-8 sm:mb-12 text-center">
            Why Impact Trails Africa
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#E8D5B9] rounded-lg hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-10 h-10 text-[#086770] mb-4" strokeWidth={1.5} />
                <h4 className="text-xl text-[#2C2417] mb-3">{feature.title}</h4>
                <p className="text-[#4A6D3A] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}