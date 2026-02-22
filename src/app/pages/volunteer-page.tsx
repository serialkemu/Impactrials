import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { VolunteerProjects } from '../components/volunteer-projects';
import { X } from 'lucide-react';

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

interface VolunteerPageProps {
  onApply: () => void;
}

export function VolunteerPage({ onApply }: VolunteerPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('volunteer-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] flex items-center justify-center mt-16 sm:mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1637148734636-906c24feeb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHZvbHVudGVlciUyMGNvbW11bml0eSUyMGVkdWNhdGlvbiUyMGNoaWxkcmVufGVufDF8fHx8MTc3MTMyMjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Volunteer community education in Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
            Volunteer Programs Across Africa
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Make a real difference in education, conservation, and community development.
          </p>
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors text-lg"
          >
            Browse Projects
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <div id="volunteer-projects">
        <VolunteerProjects onViewProject={setSelectedProject} />
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full my-8">
            <div className="relative h-64 sm:h-80 md:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-[#E8D5B9] text-[#086770] rounded-full text-sm mb-3">
                  {selectedProject.type}
                </span>
                <h2 className="text-3xl text-[#2C2417] mb-4">{selectedProject.title}</h2>
                <p className="text-[#6B5D4F] leading-relaxed">{selectedProject.details.overview}</p>
              </div>

              <div>
                <h3 className="text-xl text-[#2C2417] mb-3">What Volunteers Do</h3>
                <ul className="space-y-2">
                  {selectedProject.details.whatVolunteersDo.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#4A6D3A]">
                      <span className="text-[#086770] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-[#2C2417] mb-3">What They Learn</h3>
                <ul className="space-y-2">
                  {selectedProject.details.whatTheyLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#4A6D3A]">
                      <span className="text-[#086770] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-[#2C2417] mb-3">Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.locations.map((location, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#E8D5B9] text-[#2C2417] rounded-md text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => onApply()}
                  className="flex-1 px-6 py-3 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-white border border-[#086770]/20 text-[#2C2417] rounded-md hover:bg-[#E8D5B9] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}