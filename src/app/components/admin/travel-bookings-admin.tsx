import { useState } from 'react';
import { Search, Calendar, Users, DollarSign, Eye, CheckCircle, XCircle, Filter, X } from 'lucide-react';

interface TravelBooking {
  id: number;
  experience: string;
  category: string;
  travelerName: string;
  travelers: number;
  date: string;
  total: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  email: string;
  country: string;
}

const EXPERIENCE_OPTIONS = [
  'Masai Mara Safari',
  'Nairobi National Park',
  'Diani Beach',
  'Mount Kenya Hiking',
  'Nairobi City Tour',
  'Ngong Hills Hiking',
  'Olkaria / Naivasha Experience',
  'Kilifi Creek & Old Town',
  'Local Market & Cooking',
  'Busia Village Experience',
];

const CATEGORY_OPTIONS = [
  'Safari Adventures',
  'Coast Experiences',
  'Outdoor Adventures',
  'Cultural Immersion',
];

export function TravelBookingsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterExperience, setFilterExperience] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewingBooking, setViewingBooking] = useState<TravelBooking | null>(null);

  const [bookings, setBookings] = useState<TravelBooking[]>([
    { id: 1, experience: 'Masai Mara Safari', category: 'Safari Adventures', travelerName: 'Sarah Johnson', travelers: 2, date: '2026-03-20', total: 900, status: 'confirmed', email: 'sarah.j@email.com', country: 'United Kingdom' },
    { id: 2, experience: 'Nairobi National Park', category: 'Safari Adventures', travelerName: 'Michael Chen', travelers: 4, date: '2026-03-28', total: 400, status: 'confirmed', email: 'michael.c@email.com', country: 'United States' },
    { id: 3, experience: 'Diani Beach', category: 'Coast Experiences', travelerName: 'Emma Williams', travelers: 2, date: '2026-04-05', total: 360, status: 'pending', email: 'emma.w@email.com', country: 'Australia' },
    { id: 4, experience: 'Mount Kenya Hiking', category: 'Outdoor Adventures', travelerName: 'David Brown', travelers: 1, date: '2026-04-10', total: 380, status: 'confirmed', email: 'david.b@email.com', country: 'Canada' },
    { id: 5, experience: 'Nairobi City Tour', category: 'Cultural Immersion', travelerName: 'Lisa Anderson', travelers: 3, date: '2026-03-25', total: 225, status: 'pending', email: 'lisa.a@email.com', country: 'Germany' },
    { id: 6, experience: 'Ngong Hills Hiking', category: 'Outdoor Adventures', travelerName: 'James Taylor', travelers: 2, date: '2026-04-01', total: 120, status: 'cancelled', email: 'james.t@email.com', country: 'Netherlands' },
    { id: 7, experience: 'Busia Village Experience', category: 'Cultural Immersion', travelerName: 'Maria Garcia', travelers: 2, date: '2026-04-15', total: 400, status: 'confirmed', email: 'maria.g@email.com', country: 'Spain' },
    { id: 8, experience: 'Kilifi Creek & Old Town', category: 'Coast Experiences', travelerName: 'Amara Osei', travelers: 3, date: '2026-04-20', total: 420, status: 'pending', email: 'amara.o@email.com', country: 'United Kingdom' },
  ]);

  const uniqueCountries = Array.from(new Set(bookings.map(b => b.country))).sort();

  const filtered = bookings.filter(b => {
    const matchSearch =
      b.travelerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'all' || b.status === filterStatus;
    const matchExp = filterExperience === 'all' || b.experience === filterExperience;
    const matchCat = filterCategory === 'all' || b.category === filterCategory;
    return matchSearch && matchStatus && matchExp && matchCat;
  });

  const activeFilterCount = [filterStatus, filterExperience, filterCategory].filter(f => f !== 'all').length;

  const clearFilters = () => {
    setFilterStatus('all');
    setFilterExperience('all');
    setFilterCategory('all');
  };

  const updateStatus = (id: number, newStatus: 'confirmed' | 'cancelled') => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const totalRevenue = bookings.filter(b => b.status === 'confirmed').reduce((sum, b) => sum + b.total, 0);
  const pendingRevenue = bookings.filter(b => b.status === 'pending').reduce((sum, b) => sum + b.total, 0);

  const statusBadge = (status: TravelBooking['status']) => {
    const map = {
      confirmed: 'bg-[#739F45]/15 text-[#4A6D3A]',
      pending: 'bg-[#086770]/10 text-[#086770]',
      cancelled: 'bg-[#C25E3E]/10 text-[#C25E3E]',
    };
    return map[status];
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-1">Travel Bookings</h1>
        <p className="text-[#5a5249] text-sm">Manage travel experience bookings and payments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Bookings', value: bookings.length, icon: Calendar, color: 'text-[#086770]', iconColor: 'text-[#086770]', bg: 'bg-[#086770]/8' },
          { label: 'Confirmed', value: bookings.filter(b => b.status === 'confirmed').length, icon: CheckCircle, color: 'text-[#4A6D3A]', iconColor: 'text-[#739F45]', bg: 'bg-[#739F45]/10' },
          { label: 'Revenue (Confirmed)', value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-[#4A6D3A]', iconColor: 'text-[#4A6D3A]', bg: 'bg-[#739F45]/10' },
          { label: 'Pending Revenue', value: `$${pendingRevenue.toLocaleString()}`, icon: Users, color: 'text-[#086770]', iconColor: 'text-[#086770]', bg: 'bg-[#086770]/8' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-5 border border-[#086770]/10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#5a5249] text-xs">{s.label}</p>
              <div className={`p-1.5 rounded-lg ${s.bg}`}>
                <s.icon className={`w-4 h-4 ${s.iconColor}`} />
              </div>
            </div>
            <p className={`text-2xl ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search + Filter toggle */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
          <input
            type="text"
            placeholder="Search by traveler, experience, email, or country..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm transition-colors ${
            showFilters || activeFilterCount > 0
              ? 'bg-[#086770] text-white border-[#086770]'
              : 'bg-white text-[#2C2417] border-[#086770]/20 hover:bg-[#F7F2E2]'
          }`}
        >
          <Filter className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-white text-[#086770] rounded-full text-xs px-1.5 py-0.5 leading-none">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter panel */}
      {showFilters && (
        <div className="bg-white rounded-xl border border-[#086770]/10 p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-[#2C2417]">Filter Bookings</p>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-[#C25E3E] flex items-center gap-1 hover:underline">
                <X className="w-3 h-3" /> Clear filters
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-[#5a5249] mb-1.5 uppercase tracking-wide">Status</label>
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F2E2] border border-[#086770]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#086770]/30"
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-[#5a5249] mb-1.5 uppercase tracking-wide">Category</label>
              <select
                value={filterCategory}
                onChange={e => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F2E2] border border-[#086770]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#086770]/30"
              >
                <option value="all">All Categories</option>
                {CATEGORY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[#5a5249] mb-1.5 uppercase tracking-wide">Experience</label>
              <select
                value={filterExperience}
                onChange={e => setFilterExperience(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F2E2] border border-[#086770]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#086770]/30"
              >
                <option value="all">All Experiences</option>
                {EXPERIENCE_OPTIONS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-[#5a5249]">
        Showing <span className="text-[#086770]">{filtered.length}</span> of {bookings.length} bookings
      </p>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#086770]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F7F2E2]">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Traveler</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Experience</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden md:table-cell">Date</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden sm:table-cell">Travelers</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Total</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Status</th>
                <th className="px-5 py-3.5 text-right text-xs text-[#5a5249] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#086770]/8">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-[#5a5249] text-sm">
                    No bookings match your filters.
                  </td>
                </tr>
              )}
              {filtered.map(booking => (
                <tr key={booking.id} className="hover:bg-[#F7F2E2]/50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-[#2C2417] text-sm">{booking.travelerName}</p>
                    <p className="text-xs text-[#5a5249]">{booking.country}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-[#2C2417] text-sm">{booking.experience}</p>
                    <span className="inline-block px-2 py-0.5 bg-[#086770]/10 text-[#086770] rounded text-xs mt-0.5">
                      {booking.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden md:table-cell">
                    {new Date(booking.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-5 py-4 text-[#2C2417] text-sm hidden sm:table-cell">{booking.travelers}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-0.5 text-[#4A6D3A]">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-sm">{booking.total.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs capitalize ${statusBadge(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => setViewingBooking(booking)}
                        className="p-1.5 hover:bg-[#086770]/10 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 text-[#086770]" />
                      </button>
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(booking.id, 'confirmed')}
                            className="p-1.5 hover:bg-[#739F45]/15 rounded-lg transition-colors"
                            title="Confirm"
                          >
                            <CheckCircle className="w-4 h-4 text-[#4A6D3A]" />
                          </button>
                          <button
                            onClick={() => updateStatus(booking.id, 'cancelled')}
                            className="p-1.5 hover:bg-[#C25E3E]/10 rounded-lg transition-colors"
                            title="Cancel"
                          >
                            <XCircle className="w-4 h-4 text-[#C25E3E]" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View booking modal */}
      {viewingBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#086770]/10">
              <h2 className="text-xl text-[#2C2417]">Booking Details</h2>
              <button onClick={() => setViewingBooking(null)} className="p-1.5 hover:bg-[#F7F2E2] rounded-lg transition-colors">
                <X className="w-5 h-5 text-[#5a5249]" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-3">
              {[
                { label: 'Traveler', value: viewingBooking.travelerName },
                { label: 'Email', value: viewingBooking.email },
                { label: 'Country', value: viewingBooking.country },
                { label: 'Experience', value: viewingBooking.experience },
                { label: 'Category', value: viewingBooking.category },
                { label: 'Travel Date', value: new Date(viewingBooking.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) },
                { label: 'No. of Travelers', value: String(viewingBooking.travelers) },
                { label: 'Total', value: `$${viewingBooking.total.toLocaleString()}` },
                { label: 'Status', value: viewingBooking.status },
              ].map(row => (
                <div key={row.label} className="flex justify-between py-2 border-b border-[#086770]/6">
                  <span className="text-xs text-[#5a5249] uppercase tracking-wide">{row.label}</span>
                  <span className={`text-sm capitalize ${row.label === 'Status' ? statusBadge(viewingBooking.status) + ' px-2 py-0.5 rounded-full' : 'text-[#2C2417]'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              {viewingBooking.status === 'pending' && (
                <div className="flex gap-3 pt-3">
                  <button
                    onClick={() => { updateStatus(viewingBooking.id, 'cancelled'); setViewingBooking(null); }}
                    className="flex-1 px-4 py-2.5 border border-[#C25E3E]/30 text-[#C25E3E] rounded-lg hover:bg-[#C25E3E]/5 transition-colors text-sm"
                  >
                    Cancel Booking
                  </button>
                  <button
                    onClick={() => { updateStatus(viewingBooking.id, 'confirmed'); setViewingBooking(null); }}
                    className="flex-1 px-4 py-2.5 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors text-sm"
                  >
                    Confirm Booking
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
