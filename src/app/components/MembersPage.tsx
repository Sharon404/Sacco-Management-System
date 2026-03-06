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
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Search, Filter, UserPlus, MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface Member {
  id: string;
  name: string;
  memberNumber: string;
  phone: string;
  status: 'active' | 'inactive' | 'suspended';
  savingsBalance: string;
  loansBalance: string;
  joinDate: string;
}

const members: Member[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    memberNumber: 'MEM-2024-001',
    phone: '+254 712 345 678',
    status: 'active',
    savingsBalance: 'KES 90,460.00',
    loansBalance: 'KES 25,000.00',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    memberNumber: 'MEM-2024-002',
    phone: '+254 723 456 789',
    status: 'active',
    savingsBalance: 'KES 64,300.00',
    loansBalance: 'KES 16,400.00',
    joinDate: '2024-01-20',
  },
  {
    id: '3',
    name: 'Emily Davis',
    memberNumber: 'MEM-2024-003',
    phone: '+254 734 567 890',
    status: 'active',
    savingsBalance: 'KES 57,800.00',
    loansBalance: 'KES 0.00',
    joinDate: '2024-02-05',
  },
  {
    id: '4',
    name: 'James Wilson',
    memberNumber: 'MEM-2023-156',
    phone: '+254 745 678 901',
    status: 'inactive',
    savingsBalance: 'KES 30,840.00',
    loansBalance: 'KES 10,200.00',
    joinDate: '2023-11-10',
  },
  {
    id: '5',
    name: 'Olivia Brown',
    memberNumber: 'MEM-2024-004',
    phone: '+254 756 789 012',
    status: 'active',
    savingsBalance: 'KES 105,560.00',
    loansBalance: 'KES 37,800.00',
    joinDate: '2024-02-12',
  },
  {
    id: '6',
    name: 'David Martinez',
    memberNumber: 'MEM-2023-178',
    phone: '+254 767 890 123',
    status: 'active',
    savingsBalance: 'KES 82,700.00',
    loansBalance: 'KES 44,800.00',
    joinDate: '2023-12-08',
  },
  {
    id: '7',
    name: 'Sophia Taylor',
    memberNumber: 'MEM-2024-005',
    phone: '+254 778 901 234',
    status: 'suspended',
    savingsBalance: 'KES 16,400.00',
    loansBalance: 'KES 31,200.00',
    joinDate: '2024-01-28',
  },
  {
    id: '8',
    name: 'William Anderson',
    memberNumber: 'MEM-2023-145',
    phone: '+254 789 012 345',
    status: 'active',
    savingsBalance: 'KES 73,840.00',
    loansBalance: 'KES 19,600.00',
    joinDate: '2023-10-15',
  },
  {
    id: '9',
    name: 'Isabella Thomas',
    memberNumber: 'MEM-2024-006',
    phone: '+254 701 234 567',
    status: 'active',
    savingsBalance: 'KES 59,080.00',
    loansBalance: 'KES 0.00',
    joinDate: '2024-02-01',
  },
  {
    id: '10',
    name: 'Ethan Garcia',
    memberNumber: 'MEM-2023-189',
    phone: '+254 710 234 567',
    status: 'active',
    savingsBalance: 'KES 97,340.00',
    loansBalance: 'KES 26,400.00',
    joinDate: '2023-12-20',
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-700',
  inactive: 'bg-gray-100 text-gray-700',
  suspended: 'bg-red-100 text-red-700',
};

export function MembersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [balanceFilter, setBalanceFilter] = useState('all');

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Member Management</h1>
        <p className="text-gray-600 mt-1">Manage and monitor all SACCO members</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Members</p>
          <p className="text-2xl font-bold text-gray-900">2,847</p>
          <p className="text-xs text-green-600 mt-2">+127 this month</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Active Members</p>
          <p className="text-2xl font-bold text-green-600">2,698</p>
          <p className="text-xs text-gray-500 mt-2">94.8% of total</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">New This Month</p>
          <p className="text-2xl font-bold text-blue-600">127</p>
          <p className="text-xs text-gray-500 mt-2">+15% growth</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Suspended</p>
          <p className="text-2xl font-bold text-red-600">18</p>
          <p className="text-xs text-gray-500 mt-2">0.6% of total</p>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, member number, or phone..."
                className="pl-10 bg-gray-50 border-gray-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>

            <Select value={balanceFilter} onValueChange={setBalanceFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Balance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Balances</SelectItem>
                <SelectItem value="high">High Savings (&gt;KES 40k)</SelectItem>
                <SelectItem value="medium">Medium Savings (KES 20k-40k)</SelectItem>
                <SelectItem value="low">Low Savings (&lt;KES 20k)</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">All Members</h2>
              <p className="text-sm text-gray-500 mt-1">
                Showing {members.length} of 2,847 members
              </p>
            </div>
            <Button variant="outline" size="sm">
              Export List
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Member Number</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Savings Balance</TableHead>
              <TableHead className="text-right">Loans Balance</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-500">Joined {member.joinDate}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm text-gray-600">
                  {member.memberNumber}
                </TableCell>
                <TableCell className="text-gray-600">{member.phone}</TableCell>
                <TableCell>
                  <Badge className={statusColors[member.status]} variant="secondary">
                    {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-semibold text-gray-900">
                  {member.savingsBalance}
                </TableCell>
                <TableCell className="text-right font-semibold text-gray-900">
                  {member.loansBalance}
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="w-4 h-4 text-blue-600" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Member</DropdownMenuItem>
                        <DropdownMenuItem>View Transactions</DropdownMenuItem>
                        <DropdownMenuItem>Suspend Member</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">1-10</span> of{' '}
            <span className="font-medium">2,847</span> results
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-200">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              ...
            </Button>
            <Button variant="outline" size="sm">
              285
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
