import { useState, useMemo } from 'react';
import { MapPin, Search, SlidersHorizontal, X, DollarSign, ChevronDown, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  locations: string[];
  duration: string;
  price: number;
  priceUnit: 'per week' | 'per month' | 'per project' | 'free';
  image: string;
  details: {
    overview: string;
    whatVolunteersDo: string[];
    whatTheyLearn: string[];
  };
}

interface VolunteerProjectsProps {
  onViewProject: (project: Project) => void;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Education Support & Child Mentorship',
    description: 'Support children through classroom assistance, mentoring, and co-curricular activities.',
    type: 'Education',
    locations: ['Tumaini School – Nairobi', 'Kiotani Community – Machakos'],
    duration: '4 weeks',
    price: 350,
    priceUnit: 'per month',
    image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Support children and adolescents through classroom assistance, homework support, reading programs, mentoring, and co-curricular activities such as art, games, and sports. Volunteers work alongside teachers and community facilitators to strengthen learning outcomes, confidence, discipline, and emotional wellbeing for vulnerable children.',
      whatVolunteersDo: [
        'Classroom assistance and homework support',
        'Reading programs and literacy activities',
        'Mentoring and one-on-one support',
        'Art, games, and sports activities',
        'Building confidence and emotional wellbeing',
      ],
      whatTheyLearn: [
        'Educational methodologies in diverse settings',
        'Child development and mentorship skills',
        'Cross-cultural communication',
        'Community-based education approaches',
      ],
    },
  },
  {
    id: 2,
    title: 'Sustainable Agriculture & Food Security',
    description: 'Hands-on climate-smart farming, nutrition, and household resilience.',
    type: 'Agriculture',
    locations: ['Kiotani – Machakos', 'Busia – Western Kenya', 'Kilifi – Coastal Kenya'],
    duration: '2–4 weeks',
    price: 300,
    priceUnit: 'per month',
    image: 'https://images.unsplash.com/flagged/photo-1559155359-ad9116adc821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBmYXJtaW5nJTIwY29tbXVuaXR5JTIwS2VueWF8ZW58MXx8fHwxNzcxMTkwNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'A hands-on project focused on climate-smart farming, nutrition, and household resilience. Volunteers participate in planting, composting, soil care, farm maintenance, nutrition education, and small-scale food production initiatives.',
      whatVolunteersDo: [
        'Planting and farm maintenance',
        'Composting and soil care',
        'Nutrition education sessions',
        'Small-scale food production',
        'Supporting household resilience initiatives',
      ],
      whatTheyLearn: [
        'Climate-smart farming techniques',
        'Sustainable agriculture practices',
        'Nutrition and food security',
        'Community development approaches',
      ],
    },
  },
  {
    id: 3,
    title: 'Women Empowerment & Livelihoods',
    description: 'Support women through skills development, entrepreneurship, and wellness activities.',
    type: 'Women Empowerment',
    locations: ['Faraja Centre – Nairobi'],
    duration: '2–6 weeks',
    price: 280,
    priceUnit: 'per month',
    image: 'https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwdmVuZG9ycyUyMEtlbnlhfGVufDF8fHx8MTc3MTE5MDYxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Support women and young mothers through skills development, entrepreneurship, mentorship, and wellness-based activities. Activities may include tailoring, crafts, digital skills, savings groups, small business support, group therapy, yoga, cooking, and confidence-building sessions.',
      whatVolunteersDo: [
        'Skills training (tailoring, crafts, digital)',
        'Small business mentorship',
        'Savings groups facilitation',
        'Wellness activities (yoga, group therapy)',
        'Confidence-building sessions',
      ],
      whatTheyLearn: [
        'Women empowerment strategies',
        'Entrepreneurship in community contexts',
        'Facilitation and mentorship skills',
        'Cultural sensitivity and adaptation',
      ],
    },
  },
  {
    id: 4,
    title: 'Sexual & Reproductive Health & Rights Education',
    description: 'Assist in youth-friendly SRHR education through school clubs and peer education.',
    type: 'Health',
    locations: ['Machakos', 'Busia', 'Kilifi'],
    duration: '2–4 weeks',
    price: 320,
    priceUnit: 'per month',
    image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Assist in youth-friendly SRHR education through school clubs, peer education, community dialogues, and life-skills sessions. Topics include adolescent health, menstrual health, relationships, self-esteem, and informed decision-making.',
      whatVolunteersDo: [
        'Support school-based SRHR clubs',
        'Peer education facilitation',
        'Community dialogue participation',
        'Life-skills session assistance',
        'Awareness campaign support',
      ],
      whatTheyLearn: [
        'Youth health education approaches',
        'Facilitation and peer education',
        'Cultural sensitivity in health topics',
        'Community engagement strategies',
      ],
    },
  },
  {
    id: 5,
    title: 'Child Protection & Family Strengthening',
    description: 'Strengthening families to ensure children grow up in safe, supportive environments.',
    type: 'Child Protection',
    locations: ['Kiotani – Machakos', 'Busia'],
    duration: '4–8 weeks',
    price: 310,
    priceUnit: 'per month',
    image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Strengthening families and communities to ensure children grow up in safe, supportive environments. Volunteers support mentorship activities, home visits, recreational programs, and community awareness initiatives.',
      whatVolunteersDo: [
        'Mentorship activities',
        'Home visit support',
        'Recreational programs',
        'Community awareness initiatives',
        'Family strengthening activities',
      ],
      whatTheyLearn: [
        'Child protection principles',
        'Family-centered approaches',
        'Community mobilization',
        'Safeguarding practices',
      ],
    },
  },
  {
    id: 6,
    title: 'Mental Health, Wellness & Psychosocial Support',
    description: 'Support psychosocial activities including group discussions and creative expression.',
    type: 'Mental Health',
    locations: ['Machakos', 'Nairobi'],
    duration: '4 weeks',
    price: 330,
    priceUnit: 'per month',
    image: 'https://images.unsplash.com/flagged/photo-1559155359-ad9116adc821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBmYXJtaW5nJTIwY29tbXVuaXR5JTIwS2VueWF8ZW58MXx8fHwxNzcxMTkwNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'Support structured psychosocial activities including group discussions, creative expression, wellness routines, stress management, and safe-space conversations. Ideal for volunteers with backgrounds or interests in mental health, facilitation, yoga, art, or community wellness.',
      whatVolunteersDo: [
        'Group discussion facilitation',
        'Creative expression activities',
        'Wellness routines (yoga, meditation)',
        'Stress management sessions',
        'Safe-space conversation support',
      ],
      whatTheyLearn: [
        'Psychosocial support approaches',
        'Mental health awareness',
        'Facilitation and active listening',
        'Community wellness strategies',
      ],
    },
  },
  {
    id: 7,
    title: 'Community Outreach & Development',
    description: 'Flexible, cross-cutting project offering broad exposure to community work.',
    type: 'Community Development',
    locations: ['Nairobi', 'Busia', 'Kilifi'],
    duration: 'Flexible',
    price: 0,
    priceUnit: 'free',
    image: 'https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMHRyYWRpdGlvbmFsJTIwaG9tZXMlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      overview: 'A flexible, cross-cutting project offering broad exposure to community work. Activities may include outreach campaigns, youth engagement, basic data collection, awareness initiatives, and home visits — depending on evolving community needs.',
      whatVolunteersDo: [
        'Outreach campaign support',
        'Youth engagement activities',
        'Basic data collection',
        'Awareness initiatives',
        'Home visits and community engagement',
      ],
      whatTheyLearn: [
        'Community development approaches',
        'Grassroots mobilization',
        'Needs assessment',
        'Cross-sector collaboration',
      ],
    },
  },
];

const PROJECT_TYPES = ['All', ...Array.from(new Set(PROJECTS.map(p => p.type)))];

const LOCATION_OPTIONS = ['All', ...Array.from(new Set(PROJECTS.flatMap(p =>
  p.locations.map(l => l.split(' – ')[0])
))).sort()];

const DURATION_OPTIONS = [
  { label: 'Any Duration', value: 'all' },
  { label: '1–2 weeks', value: 'short' },
  { label: '2–4 weeks', value: 'medium' },
  { label: '4+ weeks', value: 'long' },
  { label: 'Flexible', value: 'flexible' },
];

const PRICE_OPTIONS = [
  { label: 'Any Fee', value: 'all' },
  { label: 'Free', value: 'free' },
  { label: 'Under $300/mo', value: 'under300' },
  { label: '$300–$350/mo', value: '300-350' },
  { label: 'Over $350/mo', value: 'over350' },
];

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Fee: Low to High', value: 'price-asc' },
  { label: 'Fee: High to Low', value: 'price-desc' },
];

const TYPE_COLORS: Record<string, string> = {
  'Education': 'bg-[#086770]/10 text-[#086770]',
  'Agriculture': 'bg-[#739F45]/15 text-[#4A6D3A]',
  'Women Empowerment': 'bg-[#C25E3E]/10 text-[#C25E3E]',
  'Health': 'bg-[#BDC7A1]/50 text-[#4A6D3A]',
  'Child Protection': 'bg-[#E8D5B9] text-[#C25E3E]',
  'Mental Health': 'bg-[#086770]/8 text-[#086770]',
  'Community Development': 'bg-[#4A6D3A]/10 text-[#4A6D3A]',
};

function matchesDuration(duration: string, filter: string): boolean {
  if (filter === 'all') return true;
  const d = duration.toLowerCase();
  if (filter === 'flexible') return d === 'flexible';
  if (filter === 'short') return d.includes('1') || (d.includes('2') && !d.includes('4') && !d.includes('6') && !d.includes('8'));
  if (filter === 'medium') return d.includes('2') || d.includes('3') || d.includes('4 weeks');
  if (filter === 'long') return d.includes('4–') || d.includes('4+') || d.includes('6') || d.includes('8');
  return true;
}

function matchesPrice(price: number, priceUnit: string, filter: string): boolean {
  if (filter === 'all') return true;
  if (filter === 'free') return priceUnit === 'free';
  if (filter === 'under300') return priceUnit !== 'free' && price < 300;
  if (filter === '300-350') return price >= 300 && price <= 350;
  if (filter === 'over350') return price > 350;
  return true;
}

export function VolunteerProjects({ onViewProject }: VolunteerProjectsProps) {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState('All');
  const [locationFilter, setLocationFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount = [locationFilter, durationFilter, priceFilter].filter(f => f !== 'all').length;

  const clearAll = () => {
    setSearch('');
    setActiveType('All');
    setLocationFilter('all');
    setDurationFilter('all');
    setPriceFilter('all');
    setSortBy('featured');
  };

  const filtered = useMemo(() => {
    let result = PROJECTS.filter(p => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.locations.some(l => l.toLowerCase().includes(search.toLowerCase()));
      const matchType = activeType === 'All' || p.type === activeType;
      const matchLoc = locationFilter === 'all' || p.locations.some(l => l.split(' – ')[0] === locationFilter);
      const matchDur = matchesDuration(p.duration, durationFilter);
      const matchPrice = matchesPrice(p.price, p.priceUnit, priceFilter);
      return matchSearch && matchType && matchLoc && matchDur && matchPrice;
    });

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [search, activeType, locationFilter, durationFilter, priceFilter, sortBy]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#E8D5B9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-5">
            Volunteer Projects
          </h2>
          <p className="text-lg text-[#6B5D4F] max-w-3xl mx-auto">
            Our projects are community-based and locally led. Volunteers work alongside
            local facilitators, teachers, and coordinators — never replacing local roles,
            but supporting existing initiatives.
          </p>
        </div>

        {/* ── Filter Bar ── */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 mb-8 space-y-4">

          {/* Row 1: search + filter toggle + sort */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by project name or location..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#086770]/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm text-[#2C2417] placeholder:text-[#5a5249]"
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

          {/* Row 2: type pills */}
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                  activeType === type
                    ? 'bg-[#086770] text-white'
                    : 'bg-white text-[#5a5249] border border-[#086770]/15 hover:border-[#086770]/40 hover:text-[#086770]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Row 3: expanded filters */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 border-t border-[#086770]/10">
              {/* Location */}
              <div>
                <label className="block text-xs text-[#5a5249] uppercase tracking-wide mb-2">Location</label>
                <div className="flex flex-wrap gap-2">
                  {LOCATION_OPTIONS.map(loc => (
                    <button
                      key={loc}
                      onClick={() => setLocationFilter(loc === 'All' ? 'all' : loc)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap flex items-center gap-1 ${
                        (loc === 'All' && locationFilter === 'all') || locationFilter === loc
                          ? 'bg-[#086770] text-white'
                          : 'bg-white text-[#5a5249] border border-[#086770]/15 hover:border-[#086770]/40'
                      }`}
                    >
                      {loc !== 'All' && <MapPin className="w-3 h-3" />}
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

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
                <label className="block text-xs text-[#5a5249] uppercase tracking-wide mb-2">Programme Fee</label>
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
          <p className="text-sm text-[#6B5D4F]">
            <span className="text-[#086770]">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''} found
          </p>
          {(search || activeType !== 'All' || activeFilterCount > 0) && (
            <button
              onClick={clearAll}
              className="text-xs text-[#C25E3E] flex items-center gap-1 hover:underline"
            >
              <X className="w-3 h-3" /> Clear all
            </button>
          )}
        </div>

        {/* ── Projects Grid ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white/60 rounded-2xl">
            <p className="text-[#6B5D4F] mb-3">No projects match your filters.</p>
            <button onClick={clearAll} className="text-sm text-[#086770] hover:underline">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#086770]/8 group flex flex-col"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Type badge */}
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs backdrop-blur-sm ${TYPE_COLORS[project.type] ?? 'bg-white/80 text-[#2C2417]'}`}>
                    {project.type}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg text-[#2C2417] mb-2">{project.title}</h3>
                  <p className="text-[#6B5D4F] text-sm mb-4 leading-relaxed flex-1">{project.description}</p>

                  {/* Meta: duration + locations */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#5a5249]">
                      <Clock className="w-3.5 h-3.5 text-[#086770] flex-shrink-0" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-[#4A6D3A]">
                      <MapPin className="w-3.5 h-3.5 text-[#086770] flex-shrink-0 mt-0.5" />
                      <span>{project.locations.join(', ')}</span>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#086770]/8">
                    <div>
                      {project.priceUnit === 'free' ? (
                        <span className="inline-block px-2.5 py-1 bg-[#739F45]/15 text-[#4A6D3A] rounded-lg text-xs">
                          Free to join
                        </span>
                      ) : (
                        <>
                          <div className="flex items-center gap-0.5 text-[#4A6D3A]">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-lg">{project.price.toLocaleString()}</span>
                          </div>
                          <p className="text-xs text-[#5a5249]">{project.priceUnit}</p>
                        </>
                      )}
                    </div>
                    <button
                      onClick={() => onViewProject(project)}
                      className="px-4 py-2 bg-[#086770] text-white text-sm rounded-lg hover:bg-[#065660] transition-colors"
                    >
                      Learn More
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
