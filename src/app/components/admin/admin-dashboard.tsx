import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Plane,
  FileText,
  Image,
  Settings,
  Menu,
  X,
  LogOut,
  BookOpen,
} from 'lucide-react';
import { DashboardOverview } from './dashboard-overview';
import { VolunteerProjectsAdmin } from './volunteer-projects-admin';
import { TravelExperiencesAdmin } from './travel-experiences-admin';
import { ApplicationsAdmin } from './applications-admin';
import { MediaLibrary } from './media-library';
import { PageEditor } from './page-editor';
import { TravelBookingsAdmin } from './travel-bookings-admin';
import { BlogManagementAdmin } from './blog-management-admin';

interface AdminDashboardProps {
  onExit: () => void;
}

export function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Volunteer Projects', icon: Users },
    { id: 'experiences', label: 'Travel Experiences', icon: Plane },
    { id: 'applications', label: 'Applications', icon: FileText },
    { id: 'bookings', label: 'Travel Bookings', icon: Plane },
    { id: 'blogs', label: 'Blog Management', icon: BookOpen },
    { id: 'media', label: 'Media Library', icon: Image },
    { id: 'pages', label: 'Page Editor', icon: Settings },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <DashboardOverview />;
      case 'projects':
        return <VolunteerProjectsAdmin />;
      case 'experiences':
        return <TravelExperiencesAdmin />;
      case 'applications':
        return <ApplicationsAdmin />;
      case 'bookings':
        return <TravelBookingsAdmin />;
      case 'blogs':
        return <BlogManagementAdmin />;
      case 'media':
        return <MediaLibrary />;
      case 'pages':
        return <PageEditor />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F1]">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-[#8B5A3C]/10 px-4 py-4 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-xl text-[#2C2417]">Admin Dashboard</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-[#F5EFE7] rounded-md"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#8B5A3C]/10 transition-transform duration-300 overflow-y-auto`}
        >
          <div className="p-6 border-b border-[#8B5A3C]/10 hidden lg:block">
            <h1 className="text-2xl text-[#2C2417]">Admin Panel</h1>
            <p className="text-sm text-[#6B5D4F] mt-1">Impact Trails Africa</p>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentView(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      currentView === item.id
                        ? 'bg-[#8B5A3C] text-white'
                        : 'text-[#2C2417] hover:bg-[#F5EFE7]'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-[#8B5A3C]/10 mt-auto">
            <button
              onClick={onExit}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-[#C45A3C] hover:bg-[#F5EFE7] transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Exit Admin</span>
            </button>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}