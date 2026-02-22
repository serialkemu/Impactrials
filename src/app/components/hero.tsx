import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1623951581058-58138db08519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHNhdmFubmFoJTIwbGFuZHNjYXBlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MTE5MDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kenya savannah landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6">
          Explore Africa with Purpose
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 sm:mb-8">
          Volunteer. Travel. Connect.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          Whether you're backpacking across Africa, looking to give back meaningfully, 
          or seeking immersive travel experiences rooted in culture and community — 
          your journey starts here.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto px-4">
          <Link
            to="/volunteer"
            className="w-full sm:w-auto px-8 py-4 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors text-lg text-center"
          >
            Join as a Volunteer
          </Link>
          <Link
            to="/travel"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#086770] rounded-md hover:bg-gray-100 transition-colors text-lg text-center"
          >
            Explore Our Trails
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}