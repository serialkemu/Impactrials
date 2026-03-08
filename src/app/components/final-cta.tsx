import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623951581058-58138db08519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTE5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kenya landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">
          Ready to explore with intention?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Launching in Kenya. Expanding across Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Link
            to="/volunteer"
            className="w-full sm:w-auto px-8 py-4 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors text-lg text-center"
          >
            Volunteer with Us
          </Link>
          <Link
            to="/travel"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#086770] rounded-md hover:bg-gray-100 transition-colors text-lg text-center"
          >
            Explore Travel
          </Link>
        </div>
      </div>
    </section>
  );
}