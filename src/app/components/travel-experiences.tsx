import { useState, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, Search, SlidersHorizontal, X, DollarSign, ChevronDown } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  location: string;
  category: string;
  price: number;
  priceUnit: string;
}

const ALL_EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: 'Masai Mara Safari',
    description: "Experience Kenya's most iconic wildlife reserve with experienced local guides.",
    image: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHdpbGRsaWZlJTIwc2FmYXJpJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzExOTA2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3-4 days',
    location: 'Masai Mara',
    category: 'Safari Adventures',
    price: 450,
    priceUnit: 'per person',
  },
  {
    id: 2,
    title: 'Olkaria / Naivasha Experience',
    description: 'Explore the geothermal wonders and lake ecosystems of the Great Rift Valley.',
    image: 'https://images.unsplash.com/photo-1623951581058-58138db08519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTE5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2 days',
    location: 'Naivasha',
    category: 'Safari Adventures',
    price: 220,
    priceUnit: 'per person',
  },
  {
    id: 3,
    title: 'Nairobi National Park',
    description: 'Wildlife safari just outside the city center — perfect for a day trip.',
    image: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHdpbGRsaWZlJTIwc2FmYXJpJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzExOTA2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1 day',
    location: 'Nairobi',
    category: 'Safari Adventures',
    price: 95,
    priceUnit: 'per person',
  },
  {
    id: 4,
    title: 'Diani Beach',
    description: 'Pristine white sand beaches and turquoise waters perfect for relaxation.',
    image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Flexible',
    location: 'Diani',
    category: 'Coast Experiences',
    price: 180,
    priceUnit: 'per person',
  },
  {
    id: 5,
    title: 'Kilifi Creek & Old Town',
    description: 'Historic coastal town with creek views, Swahili ruins, and fishing communities.',
    image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Flexible',
    location: 'Kilifi',
    category: 'Coast Experiences',
    price: 140,
    priceUnit: 'per person',
  },
  {
    id: 6,
    title: 'Mombasa Old Town',
    description: 'Vibrant coastal city with rich Swahili history and Fort Jesus heritage.',
    image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Flexible',
    location: 'Mombasa',
    category: 'Coast Experiences',
    price: 110,
    priceUnit: 'per person',
  },
  {
    id: 7,
    title: 'Lamu Island',
    description: 'UNESCO World Heritage site with traditional Swahili architecture and donkey paths.',
    image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Flexible',
    location: 'Lamu',
    category: 'Coast Experiences',
    price: 200,
    priceUnit: 'per person',
  },
  {
    id: 8,
    title: 'Ngong Hills Hiking',
    description: 'Scenic day hike with panoramic views of the Great Rift Valley.',
    image: 'https://images.unsplash.com/photo-1740343328268-0a126bf87c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTE5MDYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1 day',
    location: 'Ngong Hills',
    category: 'Outdoor Adventures',
    price: 60,
    priceUnit: 'per person',
  },
  {
    id: 9,
    title: 'Mount Kenya Hiking',
    description: "Multi-day trekking on Africa's second highest mountain through bamboo forests.",
    image: 'https://images.unsplash.com/photo-1740343328268-0a126bf87c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTE5MDYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3-5 days',
    location: 'Mount Kenya',
    category: 'Outdoor Adventures',
    price: 380,
    priceUnit: 'per person',
  },
  {
    id: 10,
    title: 'Busia Village Experience',
    description: 'Deep cultural immersion within a Bantu community in Western Kenya.',
    image: 'https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMHRyYWRpdGlvbmFsJTIwaG9tZXMlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2-3 days',
    location: 'Busia',
    category: 'Cultural Immersion',
    price: 200,
    priceUnit: 'per person',
  },
  {
    id: 11,
    title: 'Nairobi City Tour',
    description: "Discover Nairobi's culture, history, markets, and urban life in one day.",
    image: 'https://images.unsplash.com/photo-1741991109886-90e70988f27b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWlyb2JpJTIwY2l0eSUyMHNreWxpbmUlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '1 day',
    location: 'Nairobi',
    category: 'Cultural Immersion',
    price: 75,
    priceUnit: 'per group',
  },
  {
    id: 12,
    title: 'Local Market & Cooking',
    description: 'Visit a local market and learn to cook traditional Kenyan dishes.',
    image: 'https://images.unsplash.com/photo-1723643343026-b42936dba48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjb29raW5nJTIwZmlyZSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: 'Half day',
    location: 'Various',
    category: 'Cultural Immersion',
    price: 45,
    priceUnit: 'per person',
  },
];

const CATEGORIES = ['All', 'Safari Adventures', 'Coast Experiences', 'Outdoor Adventures', 'Cultural Immersion'];

const DURATION_OPTIONS = [
  { label: 'Any Duration', value: 'all' },
  { label: 'Half day – 1 day', value: 'short' },
  { label: '2–3 days', value: 'medium' },
  { label: '4+ days', value: 'long' },
  { label: 'Flexible', value: 'flexible' },
];

const PRICE_OPTIONS = [
  { label: 'Any Price', value: 'all' },
  { label: 'Under $100', value: 'under100' },
  { label: '$100 – $250', value: '100-250' },
  { label: '$250 – $400', value: '250-400' },
  { label: 'Over $400', value: 'over400' },
];

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Shortest First', value: 'duration-asc' },
];

function matchesDuration(duration: string, filter: string): boolean {
  if (filter === 'all') return true;
  if (filter === 'flexible') return duration.toLowerCase() === 'flexible';
  const d = duration.toLowerCase();
  if (filter === 'short') return d.includes('half') || d === '1 day';
  if (filter === 'medium') return d.includes('2') || d.includes('3');
  if (filter === 'long') return d.includes('4') || d.includes('5') || d.includes('6');
  return true;
}

function matchesPrice(price: number, filter: string): boolean {
  if (filter === 'all') return true;
  if (filter === 'under100') return price < 100;
  if (filter === '100-250') return price >= 100 && price <= 250;
  if (filter === '250-400') return price > 250 && price <= 400;
  if (filter === 'over400') return price > 400;
  return true;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Safari Adventures': 'bg-[#C25E3E]/10 text-[#C25E3E]',
  'Coast Experiences': 'bg-[#086770]/10 text-[#086770]',
  'Outdoor Adventures': 'bg-[#739F45]/15 text-[#4A6D3A]',
  'Cultural Immersion': 'bg-[#BDC7A1]/40 text-[#4A6D3A]',
};

export function TravelExperiences() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [durationFilter, setDurationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount = [durationFilter, priceFilter].filter(f => f !== 'all').length;

  const clearAll = () => {
    setSearch('');
    setActiveCategory('All');
    setDurationFilter('all');
    setPriceFilter('all');
    setSortBy('featured');
  };

  const filtered = useMemo(() => {
    let result = ALL_EXPERIENCES.filter(exp => {
      const matchSearch =
        exp.title.toLowerCase().includes(search.toLowerCase()) ||
        exp.description.toLowerCase().includes(search.toLowerCase()) ||
        exp.location.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === 'All' || exp.category === activeCategory;
      const matchDur = matchesDuration(exp.duration, durationFilter);
      const matchPrice = matchesPrice(exp.price, priceFilter);
      return matchSearch && matchCat && matchDur && matchPrice;
    });

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [search, activeCategory, durationFilter, priceFilter, sortBy]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-5">
            Travel & Experiences
          </h2>
          <p className="text-lg text-[#6B5D4F] max-w-3xl mx-auto">
            Explore Kenya beyond the surface. Our travel experiences can be booked
            independently or added to your volunteer journey.
          </p>
        </div>

        {/* ── Search + Filter Bar ── */}
        <div className="bg-[#F7F2E2] rounded-2xl p-4 sm:p-5 mb-8 space-y-4">

          {/* Row 1: search + filter toggle + sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by name, location..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#086770]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm text-[#2C2417] placeholder:text-[#5a5249]"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3.5 h-3.5 text-[#5a5249] hover:text-[#C25E3E]" />
                </button>
              )}
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-colors whitespace-nowrap ${
                showFilters || activeFilterCount > 0
                  ? 'bg-[#086770] text-white border-[#086770]'
                  : 'bg-white text-[#2C2417] border-[#086770]/20 hover:bg-[#086770]/5'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-white text-[#086770] text-xs rounded-full px-1.5 py-0.5 leading-none">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-9 py-2.5 bg-white border border-[#086770]/15 rounded-xl text-sm text-[#2C2417] focus:outline-none focus:ring-2 focus:ring-[#086770]/30 cursor-pointer"
              >
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249] pointer-events-none" />
            </div>
          </div>

          {/* Row 2: category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#086770] text-white'
                    : 'bg-white text-[#5a5249] border border-[#086770]/15 hover:border-[#086770]/40 hover:text-[#086770]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3: expanded filters */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-[#086770]/10">
              {/* Duration */}
              <div>
                <label className="block text-xs text-[#5a5249] uppercase tracking-wide mb-2">Duration</label>
                <div className="flex flex-wrap gap-2">
                  {DURATION_OPTIONS.map(o => (
                    <button
                      key={o.value}
                      onClick={() => setDurationFilter(o.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap ${
                        durationFilter === o.value
                          ? 'bg-[#C25E3E] text-white'
                          : 'bg-white text-[#5a5249] border border-[#086770]/15 hover:border-[#C25E3E]/40'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-xs text-[#5a5249] uppercase tracking-wide mb-2">Price Range</label>
                <div className="flex flex-wrap gap-2">
                  {PRICE_OPTIONS.map(o => (
                    <button
                      key={o.value}
                      onClick={() => setPriceFilter(o.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap ${
                        priceFilter === o.value
                          ? 'bg-[#4A6D3A] text-white'
                          : 'bg-white text-[#5a5249] border border-[#086770]/15 hover:border-[#4A6D3A]/40'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#5a5249]">
            <span className="text-[#086770]">{filtered.length}</span> experience{filtered.length !== 1 ? 's' : ''} found
          </p>
          {(search || activeCategory !== 'All' || activeFilterCount > 0) && (
            <button
              onClick={clearAll}
              className="text-xs text-[#C25E3E] flex items-center gap-1 hover:underline"
            >
              <X className="w-3 h-3" /> Clear all
            </button>
          )}
        </div>

        {/* ── Cards Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-[#F7F2E2] rounded-2xl">
            <p className="text-[#5a5249] mb-3">No experiences match your filters.</p>
            <button
              onClick={clearAll}
              className="text-sm text-[#086770] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(exp => (
              <div
                key={exp.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#086770]/8 group flex flex-col"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden relative">
                  <ImageWithFallback
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category badge */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs ${CATEGORY_COLORS[exp.category] ?? 'bg-white/80 text-[#2C2417]'} backdrop-blur-sm`}>
                    {exp.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg text-[#2C2417] mb-2">{exp.title}</h4>
                  <p className="text-[#6B5D4F] text-sm mb-4 leading-relaxed flex-1">
                    {exp.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-[#5a5249] mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#086770]" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#086770]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#086770]/8">
                    <div>
                      <div className="flex items-center gap-0.5 text-[#4A6D3A]">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-lg">{exp.price.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-[#5a5249]">{exp.priceUnit}</p>
                    </div>
                    <button className="px-4 py-2 bg-[#086770] text-white text-sm rounded-lg hover:bg-[#065660] transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
