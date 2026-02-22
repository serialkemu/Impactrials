import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Volunteer', path: '/volunteer' },
    { label: 'Travel', path: '/travel' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className={`text-xl sm:text-2xl transition-colors ${isScrolled ? 'text-[#086770]' : 'text-[#086770]'} hover:text-[#C25E3E]`}
          >
            Impact Trails Africa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors text-[#086770] hover:text-[#C25E3E] ${isActive(item.path) ? 'font-medium text-[#C25E3E]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-md transition-colors bg-[#E8D5B9] text-[#086770] hover:bg-[#C25E3E] hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="px-4 py-2 rounded-md transition-colors bg-[#086770] text-white hover:bg-[#C25E3E]"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#086770]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#086770]/15">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-[#E8D5B9] ${
                  isActive(item.path) ? 'bg-[#E8D5B9] font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="block w-full text-left px-4 py-2 rounded-md bg-[#086770] text-white hover:bg-[#065660]"
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="block w-full text-left px-4 py-2 rounded-md bg-[#086770] text-white hover:bg-[#065660]"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}