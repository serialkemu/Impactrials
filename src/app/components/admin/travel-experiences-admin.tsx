import { useState } from 'react';
import { Plus, Search, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  category: string;
  location: string;
  duration: string;
  status: 'active' | 'inactive';
}

export function TravelExperiencesAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, title: 'Masai Mara Safari', category: 'Safari Adventures', location: 'Masai Mara', duration: '3-4 days', status: 'active' },
    { id: 2, title: 'Olkaria / Naivasha Experience', category: 'Safari Adventures', location: 'Naivasha', duration: '2 days', status: 'active' },
    { id: 3, title: 'Nairobi National Park', category: 'Safari Adventures', location: 'Nairobi', duration: '1 day', status: 'active' },
    { id: 4, title: 'Diani Beach', category: 'Coast Experiences', location: 'Diani', duration: 'Flexible', status: 'active' },
    { id: 5, title: 'Kilifi', category: 'Coast Experiences', location: 'Kilifi', duration: 'Flexible', status: 'active' },
    { id: 6, title: 'Ngong Hills Hiking', category: 'Outdoor Adventures', location: 'Ngong Hills', duration: '1 day', status: 'active' },
    { id: 7, title: 'Mount Kenya Hiking', category: 'Outdoor Adventures', location: 'Mount Kenya', duration: '3-5 days', status: 'active' },
    { id: 8, title: 'Busia Village Experience', category: 'Cultural Immersion', location: 'Busia', duration: '2-3 days', status: 'active' },
    { id: 9, title: 'Nairobi City Tour', category: 'Cultural Immersion', location: 'Nairobi', duration: '1 day', status: 'active' },
    { id: 10, title: 'Local Market & Cooking', category: 'Cultural Immersion', location: 'Various', duration: 'Half day', status: 'active' },
  ]);

  const filteredExperiences = experiences.filter(exp =>
    exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id: number) => {
    setExperiences(experiences.map(e =>
      e.id === id ? { ...e, status: e.status === 'active' ? 'inactive' : 'active' } : e
    ));
  };

  const deleteExperience = (id: number) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      setExperiences(experiences.filter(e => e.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[#2C2417] mb-2">Travel Experiences</h1>
          <p className="text-[#6B5D4F]">Manage travel experiences and activities</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
          <Plus className="w-5 h-5" />
          Add Experience
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
        <input
          type="text"
          placeholder="Search experiences..."
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
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Experience</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Category</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Location</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Duration</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Status</th>
                <th className="px-6 py-4 text-right text-sm text-[#2C2417]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B5A3C]/10">
              {filteredExperiences.map((experience) => (
                <tr key={experience.id} className="hover:bg-[#F5EFE7]/50">
                  <td className="px-6 py-4">
                    <p className="text-[#2C2417]">{experience.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-[#D4A574]/20 text-[#8B5A3C] rounded-full text-sm">
                      {experience.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">{experience.location}</td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">{experience.duration}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(experience.id)}
                      className="flex items-center gap-2"
                    >
                      {experience.status === 'active' ? (
                        <>
                          <ToggleRight className="w-8 h-8 text-[#5A7D5C]" />
                          <span className="text-sm text-[#5A7D5C]">Active</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-8 h-8 text-[#C45A3C]" />
                          <span className="text-sm text-[#C45A3C]">Inactive</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5 text-[#8B5A3C]" />
                      </button>
                      <button
                        onClick={() => deleteExperience(experience.id)}
                        className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5 text-[#C45A3C]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
