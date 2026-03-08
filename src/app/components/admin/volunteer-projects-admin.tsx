import { useState } from 'react';
import { Plus, Search, Edit, Trash2, ToggleLeft, ToggleRight, X, DollarSign, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  type: string;
  locations: string;
  duration: string;
  price: number;
  priceUnit: 'per week' | 'per month' | 'per project' | 'free';
  description: string;
  applicants: number;
  status: 'active' | 'inactive';
}

const PROJECT_TYPES = [
  'Education',
  'Agriculture',
  'Women Empowerment',
  'Health',
  'Child Protection',
  'Mental Health',
  'Community Development',
];

const PRICE_UNITS = ['per week', 'per month', 'per project', 'free'] as const;

const emptyForm = {
  title: '',
  type: PROJECT_TYPES[0],
  locations: '',
  duration: '',
  price: 0,
  priceUnit: 'per week' as Project['priceUnit'],
  description: '',
  status: 'active' as Project['status'],
};

export function VolunteerProjectsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showEditor, setShowEditor] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState('');

  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Education Support & Child Mentorship', type: 'Education', locations: 'Nairobi, Machakos', duration: '4 weeks', price: 350, priceUnit: 'per month', description: 'Support local teachers and mentor children in under-resourced classrooms.', applicants: 8, status: 'active' },
    { id: 2, title: 'Sustainable Agriculture & Food Security', type: 'Agriculture', locations: 'Machakos, Busia, Kilifi', duration: '2–4 weeks', price: 300, priceUnit: 'per month', description: 'Work alongside farming families to introduce sustainable growing practices.', applicants: 6, status: 'active' },
    { id: 3, title: 'Women Empowerment & Livelihoods', type: 'Women Empowerment', locations: 'Nairobi', duration: '2–6 weeks', price: 280, priceUnit: 'per month', description: 'Facilitate skills workshops and income-generation programmes for women.', applicants: 4, status: 'active' },
    { id: 4, title: 'Sexual & Reproductive Health Education', type: 'Health', locations: 'Machakos, Busia, Kilifi', duration: '2–4 weeks', price: 320, priceUnit: 'per month', description: 'Deliver SRHR education to adolescents and community health workers.', applicants: 3, status: 'active' },
    { id: 5, title: 'Child Protection & Family Strengthening', type: 'Child Protection', locations: 'Machakos, Busia', duration: '4–8 weeks', price: 310, priceUnit: 'per month', description: 'Support caseworkers and facilitate family counselling sessions.', applicants: 2, status: 'active' },
    { id: 6, title: 'Mental Health & Psychosocial Support', type: 'Mental Health', locations: 'Machakos, Nairobi', duration: '4 weeks', price: 330, priceUnit: 'per month', description: 'Co-facilitate support groups and awareness sessions with local counsellors.', applicants: 1, status: 'active' },
    { id: 7, title: 'Community Outreach & Development', type: 'Community Development', locations: 'Nairobi, Busia, Kilifi', duration: 'Flexible', price: 0, priceUnit: 'free', description: 'General community outreach including sanitation, infrastructure, and civic projects.', applicants: 0, status: 'inactive' },
  ]);

  const filtered = projects.filter(p => {
    const matchSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.locations.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === 'all' || p.type === filterType;
    const matchStatus = filterStatus === 'all' || p.status === filterStatus;
    return matchSearch && matchType && matchStatus;
  });

  const openAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setFormError('');
    setShowEditor(true);
  };

  const openEdit = (p: Project) => {
    setForm({
      title: p.title,
      type: p.type,
      locations: p.locations,
      duration: p.duration,
      price: p.price,
      priceUnit: p.priceUnit,
      description: p.description,
      status: p.status,
    });
    setEditingId(p.id);
    setFormError('');
    setShowEditor(true);
  };

  const closeEditor = () => {
    setShowEditor(false);
    setEditingId(null);
    setForm(emptyForm);
    setFormError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.locations.trim() || !form.duration.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }
    if (editingId !== null) {
      setProjects(projects.map(p => p.id === editingId ? { ...p, ...form } : p));
    } else {
      const newId = Math.max(0, ...projects.map(p => p.id)) + 1;
      setProjects([...projects, { id: newId, ...form, applicants: 0 }]);
    }
    closeEditor();
  };

  const toggleStatus = (id: number) => {
    setProjects(projects.map(p =>
      p.id === id ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' } : p
    ));
  };

  const deleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const formatPrice = (price: number, unit: Project['priceUnit']) =>
    unit === 'free' ? 'Free' : `$${price.toLocaleString()} ${unit}`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[#2C2417] mb-1">Volunteer Projects</h1>
          <p className="text-[#5a5249] text-sm">Manage volunteer projects, pricing, and availability</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
          <input
            type="text"
            placeholder="Search by title, type, or location..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
          <select
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
            className="pl-9 pr-4 py-2.5 bg-white border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm appearance-none min-w-[160px]"
          >
            <option value="all">All Types</option>
            {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a5249]" />
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="pl-9 pr-4 py-2.5 bg-white border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm appearance-none min-w-[140px]"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#086770]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F7F2E2]">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Project</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden md:table-cell">Type</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden lg:table-cell">Locations</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden md:table-cell">Duration</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Price</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden sm:table-cell">Applicants</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Status</th>
                <th className="px-5 py-3.5 text-right text-xs text-[#5a5249] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#086770]/8">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-10 text-center text-[#5a5249] text-sm">
                    No projects found.
                  </td>
                </tr>
              )}
              {filtered.map(project => (
                <tr key={project.id} className="hover:bg-[#F7F2E2]/50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-[#2C2417] text-sm">{project.title}</p>
                    {project.description && (
                      <p className="text-xs text-[#5a5249] mt-0.5 max-w-[220px] truncate">{project.description}</p>
                    )}
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="inline-block px-2.5 py-1 bg-[#C25E3E]/10 text-[#C25E3E] rounded-full text-xs whitespace-nowrap">
                      {project.type}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden lg:table-cell">{project.locations}</td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden md:table-cell">{project.duration}</td>
                  <td className="px-5 py-4">
                    {project.priceUnit === 'free' ? (
                      <span className="inline-block px-2 py-0.5 bg-[#739F45]/15 text-[#4A6D3A] rounded text-xs">Free</span>
                    ) : (
                      <div>
                        <div className="flex items-center gap-0.5 text-[#4A6D3A]">
                          <DollarSign className="w-3 h-3" />
                          <span className="text-sm">{project.price.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-[#5a5249]">{project.priceUnit}</p>
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4 text-[#2C2417] text-sm hidden sm:table-cell">{project.applicants}</td>
                  <td className="px-5 py-4">
                    <button onClick={() => toggleStatus(project.id)} className="flex items-center gap-1.5">
                      {project.status === 'active' ? (
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
                        onClick={() => openEdit(project)}
                        className="p-1.5 hover:bg-[#086770]/10 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4 text-[#086770]" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
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
      {showEditor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-lg my-8 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#086770]/10">
              <h2 className="text-xl text-[#2C2417]">
                {editingId !== null ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button onClick={closeEditor} className="p-1.5 hover:bg-[#F7F2E2] rounded-lg transition-colors">
                <X className="w-5 h-5 text-[#5a5249]" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
              {formError && (
                <div className="px-4 py-3 bg-[#C25E3E]/10 text-[#C25E3E] rounded-lg text-sm">{formError}</div>
              )}

              {/* Title */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">
                  Project Title <span className="text-[#C25E3E]">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Education Support & Child Mentorship"
                  className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">Project Type</label>
                <select
                  value={form.type}
                  onChange={e => setForm({ ...form, type: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm bg-white"
                >
                  {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Locations & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#2C2417] mb-1.5">
                    Locations <span className="text-[#C25E3E]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.locations}
                    onChange={e => setForm({ ...form, locations: e.target.value })}
                    placeholder="e.g. Nairobi, Machakos"
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
                    placeholder="e.g. 2–4 weeks"
                    className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">
                  Programme Fee (USD)
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a5249] text-sm">$</span>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={form.priceUnit === 'free' ? 0 : form.price}
                      disabled={form.priceUnit === 'free'}
                      onChange={e => setForm({ ...form, price: Number(e.target.value) })}
                      placeholder="0"
                      className="w-full pl-8 pr-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm disabled:bg-[#F7F2E2] disabled:text-[#5a5249]"
                    />
                  </div>
                  <select
                    value={form.priceUnit}
                    onChange={e => setForm({ ...form, priceUnit: e.target.value as Project['priceUnit'], price: e.target.value === 'free' ? 0 : form.price })}
                    className="px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm bg-white"
                  >
                    {PRICE_UNITS.map(u => <option key={u} value={u}>{u}</option>)}
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
                  placeholder="Brief description of the project..."
                  className="w-full px-3.5 py-2.5 border border-[#086770]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#086770]/30 text-sm resize-none"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm text-[#2C2417] mb-1.5">Status</label>
                <div className="flex gap-4">
                  {(['active', 'inactive'] as const).map(s => (
                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="proj-status"
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
                  onClick={closeEditor}
                  className="flex-1 px-4 py-2.5 border border-[#086770]/20 text-[#2C2417] rounded-lg hover:bg-[#F7F2E2] transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors text-sm"
                >
                  {editingId !== null ? 'Save Changes' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
