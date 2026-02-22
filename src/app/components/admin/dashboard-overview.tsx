import { Users, Plane, FileText, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

export function DashboardOverview() {
  const stats = [
    {
      label: 'Total Projects',
      value: '7',
      icon: Users,
      color: 'bg-[#8B5A3C]',
      change: '+2 this month',
    },
    {
      label: 'Travel Experiences',
      value: '12',
      icon: Plane,
      color: 'bg-[#5A7D5C]',
      change: '+3 this month',
    },
    {
      label: 'Applications',
      value: '24',
      icon: FileText,
      color: 'bg-[#D4A574]',
      change: '+8 this week',
    },
    {
      label: 'Active Listings',
      value: '19',
      icon: TrendingUp,
      color: 'bg-[#E8997C]',
      change: '100% uptime',
    },
  ];

  const recentApplications = [
    { name: 'Sarah Johnson', project: 'Education Support', status: 'pending', date: '2 hours ago' },
    { name: 'Michael Chen', project: 'Sustainable Agriculture', status: 'approved', date: '5 hours ago' },
    { name: 'Emma Williams', project: 'Women Empowerment', status: 'pending', date: '1 day ago' },
    { name: 'David Brown', project: 'Community Outreach', status: 'approved', date: '2 days ago' },
    { name: 'Lisa Anderson', project: 'Mental Health Support', status: 'pending', date: '3 days ago' },
  ];

  const projectStatus = [
    { name: 'Education Support & Child Mentorship', status: 'active', applicants: 8 },
    { name: 'Sustainable Agriculture & Food Security', status: 'active', applicants: 6 },
    { name: 'Women Empowerment & Livelihoods', status: 'active', applicants: 4 },
    { name: 'SRHR Education', status: 'active', applicants: 3 },
    { name: 'Child Protection & Family Strengthening', status: 'active', applicants: 2 },
    { name: 'Mental Health Support', status: 'active', applicants: 1 },
    { name: 'Community Outreach & Development', status: 'inactive', applicants: 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-2">Dashboard Overview</h1>
        <p className="text-[#6B5D4F]">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl text-[#2C2417] mb-2">{stat.value}</p>
            <p className="text-sm text-[#6B5D4F] mb-1">{stat.label}</p>
            <p className="text-xs text-[#8B5A3C]">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
          <h2 className="text-xl text-[#2C2417] mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {recentApplications.map((app, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-[#8B5A3C]/10 last:border-0">
                <div>
                  <p className="text-[#2C2417]">{app.name}</p>
                  <p className="text-sm text-[#6B5D4F]">{app.project}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                    app.status === 'approved'
                      ? 'bg-[#5A7D5C]/10 text-[#5A7D5C]'
                      : 'bg-[#D4A574]/10 text-[#8B5A3C]'
                  }`}>
                    {app.status === 'approved' ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <FileText className="w-3 h-3" />
                    )}
                    {app.status}
                  </div>
                  <p className="text-xs text-[#6B5D4F] mt-1">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Status */}
        <div className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
          <h2 className="text-xl text-[#2C2417] mb-4">Project Status</h2>
          <div className="space-y-3">
            {projectStatus.map((project, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    project.status === 'active' ? 'bg-[#5A7D5C]' : 'bg-[#C45A3C]'
                  }`}></div>
                  <p className="text-sm text-[#2C2417] truncate">{project.name}</p>
                </div>
                <div className="text-sm text-[#6B5D4F] ml-2">
                  {project.applicants} {project.applicants === 1 ? 'applicant' : 'applicants'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
