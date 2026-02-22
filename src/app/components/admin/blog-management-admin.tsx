import { useState } from 'react';
import { Search, Calendar, User, Eye, CheckCircle, XCircle, Trash2 } from 'lucide-react';

interface BlogSubmission {
  id: number;
  title: string;
  author: string;
  email: string;
  category: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
  wordCount: number;
}

export function BlogManagementAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [submissions, setSubmissions] = useState<BlogSubmission[]>([
    {
      id: 1,
      title: 'My Experience in Machakos',
      author: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      category: 'Volunteer Stories',
      submittedDate: '2026-02-12',
      status: 'pending' as const,
      wordCount: 850,
    },
    {
      id: 2,
      title: 'Exploring Diani Beach: A Traveler\'s Guide',
      author: 'Michael Chen',
      email: 'michael.c@email.com',
      category: 'Travel Guides',
      submittedDate: '2026-02-10',
      status: 'approved' as const,
      wordCount: 1200,
    },
    {
      id: 3,
      title: 'Women Empowerment in Nairobi',
      author: 'Emma Williams',
      email: 'emma.w@email.com',
      category: 'Impact Stories',
      submittedDate: '2026-02-08',
      status: 'approved' as const,
      wordCount: 950,
    },
    {
      id: 4,
      title: 'Safari Tips for First-Timers',
      author: 'David Brown',
      email: 'david.b@email.com',
      category: 'Adventure',
      submittedDate: '2026-02-05',
      status: 'rejected' as const,
      wordCount: 600,
    },
    {
      id: 5,
      title: 'Kenyan Cuisine: A Culinary Journey',
      author: 'Lisa Anderson',
      email: 'lisa.a@email.com',
      category: 'Culture',
      submittedDate: '2026-02-15',
      status: 'pending' as const,
      wordCount: 1100,
    },
  ]);

  const filteredSubmissions = submissions.filter(sub => {
    const matchesSearch =
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === 'all' || sub.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id: number, newStatus: 'approved' | 'rejected') => {
    setSubmissions(submissions.map(sub =>
      sub.id === id ? { ...sub, status: newStatus } : sub
    ));
  };

  const deleteSubmission = (id: number) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      setSubmissions(submissions.filter(sub => sub.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-2">Blog Management</h1>
        <p className="text-[#6B5D4F]">Review and manage blog submissions from the community</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F] text-sm mb-1">Pending Review</p>
          <p className="text-2xl text-[#D4A574]">{submissions.filter(s => s.status === 'pending').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F] text-sm mb-1">Approved</p>
          <p className="text-2xl text-[#5A7D5C]">{submissions.filter(s => s.status === 'approved').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F] text-sm mb-1">Rejected</p>
          <p className="text-2xl text-[#C45A3C]">{submissions.filter(s => s.status === 'rejected').length}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
          <input
            type="text"
            placeholder="Search submissions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          />
        </div>
        <div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full sm:w-48 px-4 py-3 bg-white border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-[#8B5A3C]/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F5EFE7]">
              <tr>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Article</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Author</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Category</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Submitted</th>
                <th className="px-6 py-4 text-left text-sm text-[#2C2417]">Status</th>
                <th className="px-6 py-4 text-right text-sm text-[#2C2417]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#8B5A3C]/10">
              {filteredSubmissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-[#F5EFE7]/50">
                  <td className="px-6 py-4">
                    <p className="text-[#2C2417]">{submission.title}</p>
                    <p className="text-xs text-[#6B5D4F]">{submission.wordCount} words</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[#2C2417] text-sm">{submission.author}</p>
                    <p className="text-xs text-[#6B5D4F]">{submission.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-[#F5EFE7] text-[#8B5A3C] rounded-full text-xs">
                      {submission.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#6B5D4F] text-sm">
                    {new Date(submission.submittedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                      submission.status === 'approved'
                        ? 'bg-[#5A7D5C]/10 text-[#5A7D5C]'
                        : submission.status === 'rejected'
                        ? 'bg-[#C45A3C]/10 text-[#C45A3C]'
                        : 'bg-[#D4A574]/10 text-[#8B5A3C]'
                    }`}>
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                        title="View Article"
                      >
                        <Eye className="w-5 h-5 text-[#8B5A3C]" />
                      </button>
                      {submission.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(submission.id, 'approved')}
                            className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                            title="Approve"
                          >
                            <CheckCircle className="w-5 h-5 text-[#5A7D5C]" />
                          </button>
                          <button
                            onClick={() => updateStatus(submission.id, 'rejected')}
                            className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors"
                            title="Reject"
                          >
                            <XCircle className="w-5 h-5 text-[#C45A3C]" />
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => deleteSubmission(submission.id)}
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

      {filteredSubmissions.length === 0 && (
        <div className="bg-white rounded-lg p-12 text-center border border-[#8B5A3C]/10">
          <p className="text-[#6B5D4F]">No submissions found.</p>
        </div>
      )}
    </div>
  );
}