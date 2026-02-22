import { useState } from 'react';
import { AdminLayout } from '../../components/admin/admin-layout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Switch } from '../../components/ui/switch';
import { Plus, Search, Edit, Trash2, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

// Mock project data
const initialProjects = [
  {
    id: 1,
    title: 'Education Support & Child Mentorship',
    type: 'Education',
    locations: ['Nairobi', 'Machakos'],
    active: true,
    applications: 12
  },
  {
    id: 2,
    title: 'Sustainable Agriculture & Food Security',
    type: 'Agriculture',
    locations: ['Machakos', 'Busia', 'Kilifi'],
    active: true,
    applications: 8
  },
  {
    id: 3,
    title: 'Women Empowerment & Livelihoods',
    type: 'Empowerment',
    locations: ['Nairobi'],
    active: true,
    applications: 15
  },
  {
    id: 4,
    title: 'Sexual & Reproductive Health & Rights Education',
    type: 'Health',
    locations: ['Machakos', 'Busia', 'Kilifi'],
    active: true,
    applications: 6
  },
  {
    id: 5,
    title: 'Child Protection & Family Strengthening',
    type: 'Child Protection',
    locations: ['Machakos', 'Busia'],
    active: true,
    applications: 4
  },
  {
    id: 6,
    title: 'Mental Health, Wellness & Psychosocial Support',
    type: 'Mental Health',
    locations: ['Machakos', 'Nairobi'],
    active: true,
    applications: 9
  },
  {
    id: 7,
    title: 'Community Outreach & Development',
    type: 'Community Development',
    locations: ['Nairobi', 'Busia', 'Kilifi'],
    active: false,
    applications: 2
  },
];

export function AdminProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || project.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleToggleActive = (id: number) => {
    setProjects(projects.map(p => 
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setIsEditDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Volunteer Projects</h1>
            <p className="text-gray-600 mt-2">Manage your volunteer projects and programs</p>
          </div>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90"
                onClick={() => setEditingProject(null)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </DialogTitle>
              </DialogHeader>
              <ProjectForm 
                project={editingProject} 
                onClose={() => setIsEditDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Agriculture">Agriculture</SelectItem>
                  <SelectItem value="Empowerment">Empowerment</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Child Protection">Child Protection</SelectItem>
                  <SelectItem value="Mental Health">Mental Health</SelectItem>
                  <SelectItem value="Community Development">Community Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Locations</TableHead>
                    <TableHead className="text-center">Applications</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-[var(--cream)] text-[var(--deep-green)]">
                          {project.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin size={14} />
                          {project.locations.join(', ')}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-semibold">{project.applications}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <Switch
                          checked={project.active}
                          onCheckedChange={() => handleToggleActive(project.id)}
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEdit(project)}
                          >
                            <Edit size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(project.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {filteredProjects.length === 0 && (
              <div className="p-12 text-center text-gray-500">
                No projects found matching your criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

function ProjectForm({ project, onClose }: { project: any; onClose: () => void }) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    type: project?.type || '',
    description: project?.description || '',
    locations: project?.locations?.join(', ') || '',
    skills: project?.skills || '',
    duration: project?.duration || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, save to backend
    console.log('Saving project:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Project Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="type">Project Type *</Label>
        <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Education">Education</SelectItem>
            <SelectItem value="Agriculture">Agriculture</SelectItem>
            <SelectItem value="Empowerment">Empowerment</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
            <SelectItem value="Child Protection">Child Protection</SelectItem>
            <SelectItem value="Mental Health">Mental Health</SelectItem>
            <SelectItem value="Community Development">Community Development</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>

      <div>
        <Label htmlFor="locations">Locations (comma-separated) *</Label>
        <Input
          id="locations"
          value={formData.locations}
          onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
          placeholder="Nairobi, Machakos, Busia"
          required
        />
      </div>

      <div>
        <Label htmlFor="skills">Required Skills</Label>
        <Textarea
          id="skills"
          rows={3}
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="Teaching, Communication, Leadership..."
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" className="flex-1 bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90">
          {project ? 'Update Project' : 'Create Project'}
        </Button>
      </div>
    </form>
  );
}
