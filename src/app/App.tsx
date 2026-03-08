import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { HomePage } from './pages/home-page';
import { VolunteerPage } from './pages/volunteer-page';
import { TravelPage } from './pages/travel-page';
import { BlogPage } from './pages/blog-page';
import { ContactPage } from './pages/contact-page';
import { AdminDashboard } from './components/admin/admin-dashboard';
import { UserDashboard } from './components/user-dashboard';
import { TravelBookingForm } from './components/travel-booking-form';
import { VolunteerConfirmation } from './components/volunteer-confirmation';
import { X } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showTravelBooking, setShowTravelBooking] = useState(false);
  const [showVolunteerConfirmation, setShowVolunteerConfirmation] = useState(false);
  const [userVolunteerData] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    nationality: 'United States',
    project: 'Education Support & Child Mentorship',
    location: 'Machakos',
  });

  const isAdminRoute = location.pathname === '/admin';
  const isDashboardRoute = location.pathname === '/dashboard';

  useEffect(() => {
    if (showApplicationForm || showTravelBooking || showVolunteerConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showApplicationForm, showTravelBooking, showVolunteerConfirmation]);

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowApplicationForm(false);
    setTimeout(() => {
      setShowVolunteerConfirmation(true);
    }, 500);
  };

  const handleTravelBooking = (prefilled?: boolean) => {
    if (prefilled) {
      setShowTravelBooking(true);
      setShowVolunteerConfirmation(false);
    } else {
      setShowTravelBooking(true);
    }
  };

  if (isAdminRoute) {
    return <AdminDashboard onExit={() => window.history.back()} />;
  }

  if (isDashboardRoute) {
    return (
      <UserDashboard
        onClose={() => window.history.back()}
        userData={userVolunteerData}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F2E2]">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volunteer" element={<VolunteerPage onApply={handleApply} />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full my-8">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl text-[#2C2417]">Apply as a Volunteer</h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="p-2 hover:bg-[#E8D5B9] rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="+254 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Country of Residence *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="Your country"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Preferred Project *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                  >
                    <option value="">Select a project</option>
                    <option value="education">Education Support & Child Mentorship</option>
                    <option value="agriculture">Sustainable Agriculture & Food Security</option>
                    <option value="women">Women Empowerment & Livelihoods</option>
                    <option value="health">Sexual & Reproductive Health Education</option>
                    <option value="protection">Child Protection & Family Strengthening</option>
                    <option value="mental">Mental Health & Psychosocial Support</option>
                    <option value="community">Community Outreach & Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Why do you want to volunteer? *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="Tell us about your motivation..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#2C2417]">Relevant Skills & Experience</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-[#086770]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#086770]"
                    placeholder="Share your skills and experience..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 px-6 py-3 bg-white border border-[#086770]/20 text-[#2C2417] rounded-md hover:bg-[#E8D5B9] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Travel Booking Form */}
      {showTravelBooking && (
        <TravelBookingForm
          onClose={() => setShowTravelBooking(false)}
          prefilledData={{
            name: userVolunteerData.name,
            email: userVolunteerData.email,
            nationality: userVolunteerData.nationality,
            volunteerLocation: userVolunteerData.location,
          }}
        />
      )}

      {/* Volunteer Confirmation */}
      {showVolunteerConfirmation && (
        <VolunteerConfirmation
          onAddExperiences={() => handleTravelBooking(true)}
          onSkip={() => setShowVolunteerConfirmation(false)}
          volunteerData={userVolunteerData}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}