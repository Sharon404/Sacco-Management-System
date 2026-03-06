import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  UserCog,
  Shield,
  Users,
  AlertCircle,
  Plus,
  Edit,
  Trash2,
  X,
  Check,
  Search,
  Filter,
  MoreVertical,
  Key,
  Mail,
  User,
} from 'lucide-react';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  joinDate: string;
  permissions: string[];
}

const users: UserData[] = [
  {
    id: 'USR-001',
    name: 'John Administrator',
    email: 'john.admin@sacco.com',
    role: 'Super Administrator',
    status: 'active',
    lastLogin: '2026-02-13 09:30 AM',
    joinDate: '2024-01-15',
    permissions: ['all'],
  },
  {
    id: 'USR-002',
    name: 'Sarah Manager',
    email: 'sarah.manager@sacco.com',
    role: 'Manager',
    status: 'active',
    lastLogin: '2026-02-13 08:45 AM',
    joinDate: '2024-02-20',
    permissions: ['view_members', 'manage_loans', 'approve_payments', 'view_reports'],
  },
  {
    id: 'USR-003',
    name: 'Michael Officer',
    email: 'michael.officer@sacco.com',
    role: 'Loan Officer',
    status: 'active',
    lastLogin: '2026-02-13 09:15 AM',
    joinDate: '2024-03-10',
    permissions: ['view_members', 'manage_loans', 'view_reports'],
  },
  {
    id: 'USR-004',
    name: 'Emily Accountant',
    email: 'emily.accountant@sacco.com',
    role: 'Accountant',
    status: 'active',
    lastLogin: '2026-02-13 07:30 AM',
    joinDate: '2024-04-05',
    permissions: ['view_members', 'manage_payments', 'view_reports', 'manage_contributions'],
  },
  {
    id: 'USR-005',
    name: 'David Support',
    email: 'david.support@sacco.com',
    role: 'Support Agent',
    status: 'active',
    lastLogin: '2026-02-12 05:20 PM',
    joinDate: '2024-06-15',
    permissions: ['view_members', 'view_reports'],
  },
  {
    id: 'USR-006',
    name: 'Lisa Clerk',
    email: 'lisa.clerk@sacco.com',
    role: 'Data Entry Clerk',
    status: 'inactive',
    lastLogin: '2026-02-10 03:15 PM',
    joinDate: '2024-07-22',
    permissions: ['view_members', 'manage_contributions'],
  },
  {
    id: 'USR-007',
    name: 'Robert Auditor',
    email: 'robert.auditor@sacco.com',
    role: 'Auditor',
    status: 'active',
    lastLogin: '2026-02-13 06:00 AM',
    joinDate: '2024-08-30',
    permissions: ['view_members', 'view_reports', 'view_loans', 'view_payments'],
  },
  {
    id: 'USR-008',
    name: 'Jennifer Analyst',
    email: 'jennifer.analyst@sacco.com',
    role: 'Data Analyst',
    status: 'suspended',
    lastLogin: '2026-02-08 11:45 AM',
    joinDate: '2024-09-12',
    permissions: ['view_reports'],
  },
];

const roles = [
  {
    name: 'Super Administrator',
    description: 'Full system access with all permissions',
    color: 'bg-purple-100 text-purple-700',
    userCount: 1,
  },
  {
    name: 'Manager',
    description: 'Manage operations and approve transactions',
    color: 'bg-blue-100 text-blue-700',
    userCount: 1,
  },
  {
    name: 'Loan Officer',
    description: 'Process and manage loan applications',
    color: 'bg-green-100 text-green-700',
    userCount: 1,
  },
  {
    name: 'Accountant',
    description: 'Handle financial transactions and records',
    color: 'bg-orange-100 text-orange-700',
    userCount: 1,
  },
  {
    name: 'Support Agent',
    description: 'Assist members and handle inquiries',
    color: 'bg-teal-100 text-teal-700',
    userCount: 1,
  },
  {
    name: 'Data Entry Clerk',
    description: 'Input and maintain member data',
    color: 'bg-pink-100 text-pink-700',
    userCount: 1,
  },
  {
    name: 'Auditor',
    description: 'Review and audit system activities',
    color: 'bg-indigo-100 text-indigo-700',
    userCount: 1,
  },
  {
    name: 'Data Analyst',
    description: 'Analyze reports and generate insights',
    color: 'bg-cyan-100 text-cyan-700',
    userCount: 1,
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-gray-100 text-gray-700',
  suspended: 'bg-red-100 text-red-700',
};

const permissions = [
  { id: 'view_members', label: 'View Members' },
  { id: 'manage_members', label: 'Manage Members' },
  { id: 'view_loans', label: 'View Loans' },
  { id: 'manage_loans', label: 'Manage Loans' },
  { id: 'approve_loans', label: 'Approve Loans' },
  { id: 'view_payments', label: 'View Payments' },
  { id: 'manage_payments', label: 'Manage Payments' },
  { id: 'approve_payments', label: 'Approve Payments' },
  { id: 'view_reports', label: 'View Reports' },
  { id: 'generate_reports', label: 'Generate Reports' },
  { id: 'manage_contributions', label: 'Manage Contributions' },
  { id: 'manage_welfare', label: 'Manage Welfare' },
  { id: 'manage_users', label: 'Manage Users' },
  { id: 'system_settings', label: 'System Settings' },
];

export function UsersPage() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleEditRole = (user: UserData) => {
    setSelectedUser(user);
    setShowRoleModal(true);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Users & Roles Management</h1>
        <p className="text-gray-600 mt-1">Manage system users, roles, and permissions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{users.length}</p>
              <p className="text-sm text-blue-600 mt-2">Active system users</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Users</p>
              <p className="text-2xl font-bold text-green-600">
                {users.filter(u => u.status === 'active').length}
              </p>
              <p className="text-sm text-gray-500 mt-2">Currently online</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <UserCog className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Roles</p>
              <p className="text-2xl font-bold text-purple-600">{roles.length}</p>
              <p className="text-sm text-gray-500 mt-2">Defined roles</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Suspended</p>
              <p className="text-2xl font-bold text-red-600">
                {users.filter(u => u.status === 'suspended').length}
              </p>
              <p className="text-sm text-gray-500 mt-2">Requires action</p>
            </div>
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            {/* Filters and Search */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">System Users</h2>
                  <p className="text-sm text-gray-500 mt-1">Showing {filteredUsers.length} users</p>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setShowAddUser(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>

              {/* Filter Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={filterRole} onValueChange={setFilterRole}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    {roles.map(role => (
                      <SelectItem key={role.name} value={role.name}>{role.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => {
                  const roleData = roles.find(r => r.name === user.role);
                  return (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={roleData?.color || 'bg-gray-100 text-gray-700'} 
                          variant="secondary"
                        >
                          <Shield className="w-3 h-3 mr-1" />
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusColors[user.status]} variant="secondary">
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm text-gray-900">{user.lastLogin}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditRole(user)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            {filteredUsers.length === 0 && (
              <div className="py-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No users found matching your filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Roles Sidebar */}
        <div className="space-y-6">
          <Card className="bg-white border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-400" />
              Available Roles
            </h3>
            <div className="space-y-3">
              {roles.map((role) => (
                <div key={role.name} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={role.color} variant="secondary">
                      {role.name}
                    </Badge>
                    <span className="text-xs text-gray-500">{role.userCount} user{role.userCount !== 1 ? 's' : ''}</span>
                  </div>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-6">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Security Notice
            </h3>
            <p className="text-sm text-blue-800 mb-4">
              Always review user permissions carefully before granting access. Super Administrator role has full system access.
            </p>
            <Button variant="outline" size="sm" className="w-full border-blue-300 text-blue-700 hover:bg-blue-200">
              View Security Logs
            </Button>
          </Card>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Add New User</h2>
                <p className="text-sm text-gray-500 mt-1">Create a new system user account</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setShowAddUser(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@sacco.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="role">Role *</Label>
                <Select>
                  <SelectTrigger id="role" className="mt-1">
                    <SelectValue placeholder="Select user role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map(role => (
                      <SelectItem key={role.name} value={role.name}>{role.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="password">Temporary Password *</Label>
                <div className="relative mt-1">
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">User will be required to change password on first login</p>
              </div>

              <div>
                <Label className="mb-3 block">Permissions</Label>
                <div className="border border-gray-200 rounded-lg p-4 max-h-48 overflow-y-auto">
                  <div className="grid grid-cols-2 gap-3">
                    {permissions.map((permission) => (
                      <label key={permission.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700">{permission.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Important</p>
                    <p className="text-sm text-blue-700 mt-1">
                      The user will receive an email with login credentials and must change their password on first login.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create User Account
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowAddUser(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Role Assignment Modal */}
      {showRoleModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Edit User Role & Permissions</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedUser.name} - {selectedUser.email}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => {
                  setShowRoleModal(false);
                  setSelectedUser(null);
                }}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Current Role */}
              <div>
                <Label htmlFor="currentRole">Current Role</Label>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <Badge 
                    className={roles.find(r => r.name === selectedUser.role)?.color || 'bg-gray-100 text-gray-700'} 
                    variant="secondary"
                  >
                    <Shield className="w-3 h-3 mr-1" />
                    {selectedUser.role}
                  </Badge>
                </div>
              </div>

              {/* Change Role */}
              <div>
                <Label htmlFor="newRole">Change Role To</Label>
                <Select defaultValue={selectedUser.role}>
                  <SelectTrigger id="newRole" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map(role => (
                      <SelectItem key={role.name} value={role.name}>{role.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* User Status */}
              <div>
                <Label htmlFor="userStatus">User Status</Label>
                <Select defaultValue={selectedUser.status}>
                  <SelectTrigger id="userStatus" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Permissions */}
              <div>
                <Label className="mb-3 block">Custom Permissions</Label>
                <div className="border border-gray-200 rounded-lg p-4 max-h-64 overflow-y-auto">
                  <div className="space-y-3">
                    {permissions.map((permission) => (
                      <label key={permission.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300" 
                          defaultChecked={selectedUser.permissions.includes(permission.id) || selectedUser.permissions.includes('all')}
                          disabled={selectedUser.permissions.includes('all')}
                        />
                        <span className="text-sm text-gray-700">{permission.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Security Actions */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">Security Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Key className="w-4 h-4 mr-2" />
                    Force Password Reset
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Verification Email
                  </Button>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-900">Role Change Warning</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Changing a user's role will immediately update their permissions and access levels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Check className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setShowRoleModal(false);
                    setSelectedUser(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
