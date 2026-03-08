import { useState } from 'react';
import { Search, Eye, CheckCircle, XCircle, Filter, X } from 'lucide-react';

interface Application {
  id: number;
  name: string;
  email: string;
  project: string;
  projectType: string;
  country: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

const PROJECT_OPTIONS = [
  'Education Support',
  'Sustainable Agriculture',
  'Women Empowerment',
  'Community Outreach',
  'Mental Health Support',
  'SRHR Education',
  'Child Protection',
];

const TYPE_OPTIONS = [
  'Education',
  'Agriculture',
  'Women Empowerment',
  'Community Development',
  'Mental Health',
  'Health',
  'Child Protection',
];

export function ApplicationsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProject, setFilterProject] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [viewingApp, setViewingApp] = useState<Application | null>(null);

  const [applications, setApplications] = useState<Application[]>([
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', project: 'Education Support', projectType: 'Education', country: 'United Kingdom', date: '2026-02-15', status: 'pending' },
    { id: 2, name: 'Michael Chen', email: 'michael.c@email.com', project: 'Sustainable Agriculture', projectType: 'Agriculture', country: 'United States', date: '2026-02-15', status: 'approved' },
    { id: 3, name: 'Emma Williams', email: 'emma.w@email.com', project: 'Women Empowerment', projectType: 'Women Empowerment', country: 'Australia', date: '2026-02-14', status: 'pending' },
    { id: 4, name: 'David Brown', email: 'david.b@email.com', project: 'Community Outreach', projectType: 'Community Development', country: 'Canada', date: '2026-02-13', status: 'approved' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa.a@email.com', project: 'Mental Health Support', projectType: 'Mental Health', country: 'Germany', date: '2026-02-12', status: 'pending' },
    { id: 6, name: 'James Taylor', email: 'james.t@email.com', project: 'SRHR Education', projectType: 'Health', country: 'Netherlands', date: '2026-02-11', status: 'rejected' },
    { id: 7, name: 'Maria Garcia', email: 'maria.g@email.com', project: 'Child Protection', projectType: 'Child Protection', country: 'Spain', date: '2026-02-10', status: 'approved' },
    { id: 8, name: 'Robert Wilson', email: 'robert.w@email.com', project: 'Education Support', projectType: 'Education', country: 'United States', date: '2026-02-09', status: 'pending' },
    { id: 9, name: 'Amara Osei', email: 'amara.o@email.com', project: 'Women Empowerment', projectType: 'Women Empowerment', country: 'United Kingdom', date: '2026-02-08', status: 'approved' },
    { id: 10, name: 'Priya Nair', email: 'priya.n@email.com', project: 'Sustainable Agriculture', projectType: 'Agriculture', country: 'India', date: '2026-02-07', status: 'pending' },
  ]);

  const uniqueCountries = Array.from(new Set(applications.map(a => a.country))).sort();

  const filteredApplications = applications.filter(app => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesProject = filterProject === 'all' || app.project === filterProject;
    const matchesCountry = filterCountry === 'all' || app.country === filterCountry;
    return matchesSearch && matchesStatus && matchesProject && matchesCountry;
  });

  const activeFilterCount = [filterStatus, filterProject, filterCountry].filter(f => f !== 'all').length;

  const clearFilters = () => {
    setFilterStatus('all');
    setFilterProject('all');
    setFilterCountry('all');
  };

  const updateStatus = (id: number, newStatus: 'approved' | 'rejected') => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  const statusBadge = (status: Application['status']) => {
    const map = {
      approved: 'bg-[#739F45]/15 text-[#4A6D3A]',
      rejected: 'bg-[#C25E3E]/10 text-[#C25E3E]',
      pending: 'bg-[#086770]/10 text-[#086770]',
    };
    return map[status];
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-1">Volunteer Applications</h1>
        <p className="text-[#5a5249] text-sm">Review and manage volunteer applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: applications.length, color: 'text-[#086770]' },
          { label: 'Pending', value: applications.filter(a => a.status === 'pending').length, color: 'text-[#086770]' },
          { label: 'Approved', value: applications.filter(a => a.status === 'approved').length, color: 'text-[#4A6D3A]' },
          { label: 'Rejected', value: applications.filter(a => a.status === 'rejected').length, color: 'text-[#C25E3E]' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-4 border border-[#086770]/10">
            <p className="text-[#5a5249] text-xs mb-1">{s.label}</p>
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
            placeholder="Search by name, email, project, or country..."
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
            <p className="text-sm text-[#2C2417]">Filter Applications</p>
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
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-[#5a5249] mb-1.5 uppercase tracking-wide">Project</label>
              <select
                value={filterProject}
                onChange={e => setFilterProject(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F2E2] border border-[#086770]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#086770]/30"
              >
                <option value="all">All Projects</option>
                {PROJECT_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-[#5a5249] mb-1.5 uppercase tracking-wide">Country</label>
              <select
                value={filterCountry}
                onChange={e => setFilterCountry(e.target.value)}
                className="w-full px-3 py-2 bg-[#F7F2E2] border border-[#086770]/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#086770]/30"
              >
                <option value="all">All Countries</option>
                {uniqueCountries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results count */}
      <p className="text-xs text-[#5a5249]">
        Showing <span className="text-[#086770]">{filteredApplications.length}</span> of {applications.length} applications
      </p>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#086770]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F7F2E2]">
              <tr>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Applicant</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden md:table-cell">Email</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Project</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden lg:table-cell">Country</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide hidden sm:table-cell">Date</th>
                <th className="px-5 py-3.5 text-left text-xs text-[#5a5249] uppercase tracking-wide">Status</th>
                <th className="px-5 py-3.5 text-right text-xs text-[#5a5249] uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#086770]/8">
              {filteredApplications.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-[#5a5249] text-sm">
                    No applications match your filters.
                  </td>
                </tr>
              )}
              {filteredApplications.map(application => (
                <tr key={application.id} className="hover:bg-[#F7F2E2]/50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-[#2C2417] text-sm">{application.name}</p>
                    <p className="text-xs text-[#5a5249] md:hidden">{application.email}</p>
                  </td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden md:table-cell">{application.email}</td>
                  <td className="px-5 py-4">
                    <span className="inline-block px-2.5 py-1 bg-[#C25E3E]/10 text-[#C25E3E] rounded-full text-xs whitespace-nowrap">
                      {application.project}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden lg:table-cell">{application.country}</td>
                  <td className="px-5 py-4 text-[#5a5249] text-sm hidden sm:table-cell">
                    {new Date(application.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs capitalize ${statusBadge(application.status)}`}>
                      {application.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => setViewingApp(application)}
                        className="p-1.5 hover:bg-[#086770]/10 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4 text-[#086770]" />
                      </button>
                      {application.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(application.id, 'approved')}
                            className="p-1.5 hover:bg-[#739F45]/15 rounded-lg transition-colors"
                            title="Approve"
                          >
                            <CheckCircle className="w-4 h-4 text-[#4A6D3A]" />
                          </button>
                          <button
                            onClick={() => updateStatus(application.id, 'rejected')}
                            className="p-1.5 hover:bg-[#C25E3E]/10 rounded-lg transition-colors"
                            title="Reject"
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

      {/* View detail modal */}
      {viewingApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#086770]/10">
              <h2 className="text-xl text-[#2C2417]">Application Details</h2>
              <button onClick={() => setViewingApp(null)} className="p-1.5 hover:bg-[#F7F2E2] rounded-lg transition-colors">
                <X className="w-5 h-5 text-[#5a5249]" />
              </button>
            </div>
            <div className="px-6 py-5 space-y-3">
              {[
                { label: 'Name', value: viewingApp.name },
                { label: 'Email', value: viewingApp.email },
                { label: 'Project', value: viewingApp.project },
                { label: 'Country', value: viewingApp.country },
                { label: 'Applied', value: new Date(viewingApp.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) },
                { label: 'Status', value: viewingApp.status },
              ].map(row => (
                <div key={row.label} className="flex justify-between py-2 border-b border-[#086770]/6">
                  <span className="text-xs text-[#5a5249] uppercase tracking-wide">{row.label}</span>
                  <span className={`text-sm capitalize ${row.label === 'Status' ? statusBadge(viewingApp.status) + ' px-2 py-0.5 rounded-full' : 'text-[#2C2417]'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
              {viewingApp.status === 'pending' && (
                <div className="flex gap-3 pt-3">
                  <button
                    onClick={() => { updateStatus(viewingApp.id, 'rejected'); setViewingApp(null); }}
                    className="flex-1 px-4 py-2.5 border border-[#C25E3E]/30 text-[#C25E3E] rounded-lg hover:bg-[#C25E3E]/5 transition-colors text-sm"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => { updateStatus(viewingApp.id, 'approved'); setViewingApp(null); }}
                    className="flex-1 px-4 py-2.5 bg-[#086770] text-white rounded-lg hover:bg-[#065660] transition-colors text-sm"
                  >
                    Approve
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
