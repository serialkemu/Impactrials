import { useState } from 'react';
import { Search, Calendar, Users, DollarSign, Eye, CheckCircle, XCircle } from 'lucide-react';

interface TravelBooking {
  id: number;
  experience: string;
  travelerName: string;
  travelers: number;
  date: string;
  total: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  email: string;
}

export function TravelBookingsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookings, setBookings] = useState<TravelBooking[]>([
    { id: 1, experience: 'Masai Mara Safari', travelerName: 'Sarah Johnson', travelers: 2, date: '2026-03-20', total: 900, status: 'confirmed', email: 'sarah.j@email.com' },
    { id: 2, experience: 'Nairobi National Park', travelerName: 'Michael Chen', travelers: 4, date: '2026-03-28', total: 400, status: 'confirmed', email: 'michael.c@email.com' },
    { id: 3, experience: 'Diani Beach', travelerName: 'Emma Williams', travelers: 2, date: '2026-04-05', total: 400, status: 'pending', email: 'emma.w@email.com' },
    { id: 4, experience: 'Mount Kenya Hiking', travelerName: 'David Brown', travelers: 1, date: '2026-04-10', total: 350, status: 'confirmed', email: 'david.b@email.com' },
    { id: 5, experience: 'Nairobi City Tour', travelerName: 'Lisa Anderson', travelers: 3, date: '2026-03-25', total: 300, status: 'pending', email: 'lisa.a@email.com' },
    { id: 6, experience: 'Ngong Hills Hiking', travelerName: 'James Taylor', travelers: 2, date: '2026-04-01', total: 160, status: 'cancelled', email: 'james.t@email.com' },
  ]);

  const filteredBookings = bookings.filter(booking =>
    booking.travelerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateStatus = (id: number, newStatus: 'confirmed' | 'cancelled') => {
    setBookings(bookings.map(b =>
      b.id === id ? { ...b, status: newStatus } : b
    ));
  };

  const totalRevenue = bookings
    .filter(b => b.status === 'confirmed')
    .reduce((sum, b) => sum + b.total, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-2">Travel Bookings</h1>
        <p className="text-[#6B5D4F]">Manage travel experience bookings and payments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#6B5D4F] text-sm">Total Bookings</p>
            <Calendar className="w-5 h-5 text-[#8B5A3C]" />
          </div>
          <p className="text-3xl text-[#2C2417]">{bookings.length}</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#6B5D4F] text-sm">Confirmed</p>
            <CheckCircle className="w-5 h-5 text-[#5A7D5C]" />
          </div>
          <p className="text-3xl text-[#5A7D5C]">{bookings.filter(b => b.status === 'confirmed').length}</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[#6B5D4F] text-sm">Total Revenue</p>
            <DollarSign className="w-5 h-5 text-[#8B5A3C]" />
          </div>
          <p className="text-3xl text-[#8B5A3C]">${totalRevenue}</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-[#8B5A3C]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5EFE7]">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Traveler</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Experience</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Date</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Travelers</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Total</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Status</th>
                <th className="px-6 py-4 text-right text-sm text-[#2C2417]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B5A3C]/10">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-[#F5EFE7]/50">
                  <td className="px-6 py-4">
                    <p className="text-[#2C2417]">{booking.travelerName}</p>
                    <p className="text-xs text-[#6B5D4F]">{booking.email}</p>
                  </td>
                  <td className="px-6 py-4 text-[#2C2417]">{booking.experience}</td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-[#2C2417]">{booking.travelers}</td>
                  <td className="px-6 py-4 text-[#2C2417]">${booking.total}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                      booking.status === 'confirmed'
                        ? 'bg-[#5A7D5C]/10 text-[#5A7D5C]'
                        : booking.status === 'pending'
                        ? 'bg-[#D4A574]/10 text-[#8B5A3C]'
                        : 'bg-[#C45A3C]/10 text-[#C45A3C]'
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5 text-[#8B5A3C]" />
                      </button>
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(booking.id, 'confirmed')}
                            className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                            title="Confirm"
                          >
                            <CheckCircle className="w-5 h-5 text-[#5A7D5C]" />
                          </button>
                          <button
                            onClick={() => updateStatus(booking.id, 'cancelled')}
                            className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                            title="Cancel"
                          >
                            <XCircle className="w-5 h-5 text-[#C45A3C]" />
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

      {filteredBookings.length === 0 && (
        <div className="bg-white rounded-lg p-12 text-center border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F]">No bookings found.</p>
        </div>
      )}
    </div>
  );
}
