import { useState } from 'react';
import { Plus, Search, Edit, Trash2, ToggleLeft, ToggleRight, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  type: string;
  locations: string;
  applicants: number;
  status: 'active' | 'inactive';
}

export function VolunteerProjectsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Education Support & Child Mentorship', type: 'Education', locations: 'Nairobi, Machakos', applicants: 8, status: 'active' },
    { id: 2, title: 'Sustainable Agriculture & Food Security', type: 'Agriculture', locations: 'Machakos, Busia, Kilifi', applicants: 6, status: 'active' },
    { id: 3, title: 'Women Empowerment & Livelihoods', type: 'Women Empowerment', locations: 'Nairobi', applicants: 4, status: 'active' },
    { id: 4, title: 'Sexual & Reproductive Health Education', type: 'Health', locations: 'Machakos, Busia, Kilifi', applicants: 3, status: 'active' },
    { id: 5, title: 'Child Protection & Family Strengthening', type: 'Child Protection', locations: 'Machakos, Busia', applicants: 2, status: 'active' },
    { id: 6, title: 'Mental Health & Psychosocial Support', type: 'Mental Health', locations: 'Machakos, Nairobi', applicants: 1, status: 'active' },
    { id: 7, title: 'Community Outreach & Development', type: 'Community Development', locations: 'Nairobi, Busia, Kilifi', applicants: 0, status: 'inactive' },
  ]);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.locations.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[#2C2417] mb-2">Volunteer Projects</h1>
          <p className="text-[#6B5D4F]">Manage volunteer projects and opportunities</p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setShowEditor(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
        <input
          type="text"
          placeholder="Search projects..."
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
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Project</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Type</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Locations</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Applicants</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Status</th>
                <th className="px-6 py-4 text-right text-sm text-[#2C2417]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B5A3C]/10">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-[#F5EFE7]/50">
                  <td className="px-6 py-4">
                    <p className="text-[#2C2417]">{project.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-[#D4A574]/20 text-[#8B5A3C] rounded-full text-sm">
                      {project.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">{project.locations}</td>
                  <td className="px-6 py-4 text-[#2C2417]">{project.applicants}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleStatus(project.id)}
                      className="flex items-center gap-2"
                    >
                      {project.status === 'active' ? (
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
                        onClick={() => {
                          setEditingProject(project);
                          setShowEditor(true);
                        }}
                        className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-5 h-5 text-[#8B5A3C]" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
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

      {/* Project Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-[#8B5A3C]/10 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl text-[#2C2417]">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button
                onClick={() => setShowEditor(false)}
                className="p-2 hover:bg-[#F5EFE7] rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Project Title</label>
                <input
                  type="text"
                  defaultValue={editingProject?.title}
                  className="w-full px-4 py-2 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Project Type</label>
                <select
                  defaultValue={editingProject?.type}
                  className="w-full px-4 py-2 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                >
                  <option value="Education">Education</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Women Empowerment">Women Empowerment</option>
                  <option value="Health">Health</option>
                  <option value="Child Protection">Child Protection</option>
                  <option value="Mental Health">Mental Health</option>
                  <option value="Community Development">Community Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  placeholder="Enter project description"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Locations</label>
                <input
                  type="text"
                  defaultValue={editingProject?.locations}
                  className="w-full px-4 py-2 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  placeholder="e.g., Nairobi, Machakos"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Project Image URL</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  placeholder="https://..."
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowEditor(false)}
                  className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowEditor(false);
                    // Save logic here
                  }}
                  className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
