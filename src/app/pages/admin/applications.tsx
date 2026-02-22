import { useState } from 'react';
import { AdminLayout } from '../../components/admin/admin-layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Search, Eye, Mail, Phone } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';

// Mock applications data
const applications = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 555 0101',
    project: 'Education Support',
    location: 'Nairobi',
    duration: '3-4 weeks',
    startDate: '2026-03-15',
    status: 'Pending',
    submittedDate: '2026-02-14',
    motivation: 'I have always been passionate about education and want to contribute to empowering young learners...'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'mchen@email.com',
    phone: '+86 138 0000 0000',
    project: 'Sustainable Agriculture',
    location: 'Machakos',
    duration: '2 weeks',
    startDate: '2026-03-01',
    status: 'Approved',
    submittedDate: '2026-02-13',
    motivation: 'As an agricultural science student, I am eager to learn sustainable farming practices...'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.w@email.com',
    phone: '+44 7700 900000',
    project: 'Women Empowerment',
    location: 'Nairobi',
    duration: '1 month',
    startDate: '2026-04-01',
    status: 'Under Review',
    submittedDate: '2026-02-13',
    motivation: 'I believe in supporting women\'s economic independence and want to share my business skills...'
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'dbrown@email.com',
    phone: '+1 555 0202',
    project: 'Mental Health Support',
    location: 'Machakos',
    duration: '3 weeks',
    startDate: '2026-03-20',
    status: 'Pending',
    submittedDate: '2026-02-12',
    motivation: 'As a psychology graduate, I want to support mental health initiatives in communities...'
  },
];

export function AdminApplications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.project.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleView = (app: any) => {
    setSelectedApp(app);
    setIsViewDialogOpen(true);
  };

  const handleStatusChange = (appId: number, newStatus: string) => {
    // In real app, update backend
    console.log(`Updating application ${appId} to status: ${newStatus}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Volunteer Applications</h1>
          <p className="text-gray-600 mt-2">Review and manage volunteer applications</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Total Applications</p>
              <p className="text-3xl font-bold text-gray-900">{applications.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">
                {applications.filter(a => a.status === 'Pending').length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Under Review</p>
              <p className="text-3xl font-bold text-blue-600">
                {applications.filter(a => a.status === 'Under Review').length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-600 mb-1">Approved</p>
              <p className="text-3xl font-bold text-green-600">
                {applications.filter(a => a.status === 'Approved').length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search by name, email, or project..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Applications Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{app.name}</p>
                          <p className="text-sm text-gray-600">{app.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{app.project}</TableCell>
                      <TableCell>{app.location}</TableCell>
                      <TableCell>{app.startDate}</TableCell>
                      <TableCell>{app.duration}</TableCell>
                      <TableCell>
                        <Select 
                          value={app.status} 
                          onValueChange={(value) => handleStatusChange(app.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Under Review">Under Review</SelectItem>
                            <SelectItem value="Approved">Approved</SelectItem>
                            <SelectItem value="Rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleView(app)}
                        >
                          <Eye size={16} className="mr-2" />
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* View Application Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Application Details</DialogTitle>
            </DialogHeader>
            {selectedApp && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Full Name</p>
                    <p className="font-medium">{selectedApp.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Status</p>
                    <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                      selectedApp.status === 'Approved' ? 'bg-green-100 text-green-700' :
                      selectedApp.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      selectedApp.status === 'Under Review' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {selectedApp.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-medium flex items-center gap-2">
                      <Mail size={16} />
                      {selectedApp.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="font-medium flex items-center gap-2">
                      <Phone size={16} />
                      {selectedApp.phone}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Project</p>
                    <p className="font-medium">{selectedApp.project}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="font-medium">{selectedApp.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-medium">{selectedApp.duration}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Start Date</p>
                  <p className="font-medium">{selectedApp.startDate}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Motivation</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">{selectedApp.motivation}</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleStatusChange(selectedApp.id, 'Rejected')}
                  >
                    Reject
                  </Button>
                  <Button 
                    className="flex-1 bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90"
                    onClick={() => handleStatusChange(selectedApp.id, 'Approved')}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
