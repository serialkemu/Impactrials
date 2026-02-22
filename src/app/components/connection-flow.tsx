import { Users, FileCheck, PlusCircle } from 'lucide-react';

export function ConnectionFlow() {
  const steps = [
    {
      number: 1,
      icon: Users,
      title: 'Select a Volunteer Project',
      description: 'Browse our community-led projects and find the perfect match for your skills and interests.',
    },
    {
      number: 2,
      icon: FileCheck,
      title: 'Apply as a Volunteer',
      description: 'Complete a simple application to join your chosen project and connect with local coordinators.',
    },
    {
      number: 3,
      icon: PlusCircle,
      title: 'Add Experiences to Your Journey',
      description: 'Enhance your volunteering trip with cultural immersions, safaris, or outdoor adventures.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5EFE7]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#2C2417] mb-6">
            How Volunteering & Travel Connect
          </h2>
          <p className="text-lg text-[#6B5D4F] max-w-3xl mx-auto">
            Travel experiences are optional add-ons before, during, or after volunteering.
          </p>
        </div>

        {/* Desktop - Horizontal */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-[#D4A574] -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#086770] flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#D4A574] text-white flex items-center justify-center mb-4 text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl text-[#2C2417] mb-3">{step.title}</h3>
                  <p className="text-[#6B5D4F] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile - Vertical */}
        <div className="md:hidden space-y-6 relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D4A574] -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-0 top-6">
                <div className="w-16 h-16 rounded-full bg-[#086770] flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#D4A574] text-white flex items-center justify-center absolute -bottom-2 left-4 text-sm">
                  {step.number}
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl text-[#2C2417] mb-3">{step.title}</h3>
                <p className="text-[#6B5D4F] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}