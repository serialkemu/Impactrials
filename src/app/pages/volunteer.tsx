import { Link } from 'react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Clock } from 'lucide-react';

// Sample volunteer project data
const projects = [
  {
    id: 1,
    title: 'Education Support & Child Mentorship',
    type: 'Education',
    locations: ['Tumaini School – Nairobi', 'Kiotani Community – Machakos'],
    image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Support children and adolescents through classroom assistance, homework support, reading programs, mentoring, and co-curricular activities.',
    skills: ['Teaching', 'Mentoring', 'Child Development']
  },
  {
    id: 2,
    title: 'Sustainable Agriculture & Food Security',
    type: 'Agriculture',
    locations: ['Kiotani – Machakos', 'Busia – Western Kenya', 'Kilifi – Coastal Kenya'],
    image: 'https://images.unsplash.com/photo-1759344114577-b6c32e4d68c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmFybSUyMGFncmljdWx0dXJlJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NzExOTExNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Hands-on project focused on climate-smart farming, nutrition, and household resilience.',
    skills: ['Farming', 'Environmental Science', 'Nutrition']
  },
  {
    id: 3,
    title: 'Women Empowerment & Livelihoods',
    type: 'Empowerment',
    locations: ['Faraja Centre – Nairobi'],
    image: 'https://images.unsplash.com/photo-1635790073975-ac99496914e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBjcmFmdHMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzExOTExNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Support women and young mothers through skills development, entrepreneurship, mentorship, and wellness-based activities.',
    skills: ['Business', 'Counseling', 'Arts & Crafts']
  },
  {
    id: 4,
    title: 'Sexual & Reproductive Health & Rights Education',
    type: 'Health',
    locations: ['Machakos', 'Busia', 'Kilifi'],
    image: 'https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Assist in youth-friendly SRHR education through school clubs, peer education, community dialogues, and life-skills sessions.',
    skills: ['Health Education', 'Youth Work', 'Counseling']
  },
  {
    id: 5,
    title: 'Child Protection & Family Strengthening',
    type: 'Child Protection',
    locations: ['Kiotani – Machakos', 'Busia'],
    image: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTE5MDYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Strengthening families and communities to ensure children grow up in safe, supportive environments.',
    skills: ['Social Work', 'Child Development', 'Community Work']
  },
  {
    id: 6,
    title: 'Mental Health, Wellness & Psychosocial Support',
    type: 'Mental Health',
    locations: ['Machakos', 'Nairobi'],
    image: 'https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Support structured psychosocial activities including group discussions, creative expression, wellness routines, and stress management.',
    skills: ['Psychology', 'Counseling', 'Yoga', 'Art Therapy']
  },
  {
    id: 7,
    title: 'Community Outreach & Development',
    type: 'Community Development',
    locations: ['Nairobi', 'Busia', 'Kilifi'],
    image: 'https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A flexible, cross-cutting project offering broad exposure to community work.',
    skills: ['Community Organizing', 'Research', 'Youth Engagement']
  }
];

export function VolunteerPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const filteredProjects = projects.filter(project => {
    const typeMatch = selectedType === 'all' || project.type === selectedType;
    const locationMatch = selectedLocation === 'all' || 
      project.locations.some(loc => loc.toLowerCase().includes(selectedLocation.toLowerCase()));
    return typeMatch && locationMatch;
  });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[var(--deep-green)]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1768814667300-8c9e2007b949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MTE1OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Community"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Volunteer Projects
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Our projects are community-based and locally led
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-[var(--cream)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[var(--earth-dark)] mb-2">
                Project Type
              </label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Empowerment">Empowerment</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Child Protection">Child Protection</SelectItem>
                  <SelectItem value="Mental Health">Mental Health</SelectItem>
                  <SelectItem value="Community Development">Community Development</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-[var(--earth-dark)] mb-2">
                Location
              </label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Nairobi">Nairobi</SelectItem>
                  <SelectItem value="Machakos">Machakos</SelectItem>
                  <SelectItem value="Busia">Busia</SelectItem>
                  <SelectItem value="Kilifi">Kilifi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedType('all');
                  setSelectedLocation('all');
                }}
                className="w-full md:w-auto"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-[var(--cream)] text-[var(--deep-green)] text-sm rounded-full mb-3">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--earth-dark)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--warm-brown)] mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-[var(--warm-brown)]">
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      <span>{project.locations.join(', ')}</span>
                    </div>
                  </div>

                  <Link to={`/volunteer/${project.id}`}>
                    <Button className="w-full bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--warm-brown)] text-lg">
                No projects found matching your filters. Please try different criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}