import { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  locations: string[];
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

export function VolunteerProjects({ onViewProject }: VolunteerProjectsProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [showDesktopFilters, setShowDesktopFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const activeFilterCount = (selectedType !== 'All' ? 1 : 0) + (selectedLocation !== 'All' ? 1 : 0);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowDesktopFilters(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Education Support & Child Mentorship',
      description: 'Support children through classroom assistance, mentoring, and co-curricular activities.',
      type: 'Education',
      locations: ['Tumaini School – Nairobi', 'Kiotani Community – Machakos'],
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
      image: 'https://images.unsplash.com/flagged/photo-1559155359-ad9116adc821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBmYXJtaW5nJTIwY29tbXVuaXR5JTIwS2VueWF8ZW58MXx8fHwxNzcxMTkwNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      details: {
        overview: 'A hands-on project focused on climate-smart farming, nutrition, and household resilience. Volunteers participate in planting, composting, soil care, farm maintenance, nutrition education, and small-scale food production initiatives. The project supports vulnerable families by improving nutrition, livelihoods, and long-term sustainability.',
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
      image: 'https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwdmVuZG9ycyUyMEtlbnlhfGVufDF8fHx8MTc3MTE5MDYxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      details: {
        overview: 'Support women and young mothers through skills development, entrepreneurship, mentorship, and wellness-based activities. Activities may include tailoring, crafts, digital skills, savings groups, small business support, group therapy, yoga, cooking, and confidence-building sessions — all shaped by local needs and priorities.',
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
      image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      details: {
        overview: 'Assist in youth-friendly SRHR education through school clubs, peer education, community dialogues, and life-skills sessions. Topics include adolescent health, menstrual health, relationships, self-esteem, and informed decision-making. All activities are delivered alongside trained local facilitators.',
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
      image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
      details: {
        overview: 'Strengthening families and communities to ensure children grow up in safe, supportive environments. Volunteers support mentorship activities, home visits, recreational programs, and community awareness initiatives. Family-based solutions are prioritized, and safe spaces are used only when necessary.',
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

  const projectTypes = ['All', ...Array.from(new Set(projects.map((p) => p.type)))];
  const allLocations = Array.from(new Set(projects.flatMap((p) => p.locations.map(l => l.split(' – ')[0]))));
  const locations = ['All', ...allLocations];

  const filteredProjects = projects.filter((project) => {
    const typeMatch = selectedType === 'All' || project.type === selectedType;
    const locationMatch = selectedLocation === 'All' || 
      project.locations.some(loc => loc.startsWith(selectedLocation));
    return typeMatch && locationMatch;
  });

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#E8D5B9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-6">
            Volunteer Projects
          </h2>
          <p className="text-lg text-[#6B5D4F] max-w-3xl mx-auto">
            Our projects are community-based and locally led. Volunteers work alongside 
            local facilitators, teachers, and coordinators — never replacing local roles, 
            but supporting existing initiatives.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          {/* Mobile Filters */}
          <div className="md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full px-4 py-3 bg-white rounded-lg flex items-center justify-between text-[#2C2417] border border-[#086770]/20"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#086770]" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="bg-[#C25E3E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            {showFilters && (
              <div className="mt-4 space-y-4 bg-white p-4 rounded-lg">
                <div>
                  <label className="block text-sm mb-2 text-[#6B5D4F]">Project Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-[#086770]/20 rounded-md bg-[#E8D5B9]"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-[#6B5D4F]">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-[#086770]/20 rounded-md bg-[#E8D5B9]"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center justify-center gap-3">
            {/* Active filter badges */}
            {selectedType !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#086770]/10 text-[#086770] rounded-full text-sm">
                {selectedType}
                <button
                  onClick={() => setSelectedType('All')}
                  className="hover:bg-[#086770]/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
            {selectedLocation !== 'All' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#086770]/10 text-[#086770] rounded-full text-sm">
                <MapPin className="w-3.5 h-3.5" />
                {selectedLocation}
                <button
                  onClick={() => setSelectedLocation('All')}
                  className="hover:bg-[#086770]/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
            {activeFilterCount > 0 && (
              <button
                onClick={() => { setSelectedType('All'); setSelectedLocation('All'); }}
                className="text-sm text-[#C25E3E] hover:text-[#a14d32] transition-colors underline underline-offset-2"
              >
                Clear all
              </button>
            )}

            {/* Filter icon button */}
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setShowDesktopFilters(!showDesktopFilters)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                  showDesktopFilters
                    ? 'bg-[#086770] text-white shadow-md'
                    : 'bg-white text-[#2C2417] hover:bg-[#F7F2E2] border border-[#086770]/15 shadow-sm'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-sm">Filters</span>
                {activeFilterCount > 0 && (
                  <span className={`text-xs w-5 h-5 rounded-full flex items-center justify-center ${
                    showDesktopFilters ? 'bg-white text-[#086770]' : 'bg-[#C25E3E] text-white'
                  }`}>
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Dropdown */}
              {showDesktopFilters && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#086770]/10 p-5 z-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#2C2417]">Filter Projects</h3>
                    {activeFilterCount > 0 && (
                      <button
                        onClick={() => { setSelectedType('All'); setSelectedLocation('All'); }}
                        className="text-xs text-[#C25E3E] hover:text-[#a14d32] transition-colors"
                      >
                        Reset all
                      </button>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#5a5249] mb-2">Project Type</label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedType === type
                                ? 'bg-[#086770] text-white shadow-sm'
                                : 'bg-[#F7F2E2] text-[#2C2417] hover:bg-[#E8D5B9]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[#086770]/10 pt-4">
                      <label className="block text-sm text-[#5a5249] mb-2">Location</label>
                      <div className="flex flex-wrap gap-2">
                        {locations.map((location) => (
                          <button
                            key={location}
                            onClick={() => setSelectedLocation(location)}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all flex items-center gap-1.5 ${
                              selectedLocation === location
                                ? 'bg-[#086770] text-white shadow-sm'
                                : 'bg-[#F7F2E2] text-[#2C2417] hover:bg-[#E8D5B9]'
                            }`}
                          >
                            {location !== 'All' && <MapPin className="w-3 h-3" />}
                            {location}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#086770]/10">
                    <button
                      onClick={() => setShowDesktopFilters(false)}
                      className="w-full py-2 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors text-sm"
                    >
                      Show {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#E8D5B9] text-[#086770] rounded-full text-sm mb-3">
                  {project.type}
                </div>
                <h3 className="text-xl text-[#2C2417] mb-3">{project.title}</h3>
                <p className="text-[#6B5D4F] mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-start gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#086770] mt-1 flex-shrink-0" />
                  <div className="text-sm text-[#4A6D3A]">
                    {project.locations.join(', ')}
                  </div>
                </div>
                <button
                  onClick={() => onViewProject(project)}
                  className="w-full px-4 py-2 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#6B5D4F] text-lg">
              No projects found with the selected filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}