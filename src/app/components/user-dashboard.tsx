import { useState } from 'react';
import { User, FileText, Plane, Edit2, Calendar, MapPin, CheckCircle, Clock, XCircle } from 'lucide-react';

interface UserDashboardProps {
  onClose: () => void;
  userData: {
    name: string;
    email: string;
    nationality: string;
  };
}

export function UserDashboard({ onClose, userData }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState('profile');

  const volunteerApplications = [
    {
      id: 1,
      project: 'Education Support & Child Mentorship',
      location: 'Machakos',
      appliedDate: '2026-02-10',
      status: 'approved',
      startDate: '2026-04-01',
      endDate: '2026-04-30',
    },
  ];

  const travelBookings = [
    {
      id: 1,
      experience: 'Nairobi National Park',
      date: '2026-03-28',
      travelers: 2,
      status: 'confirmed',
      total: 200,
    },
    {
      id: 2,
      experience: 'Ngong Hills Hiking',
      date: '2026-03-30',
      travelers: 2,
      status: 'pending',
      total: 160,
    },
  ];

  const blogSubmissions = [
    {
      id: 1,
      title: 'My Experience in Machakos',
      submittedDate: '2026-02-12',
      status: 'under_review',
    },
  ];

  const paymentHistory = [
    {
      id: 1,
      description: 'Volunteer Program Fee',
      amount: 450,
      date: '2026-02-10',
      status: 'paid',
    },
    {
      id: 2,
      description: 'Nairobi National Park Booking',
      amount: 200,
      date: '2026-02-15',
      status: 'paid',
    },
    {
      id: 3,
      description: 'Ngong Hills Hiking',
      amount: 160,
      date: '2026-02-18',
      status: 'pending',
    },
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'applications', label: 'Volunteer Status', icon: FileText },
    { id: 'bookings', label: 'Travel Bookings', icon: Plane },
    { id: 'blogs', label: 'Blog Submissions', icon: Edit2 },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F1]">
      {/* Header */}
      <div className="bg-white border-b border-[#8B5A3C]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-[#2C2417]">My Dashboard</h1>
              <p className="text-[#6B5D4F] mt-1">Welcome back, {userData.name}!</p>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#F5EFE7] text-[#2C2417] rounded-md hover:bg-[#8B5A3C] hover:text-white transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#8B5A3C] text-white'
                        : 'text-[#2C2417] hover:bg-[#F5EFE7]'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-6 space-y-6">
                <h2 className="text-2xl text-[#2C2417]">Profile Information</h2>
                
                <div>
                  <label className="block text-sm mb-2 text-[#6B5D4F]">Full Name</label>
                  <input
                    type="text"
                    defaultValue={userData.name}
                    className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#6B5D4F]">Email</label>
                  <input
                    type="email"
                    defaultValue={userData.email}
                    className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#6B5D4F]">Nationality</label>
                  <input
                    type="text"
                    defaultValue={userData.nationality}
                    className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-[#6B5D4F]">Phone</label>
                  <input
                    type="tel"
                    placeholder="+254 ..."
                    className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  />
                </div>

                <button className="px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-6">
                  <h2 className="text-2xl text-[#2C2417] mb-6">Volunteer Applications</h2>
                  
                  {volunteerApplications.map((app) => (
                    <div key={app.id} className="border border-[#8B5A3C]/10 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl text-[#2C2417] mb-2">{app.project}</h3>
                          <div className="flex items-center gap-2 text-sm text-[#6B5D4F]">
                            <MapPin className="w-4 h-4" />
                            <span>{app.location}</span>
                          </div>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm ${
                          app.status === 'approved'
                            ? 'bg-[#5A7D5C]/10 text-[#5A7D5C]'
                            : app.status === 'pending'
                            ? 'bg-[#D4A574]/10 text-[#8B5A3C]'
                            : 'bg-[#C45A3C]/10 text-[#C45A3C]'
                        }`}>
                          {app.status === 'approved' ? (
                            <>✓ Approved</>
                          ) : app.status === 'pending' ? (
                            <>⏳ Pending</>
                          ) : (
                            <>✗ Declined</>
                          )}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-[#6B5D4F] mb-1">Applied Date</p>
                          <p className="text-[#2C2417]">{new Date(app.appliedDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-[#6B5D4F] mb-1">Start Date</p>
                          <p className="text-[#2C2417]">{new Date(app.startDate).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-6">
                  <h2 className="text-2xl text-[#2C2417] mb-6">Travel Bookings</h2>
                  
                  <div className="space-y-4">
                    {travelBookings.map((booking) => (
                      <div key={booking.id} className="border border-[#8B5A3C]/10 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg text-[#2C2417] mb-2">{booking.experience}</h3>
                            <div className="flex items-center gap-4 text-sm text-[#6B5D4F]">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(booking.date).toLocaleDateString()}</span>
                              </div>
                              <span>{booking.travelers} travelers</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl text-[#8B5A3C] mb-1">${booking.total}</p>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                              booking.status === 'confirmed'
                                ? 'bg-[#5A7D5C]/10 text-[#5A7D5C]'
                                : 'bg-[#D4A574]/10 text-[#8B5A3C]'
                            }`}>
                              {booking.status === 'confirmed' ? 'Confirmed' : 'Pending Payment'}
                            </span>
                          </div>
                        </div>
                        
                        {booking.status === 'pending' && (
                          <button className="w-full mt-4 px-4 py-2 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
                            Complete Payment
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'blogs' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl text-[#2C2417]">Blog Submissions</h2>
                    <button className="px-4 py-2 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
                      New Submission
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {blogSubmissions.map((blog) => (
                      <div key={blog.id} className="border border-[#8B5A3C]/10 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg text-[#2C2417] mb-2">{blog.title}</h3>
                            <p className="text-sm text-[#6B5D4F]">
                              Submitted {new Date(blog.submittedDate).toLocaleDateString()}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-[#D4A574]/10 text-[#8B5A3C] rounded-full text-xs">
                            Under Review
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
