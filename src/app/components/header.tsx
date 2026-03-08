import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
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

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-xl sm:text-2xl font-semibold transition-colors ${
              isScrolled || !isHomePage ? 'text-[var(--deep-green)]' : 'text-white'
            }`}>
              IMPACT TRAILS AFRICA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors hover:text-[var(--clay)] ${
                isScrolled || !isHomePage ? 'text-[var(--earth-dark)]' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/volunteer"
              className={`transition-colors hover:text-[var(--clay)] ${
                isScrolled || !isHomePage ? 'text-[var(--earth-dark)]' : 'text-white'
              }`}
            >
              Volunteer
            </Link>
            <Link
              to="/travel"
              className={`transition-colors hover:text-[var(--clay)] ${
                isScrolled || !isHomePage ? 'text-[var(--earth-dark)]' : 'text-white'
              }`}
            >
              Travel
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-[var(--clay)] ${
                isScrolled || !isHomePage ? 'text-[var(--earth-dark)]' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-[var(--clay)] ${
                isScrolled || !isHomePage ? 'text-[var(--earth-dark)]' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled || !isHomePage ? 'text-[var(--earth-dark)]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)]">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link
              to="/"
              className="text-[var(--earth-dark)] hover:text-[var(--clay)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/volunteer"
              className="text-[var(--earth-dark)] hover:text-[var(--clay)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              to="/travel"
              className="text-[var(--earth-dark)] hover:text-[var(--clay)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Travel
            </Link>
            <Link
              to="/about"
              className="text-[var(--earth-dark)] hover:text-[var(--clay)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[var(--earth-dark)] hover:text-[var(--clay)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}