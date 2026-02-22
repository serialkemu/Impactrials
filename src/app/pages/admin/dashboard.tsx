import { AdminLayout } from '../../components/admin/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Briefcase, Plane, Users, Eye, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

// Mock data
const stats = [
  {
    title: 'Total Projects',
    value: '7',
    icon: Briefcase,
    change: '+2 this month',
    color: 'text-[var(--deep-green)]'
  },
  {
    title: 'Total Experiences',
    value: '13',
    icon: Plane,
    change: '+3 this month',
    color: 'text-[var(--clay)]'
  },
  {
    title: 'Applications',
    value: '24',
    icon: Users,
    change: '+8 this week',
    color: 'text-[var(--sunset-orange)]'
  },
  {
    title: 'Active Listings',
    value: '18',
    icon: CheckCircle2,
    change: '90% of total',
    color: 'text-[var(--olive)]'
  }
];

const recentApplications = [
  { id: 1, name: 'Sarah Johnson', project: 'Education Support', status: 'Pending', date: '2026-02-14' },
  { id: 2, name: 'Michael Chen', project: 'Agriculture', status: 'Approved', date: '2026-02-13' },
  { id: 3, name: 'Emma Wilson', project: 'Women Empowerment', status: 'Pending', date: '2026-02-13' },
  { id: 4, name: 'David Brown', project: 'Mental Health', status: 'Under Review', date: '2026-02-12' },
  { id: 5, name: 'Lisa Anderson', project: 'Child Protection', status: 'Approved', date: '2026-02-11' },
];

const quickActions = [
  { label: 'Add New Project', path: '/admin/projects/new', icon: Briefcase },
  { label: 'Add New Experience', path: '/admin/experiences/new', icon: Plane },
  { label: 'Review Applications', path: '/admin/applications', icon: Users },
  { label: 'Upload Media', path: '/admin/media', icon: Eye },
];

export function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your platform.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <span className="text-xs text-gray-500">{stat.change}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <a
                    key={index}
                    href={action.path}
                    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[var(--deep-green)]" />
                    <span className="font-medium">{action.label}</span>
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-gray-900">{app.name}</p>
                      <p className="text-sm text-gray-600">{app.project}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        app.status === 'Approved' ? 'bg-green-100 text-green-700' :
                        app.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {app.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Platform Status */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Active Projects</span>
                  </div>
                  <span className="font-semibold">7 of 7</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Active Experiences</span>
                  </div>
                  <span className="font-semibold">11 of 13</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Pending Reviews</span>
                  </div>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">This Month's Applications</span>
                  </div>
                  <span className="font-semibold">24</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}