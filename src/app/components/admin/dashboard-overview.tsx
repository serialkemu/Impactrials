import { Users, Plane, FileText, TrendingUp, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import { useState } from 'react';

export function DashboardOverview() {
  const [incomeRange, setIncomeRange] = useState<'6m' | '12m' | 'all'>('12m');

  const monthlyIncomeData = [
    { month: 'Jan 2025', volunteer: 3200, travel: 5800, total: 9000 },
    { month: 'Feb 2025', volunteer: 2800, travel: 4200, total: 7000 },
    { month: 'Mar 2025', volunteer: 4100, travel: 6500, total: 10600 },
    { month: 'Apr 2025', volunteer: 3600, travel: 7200, total: 10800 },
    { month: 'May 2025', volunteer: 4500, travel: 8100, total: 12600 },
    { month: 'Jun 2025', volunteer: 5200, travel: 9400, total: 14600 },
    { month: 'Jul 2025', volunteer: 6100, travel: 11200, total: 17300 },
    { month: 'Aug 2025', volunteer: 5800, travel: 10800, total: 16600 },
    { month: 'Sep 2025', volunteer: 4900, travel: 8900, total: 13800 },
    { month: 'Oct 2025', volunteer: 5400, travel: 9600, total: 15000 },
    { month: 'Nov 2025', volunteer: 4700, travel: 7800, total: 12500 },
    { month: 'Dec 2025', volunteer: 3900, travel: 6400, total: 10300 },
    { month: 'Jan 2026', volunteer: 4200, travel: 7100, total: 11300 },
    { month: 'Feb 2026', volunteer: 5100, travel: 8500, total: 13600 },
    { month: 'Mar 2026', volunteer: 5800, travel: 9800, total: 15600 },
  ];

  const getFilteredData = () => {
    if (incomeRange === '6m') return monthlyIncomeData.slice(-6);
    if (incomeRange === '12m') return monthlyIncomeData.slice(-12);
    return monthlyIncomeData;
  };

  const filteredData = getFilteredData();
  const totalIncome = filteredData.reduce((sum, d) => sum + d.total, 0);
  const volunteerIncome = filteredData.reduce((sum, d) => sum + d.volunteer, 0);
  const travelIncome = filteredData.reduce((sum, d) => sum + d.travel, 0);
  const prevPeriodData = incomeRange === '6m'
    ? monthlyIncomeData.slice(-12, -6)
    : incomeRange === '12m'
    ? monthlyIncomeData.slice(0, 3)
    : monthlyIncomeData.slice(0, 3);
  const prevTotal = prevPeriodData.reduce((sum, d) => sum + d.total, 0) || 1;
  const currentAvg = totalIncome / filteredData.length;
  const prevAvg = prevTotal / prevPeriodData.length;
  const growthPct = ((currentAvg - prevAvg) / prevAvg * 100).toFixed(1);

  const stats = [
    {
      label: 'Total Projects',
      value: '7',
      icon: Users,
      color: 'bg-[#086770]',
      change: '+2 this month',
    },
    {
      label: 'Travel Experiences',
      value: '12',
      icon: Plane,
      color: 'bg-[#739F45]',
      change: '+3 this month',
    },
    {
      label: 'Applications',
      value: '24',
      icon: FileText,
      color: 'bg-[#C25E3E]',
      change: '+8 this week',
    },
    {
      label: 'Total Revenue',
      value: `$${(totalIncome / 1000).toFixed(1)}k`,
      icon: DollarSign,
      color: 'bg-[#4A6D3A]',
      change: `${Number(growthPct) >= 0 ? '+' : ''}${growthPct}% growth`,
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
        <p className="text-[#5a5249]">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-[#086770]/10">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl text-[#2C2417] mb-2">{stat.value}</p>
            <p className="text-sm text-[#5a5249] mb-1">{stat.label}</p>
            <p className="text-xs text-[#086770]">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Income Chart */}
      <div className="bg-white rounded-lg p-6 border border-[#086770]/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xl text-[#2C2417] mb-1">Income Overview</h2>
            <p className="text-sm text-[#5a5249]">
              Revenue from volunteer programs & travel experiences
            </p>
          </div>
          <div className="flex items-center gap-2">
            {(['6m', '12m', 'all'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setIncomeRange(range)}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  incomeRange === range
                    ? 'bg-[#086770] text-white'
                    : 'bg-[#F7F2E2] text-[#2C2417] hover:bg-[#E8D5B9]'
                }`}
              >
                {range === '6m' ? '6 Months' : range === '12m' ? '12 Months' : 'All Time'}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#F7F2E2] rounded-lg p-4">
            <p className="text-xs text-[#5a5249] mb-1">Total Revenue</p>
            <p className="text-2xl text-[#2C2417]">${totalIncome.toLocaleString()}</p>
          </div>
          <div className="bg-[#086770]/5 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#086770]"></div>
              <p className="text-xs text-[#5a5249]">Volunteer Programs</p>
            </div>
            <p className="text-2xl text-[#2C2417]">${volunteerIncome.toLocaleString()}</p>
          </div>
          <div className="bg-[#C25E3E]/5 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C25E3E]"></div>
              <p className="text-xs text-[#5a5249]">Travel Experiences</p>
            </div>
            <p className="text-2xl text-[#2C2417]">${travelIncome.toLocaleString()}</p>
          </div>
        </div>

        {/* Area Chart */}
        <div className="h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVolunteer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#086770" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#086770" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTravel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C25E3E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#C25E3E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#BDC7A1" strokeOpacity={0.5} />
              <XAxis
                dataKey="month"
                tick={{ fill: '#5a5249', fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#BDC7A1' }}
                tickFormatter={(val) => {
                  const parts = val.split(' ');
                  const month = parts[0].slice(0, 3);
                  const year = parts[1] ? "'" + parts[1].slice(2) : '';
                  return `${month} ${year}`;
                }}
              />
              <YAxis
                tick={{ fill: '#5a5249', fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#BDC7A1' }}
                tickFormatter={(val) => `$${val / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #BDC7A1',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
                formatter={(value: number, name: string) => [
                  `$${value.toLocaleString()}`,
                  name === 'volunteer' ? 'Volunteer Programs' : 'Travel Experiences',
                ]}
                labelStyle={{ color: '#2C2417' }}
              />
              <Area
                type="monotone"
                dataKey="volunteer"
                stroke="#086770"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorVolunteer)"
              />
              <Area
                type="monotone"
                dataKey="travel"
                stroke="#C25E3E"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorTravel)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white rounded-lg p-6 border border-[#086770]/10">
          <h2 className="text-xl text-[#2C2417] mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {recentApplications.map((app, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-[#086770]/10 last:border-0">
                <div>
                  <p className="text-[#2C2417]">{app.name}</p>
                  <p className="text-sm text-[#5a5249]">{app.project}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                    app.status === 'approved'
                      ? 'bg-[#739F45]/10 text-[#4A6D3A]'
                      : 'bg-[#C25E3E]/10 text-[#C25E3E]'
                  }`}>
                    {app.status === 'approved' ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <FileText className="w-3 h-3" />
                    )}
                    {app.status}
                  </div>
                  <p className="text-xs text-[#5a5249] mt-1">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Status */}
        <div className="bg-white rounded-lg p-6 border border-[#086770]/10">
          <h2 className="text-xl text-[#2C2417] mb-4">Project Status</h2>
          <div className="space-y-3">
            {projectStatus.map((project, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    project.status === 'active' ? 'bg-[#739F45]' : 'bg-[#C25E3E]'
                  }`}></div>
                  <p className="text-sm text-[#2C2417] truncate">{project.name}</p>
                </div>
                <div className="text-sm text-[#5a5249] ml-2">
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