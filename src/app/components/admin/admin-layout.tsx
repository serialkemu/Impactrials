import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Briefcase,
  Plane,
  FileText,
  Image as ImageIcon,
  Settings,
  Menu,
  X,
  Users
} from 'lucide-react';
import { Button } from '../ui/button';

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/projects', label: 'Volunteer Projects', icon: Briefcase },
  { path: '/admin/experiences', label: 'Travel Experiences', icon: Plane },
  { path: '/admin/applications', label: 'Applications', icon: Users },
  { path: '/admin/media', label: 'Media Library', icon: ImageIcon },
  { path: '/admin/pages', label: 'Page Editor', icon: FileText },
  { path: '/admin/settings', label: 'Settings', icon: Settings },
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-[var(--deep-green)]">
            Impact Trails Africa
          </h1>
          <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[var(--deep-green)] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link to="/" target="_blank">
            <Button variant="outline" className="w-full">
              View Public Site
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <aside
            className="w-64 bg-white h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-xl font-bold text-[var(--deep-green)]">
                Impact Trails Africa
              </h1>
              <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-[var(--deep-green)] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}