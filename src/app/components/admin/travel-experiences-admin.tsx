import { useState } from 'react';
import { Plus, Search, Edit, Trash2, ToggleLeft, ToggleRight, X, DollarSign } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: number;
  priceUnit: 'per person' | 'per group' | 'per day';
  description: string;
  status: 'active' | 'inactive';
}

const CATEGORIES = [
  'Safari Adventures',
  'Coast Experiences',
  'Outdoor Adventures',
  'Cultural Immersion',
  'Community Visits',
];

const PRICE_UNITS = ['per person', 'per group', 'per day'] as const;

const emptyForm = {
  title: '',
  category: CATEGORIES[0],
  location: '',
  duration: '',
  price: 0,
  priceUnit: 'per person' as Experience['priceUnit'],
  description: '',
  status: 'active' as Experience['status'],
};

export function TravelExperiencesAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, title: 'Masai Mara Safari', category: 'Safari Adventures', location: 'Masai Mara', duration: '3-4 days', price: 450, priceUnit: 'per person', description: 'Witness the great migration and iconic wildlife across the sweeping Mara plains.', status: 'active' },
    { id: 2, title: 'Olkaria / Naivasha Experience', category: 'Safari Adventures', location: 'Naivasha', duration: '2 days', price: 220, priceUnit: 'per person', description: 'Explore geothermal landscapes, Hell\'s Gate, and the serene Lake Naivasha.', status: 'active' },
    { id: 3, title: 'Nairobi National Park', category: 'Safari Adventures', location: 'Nairobi', duration: '1 day', price: 95, priceUnit: 'per person', description: 'Spot lions and rhinos against a city skyline — Africa\'s only urban national park.', status: 'active' },
    { id: 4, title: 'Diani Beach', category: 'Coast Experiences', location: 'Diani', duration: 'Flexible', price: 180, priceUnit: 'per person', description: 'White coral sands, turquoise waters, and swaying palms on Kenya\'s south coast.', status: 'active' },
    { id: 5, title: 'Kilifi Creek & Old Town', category: 'Coast Experiences', location: 'Kilifi', duration: 'Flexible', price: 140, priceUnit: 'per person', description: 'Sail the creek, explore Swahili ruins, and connect with coastal fishing communities.', status: 'active' },
    { id: 6, title: 'Ngong Hills Hiking', category: 'Outdoor Adventures', location: 'Ngong Hills', duration: '1 day', price: 60, priceUnit: 'per person', description: 'Gentle ridge hike with panoramic views of the Great Rift Valley and Nairobi.', status: 'active' },
    { id: 7, title: 'Mount Kenya Hiking', category: 'Outdoor Adventures', location: 'Mount Kenya', duration: '3-5 days', price: 380, priceUnit: 'per person', description: 'Trek Africa\'s second-highest peak through bamboo forests and alpine moorland.', status: 'active' },
    { id: 8, title: 'Busia Village Experience', category: 'Cultural Immersion', location: 'Busia', duration: '2-3 days', price: 200, priceUnit: 'per person', description: 'Live alongside a Luhya community — farm, cook, and share stories across generations.', status: 'active' },
    { id: 9, title: 'Nairobi City Tour', category: 'Cultural Immersion', location: 'Nairobi', duration: '1 day', price: 75, priceUnit: 'per group', description: 'Markets, murals, matatus, and maker spaces — the real pulse of Nairobi.', status: 'active' },
    { id: 10, title: 'Local Market & Cooking', category: 'Cultural Immersion', location: 'Various', duration: 'Half day', price: 45, priceUnit: 'per person', description: 'Shop fresh produce at a local market, then cook a traditional Kenyan meal together.', status: 'active' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');

  const filteredExperiences = experiences.filter(exp =>
    exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setFormError('');
    setShowModal(true);
  };

  const openEdit = (exp: Experience) => {
    setForm({
      title: exp.title,
      category: exp.category,
      location: exp.location,
      duration: exp.duration,
      price: exp.price,
      priceUnit: exp.priceUnit,
      description: exp.description,
      status: exp.status,
    });
    setEditingId(exp.id);
    setFormError('');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
    setForm(emptyForm);
    setFormError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.location.trim() || !form.duration.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }
    if (form.price < 0) {
      setFormError('Price must be a positive number.');
      return;
    }

    if (editingId !== null) {
      setExperiences(experiences.map(exp =>
        exp.id === editingId ? { ...exp, ...form } : exp
      ));
    } else {
      const newId = Math.max(0, ...experiences.map(e => e.id)) + 1;
      setExperiences([...experiences, { id: newId, ...form }]);
    }
    closeModal();
  };

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

  const formatPrice = (price: number, unit: string) => `$${price.toLocaleString()} ${unit}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[#2C2417] mb-1">Travel Experiences</h1>
          <p className="text-[#5a5249] text-sm">Manage travel experiences, pricing, and availability</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
        <input
          type="text"
          placeholder="Search by title, category, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#086770]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F7F2E2]">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Experience</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Category</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden md:table-cell">Location</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden md:table-cell">Duration</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Price</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Status</th>
                <th className="px-5 py-3.5 text-right text-xs text-[#5a5249] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#086770]/8">
              {filteredExperiences.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-[#5a5249] text-sm">
                    No experiences found.
                  </td>
                </tr>
              )}
              {filteredExperiences.map((experience) => (
                <tr key={experience.id} className="hover:bg-[#F7F2E2]/50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-[#2C2417] text-sm">{experience.title}</p>
                    {experience.description && (
                      <p className="text-xs text-[#5a5249] mt-0.5 max-w-[200px] truncate">{experience.description}</p>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 bg-[#086770]/10 text-[#086770] rounded-full text-xs whitespace-nowrap">
                      {experience.category}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden md:table-cell">{experience.location}</td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden md:table-cell">{experience.duration}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 text-[#4A6D3A]">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span className="text-sm">{experience.price.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-[#5a5249] mt-0.5">{experience.priceUnit}</p>
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => toggleStatus(experience.id)}
                      className="flex items-center gap-1.5"
                    >
                      {experience.status === 'active' ? (
                        <>
                          <ToggleRight className="w-7 h-7 text-[#739F45]" />
                          <span className="text-xs text-[#4A6D3A]">Active</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-7 h-7 text-[#C25E3E]" />
                          <span className="text-xs text-[#C25E3E]">Inactive</span>
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => openEdit(experience)}
                        className="p-1.5 hover:bg-[#086770]/10 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-[#086770]" />
                      </button>
                      <button
                        onClick={() => deleteExperience(experience.id)}
                        className="p-1.5 hover:bg-[#C25E3E]/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-[#C25E3E]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-lg my-8 shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#086770]/10">
              <h2 className="text-xl text-[#2C2417]">
                {editingId !== null ? 'Edit Experience' : 'Add New Experience'}
              </h2>
              <button
                onClick={closeModal}
                className="p-1.5 hover:bg-[#F7F2E2] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#5a5249]" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              {formError && (
                <div className="px-4 py-3 bg-[#C25E3E]/10 text-[#C25E3E] rounded-lg text-sm">
                  {formError}
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">
                  Title <span className="text-[#C25E3E]">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Masai Mara Safari"
                  className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">Category</label>
                <select
                  value={form.category}
                  onChange={e => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm bg-white"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Location & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#2C2417] mb-1.5">
                    Location <span className="text-[#C25E3E]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={e => setForm({ ...form, location: e.target.value })}
                    placeholder="e.g. Masai Mara"
                    className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#2C2417] mb-1.5">
                    Duration <span className="text-[#C25E3E]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.duration}
                    onChange={e => setForm({ ...form, duration: e.target.value })}
                    placeholder="e.g. 3-4 days"
                    className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">
                  Price (USD) <span className="text-[#C25E3E]">*</span>
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a5249] text-sm">$</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={form.price}
                      onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                      placeholder="0"
                      className="w-full pl-8 pr-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
                    />
                  </div>
                  <select
                    value={form.priceUnit}
                    onChange={e => setForm({ ...form, priceUnit: e.target.value as Experience['priceUnit'] })}
                    className="px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm bg-white"
                  >
                    {PRICE_UNITS.map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
                <p className="text-xs text-[#5a5249] mt-1">
                  Preview: <span className="text-[#4A6D3A]">{formatPrice(form.price, form.priceUnit)}</span>
                </p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">Description</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  placeholder="Brief description of the experience..."
                  className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm resize-none"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">Status</label>
                <div className="flex gap-3">
                  {(['active', 'inactive'] as const).map(s => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value={s}
                        checked={form.status === s}
                        onChange={() => setForm({ ...form, status: s })}
                        className="accent-[#086770]"
                      />
                      <span className={`text-sm capitalize ${s === 'active' ? 'text-[#4A6D3A]' : 'text-[#C25E3E]'}`}>{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2.5 border border-[#086770]/20 text-[#2C2417] rounded-lg hover:bg-[#F7F2E2] transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors text-sm"
                >
                  {editingId !== null ? 'Save Changes' : 'Add Experience'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}