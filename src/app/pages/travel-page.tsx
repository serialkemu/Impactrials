import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TravelExperiences } from '../components/travel-experiences';

export function TravelPage() {
  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById('travel-experiences');
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[400px] flex items-center justify-center mt-16 sm:mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709410114723-0ba302d8d4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyME1hYXNhaSUyME1hcmElMjBzYWZhcmklMjBhdXRoZW50aWN8ZW58MXx8fHwxNzcxMzIyODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Authentic safari landscape in Maasai Mara, Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
            Travel Beyond Tourism
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Experience Africa authentically through curated local journeys.
          </p>
          <button
            onClick={scrollToExperiences}
            className="px-8 py-4 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors text-lg"
          >
            Explore Experiences
          </button>
        </div>
      </section>

      {/* Experiences Grid */}
      <div id="travel-experiences">
        <TravelExperiences />
      </div>
    </>
  );
}