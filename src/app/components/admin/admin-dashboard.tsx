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
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
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

  const currentLabel = menuItems.find(item => item.id === currentView)?.label || 'Dashboard';

  return (
    <div className="h-screen flex flex-col bg-[#F7F2E2]">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-[#086770]/10 px-4 py-3 flex items-center justify-between flex-shrink-0 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-[#F7F2E2] rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div>
            <h1 className="text-sm text-[#086770]">Impact Trails Admin</h1>
            <p className="text-xs text-[#5a5249]">{currentLabel}</p>
          </div>
        </div>
        <button
          onClick={onExit}
          className="p-2 text-[#C25E3E] hover:bg-[#C25E3E]/10 rounded-lg transition-colors"
        >
          <LogOut size={18} />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#086770]/10 transition-transform duration-300 flex flex-col`}
        >
          {/* Sidebar Header - Desktop only */}
          <div className="p-5 border-b border-[#086770]/10 hidden lg:block flex-shrink-0">
            <h1 className="text-xl text-[#086770]">Impact Trails</h1>
            <p className="text-xs text-[#5a5249] mt-0.5">Admin Dashboard</p>
          </div>

          {/* Mobile sidebar top padding */}
          <div className="lg:hidden h-14 flex-shrink-0" />

          {/* Nav items - scrollable */}
          <nav className="flex-1 overflow-y-auto p-3">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentView(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${
                      currentView === item.id
                        ? 'bg-[#086770] text-white'
                        : 'text-[#2C2417] hover:bg-[#F7F2E2]'
                    }`}
                  >
                    <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Exit button */}
          <div className="p-3 border-t border-[#086770]/10 flex-shrink-0">
            <button
              onClick={onExit}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#C25E3E] hover:bg-[#C25E3E]/5 transition-colors text-sm"
            >
              <LogOut className="w-[18px] h-[18px]" />
              <span>Exit Admin</span>
            </button>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content - independently scrollable */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 min-h-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
