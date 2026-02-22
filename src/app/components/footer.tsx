import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2C2417] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Impact Trails Africa</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              A women-led platform connecting volunteers and travelers to authentic African experiences.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#volunteer" className="text-white/70 hover:text-white transition-colors">Volunteer Projects</a></li>
              <li><a href="#travel" className="text-white/70 hover:text-white transition-colors">Travel Experiences</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#apply" className="text-white/70 hover:text-white transition-colors">Apply to Volunteer</a></li>
              <li><a href="#partner" className="text-white/70 hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#support" className="text-white/70 hover:text-white transition-colors">Support Our Work</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>© 2026 Impact Trails Africa. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#C25E3E] fill-current" />
            <span>in Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}