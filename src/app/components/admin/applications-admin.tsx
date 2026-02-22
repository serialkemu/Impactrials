import { useState } from 'react';
import { Search, Eye, CheckCircle, XCircle, Filter } from 'lucide-react';

interface Application {
  id: number;
  name: string;
  email: string;
  project: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export function ApplicationsAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [applications, setApplications] = useState<Application[]>([
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', project: 'Education Support', date: '2026-02-15', status: 'pending' },
    { id: 2, name: 'Michael Chen', email: 'michael.c@email.com', project: 'Sustainable Agriculture', date: '2026-02-15', status: 'approved' },
    { id: 3, name: 'Emma Williams', email: 'emma.w@email.com', project: 'Women Empowerment', date: '2026-02-14', status: 'pending' },
    { id: 4, name: 'David Brown', email: 'david.b@email.com', project: 'Community Outreach', date: '2026-02-13', status: 'approved' },
    { id: 5, name: 'Lisa Anderson', email: 'lisa.a@email.com', project: 'Mental Health Support', date: '2026-02-12', status: 'pending' },
    { id: 6, name: 'James Taylor', email: 'james.t@email.com', project: 'SRHR Education', date: '2026-02-11', status: 'rejected' },
    { id: 7, name: 'Maria Garcia', email: 'maria.g@email.com', project: 'Child Protection', date: '2026-02-10', status: 'approved' },
    { id: 8, name: 'Robert Wilson', email: 'robert.w@email.com', project: 'Education Support', date: '2026-02-09', status: 'pending' },
  ]);

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.project.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: number, newStatus: 'approved' | 'rejected') => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-2">Applications</h1>
        <p className="text-[#6B5D4F]">Review and manage volunteer applications</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-48 pl-10 pr-4 py-3 bg-white border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C] appearance-none"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F] text-sm mb-1">Pending</p>
          <p className="text-2xl text-[#2C2417]">{applications.filter(a => a.status === 'pending').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F] text-sm mb-1">Approved</p>
          <p className="text-2xl text-[#5A7D5C]">{applications.filter(a => a.status === 'approved').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F] text-sm mb-1">Rejected</p>
          <p className="text-2xl text-[#C45A3C]">{applications.filter(a => a.status === 'rejected').length}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-[#8B5A3C]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5EFE7]">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Applicant</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Email</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Project</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Date</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Status</th>
                <th className="px-6 py-4 text-right text-sm text-[#2C2417]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B5A3C]/10">
              {filteredApplications.map((application) => (
                <tr key={application.id} className="hover:bg-[#F5EFE7]/50">
                  <td className="px-6 py-4">
                    <p className="text-[#2C2417]">{application.name}</p>
                  </td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">{application.email}</td>
                  <td className="px-6 py-4 text-[#2C2417] text-sm">{application.project}</td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">
                    {new Date(application.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      application.status === 'approved'
                        ? 'bg-[#5A7D5C]/10 text-[#5A7D5C]'
                        : application.status === 'rejected'
                        ? 'bg-[#C45A3C]/10 text-[#C45A3C]'
                        : 'bg-[#D4A574]/10 text-[#8B5A3C]'
                    }`}>
                      {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
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
                      {application.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(application.id, 'approved')}
                            className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                            title="Approve"
                          >
                            <CheckCircle className="w-5 h-5 text-[#5A7D5C]" />
                          </button>
                          <button
                            onClick={() => updateStatus(application.id, 'rejected')}
                            className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                            title="Reject"
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

      {filteredApplications.length === 0 && (
        <div className="bg-white rounded-lg p-12 text-center border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F]">No applications found.</p>
        </div>
      )}
    </div>
  );
}
