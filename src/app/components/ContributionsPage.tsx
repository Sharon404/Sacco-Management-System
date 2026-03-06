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
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Card } from './ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  TrendingUp,
  DollarSign,
  Plus,
  Download,
  Filter,
  Calendar,
  X,
} from 'lucide-react';

interface Transaction {
  id: string;
  memberName: string;
  memberNumber: string;
  amount: string;
  type: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  paymentMethod: string;
}

const transactions: Transaction[] = [
  {
    id: 'TXN-2026-001',
    memberName: 'Sarah Johnson',
    memberNumber: 'MEM-2024-001',
    amount: 'KES 5,000.00',
    type: 'Monthly Contribution',
    date: '2026-02-12',
    status: 'completed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TXN-2026-002',
    memberName: 'Michael Chen',
    memberNumber: 'MEM-2024-002',
    amount: 'KES 3,600.00',
    type: 'Monthly Contribution',
    date: '2026-02-11',
    status: 'completed',
    paymentMethod: 'Mobile Money',
  },
  {
    id: 'TXN-2026-003',
    memberName: 'Emily Davis',
    memberNumber: 'MEM-2024-003',
    amount: 'KES 6,400.00',
    type: 'Special Savings',
    date: '2026-02-10',
    status: 'pending',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TXN-2026-004',
    memberName: 'James Wilson',
    memberNumber: 'MEM-2023-156',
    amount: 'KES 3,000.00',
    type: 'Monthly Contribution',
    date: '2026-02-10',
    status: 'completed',
    paymentMethod: 'Cash',
  },
  {
    id: 'TXN-2026-005',
    memberName: 'Olivia Brown',
    memberNumber: 'MEM-2024-004',
    amount: 'KES 4,400.00',
    type: 'Monthly Contribution',
    date: '2026-02-09',
    status: 'completed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TXN-2026-006',
    memberName: 'David Martinez',
    memberNumber: 'MEM-2023-178',
    amount: 'KES 8,000.00',
    type: 'Fixed Deposit',
    date: '2026-02-08',
    status: 'completed',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'TXN-2026-007',
    memberName: 'Sophia Taylor',
    memberNumber: 'MEM-2024-005',
    amount: 'KES 2,400.00',
    type: 'Monthly Contribution',
    date: '2026-02-07',
    status: 'failed',
    paymentMethod: 'Mobile Money',
  },
  {
    id: 'TXN-2026-008',
    memberName: 'William Anderson',
    memberNumber: 'MEM-2023-145',
    amount: 'KES 5,600.00',
    type: 'Monthly Contribution',
    date: '2026-02-06',
    status: 'completed',
    paymentMethod: 'Bank Transfer',
  },
];

const monthlyData = [
  { month: 'Aug', amount: 45000 },
  { month: 'Sep', amount: 52000 },
  { month: 'Oct', amount: 48000 },
  { month: 'Nov', amount: 61000 },
  { month: 'Dec', amount: 55000 },
  { month: 'Jan', amount: 68000 },
  { month: 'Feb', amount: 72000 },
];

const statusColors = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  failed: 'bg-red-100 text-red-700',
};

export function ContributionsPage() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Contributions & Savings</h1>
        <p className="text-gray-600 mt-1">Manage member contributions and track savings</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Savings</p>
              <p className="text-2xl font-bold text-gray-900">KES 1,245,890</p>
              <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +8.2% this month
              </p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-gray-900">KES 72,000</p>
              <p className="text-sm text-gray-500 mt-2">285 contributions</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Contribution</p>
              <p className="text-2xl font-bold text-gray-900">KES 2,340</p>
              <p className="text-sm text-gray-500 mt-2">Per member</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Contributors</p>
              <p className="text-2xl font-bold text-gray-900">2,698</p>
              <p className="text-sm text-green-600 mt-2">94.8% of members</p>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Monthly Contributions Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Monthly Contributions</h2>
              <p className="text-sm text-gray-500 mt-1">Last 7 months overview</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
                tickFormatter={(value) => `KES ${value / 1000}k`}
              />
              <Tooltip
                formatter={(value: number) => `KES ${value.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Member Balance Card */}
        <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-6">Quick Member Balance</h3>
          <div className="space-y-4">
            <div>
              <Label className="text-blue-100 text-sm">Member Number</Label>
              <Input
                placeholder="Enter member number"
                className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
              Check Balance
            </Button>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-100 text-sm">Total Deposits</span>
                <span className="font-semibold">KES 45,230.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100 text-sm">This Month</span>
                <span className="font-semibold">KES 2,500.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100 text-sm">Last Contribution</span>
                <span className="font-semibold">Feb 12, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
              <p className="text-sm text-gray-500 mt-1">
                Showing {transactions.length} recent contributions
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                size="sm"
                onClick={() => setShowAddForm(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Contribution
              </Button>
            </div>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Member</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-mono text-sm text-gray-600">
                  {transaction.id}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.memberName}</p>
                    <p className="text-sm text-gray-500">{transaction.memberNumber}</p>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600">{transaction.type}</TableCell>
                <TableCell className="text-right font-semibold text-gray-900">
                  {transaction.amount}
                </TableCell>
                <TableCell className="text-gray-600">{transaction.paymentMethod}</TableCell>
                <TableCell className="text-gray-600">{transaction.date}</TableCell>
                <TableCell>
                  <Badge className={statusColors[transaction.status]} variant="secondary">
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-medium">1-8</span> of{' '}
            <span className="font-medium">432</span> transactions
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
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Add Contribution Side Panel */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Add New Contribution</h2>
                <p className="text-sm text-gray-500 mt-1">Record a member contribution</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setShowAddForm(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <Label htmlFor="member">Member *</Label>
                <Select>
                  <SelectTrigger id="member" className="mt-1">
                    <SelectValue placeholder="Select member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mem1">Sarah Johnson - MEM-2024-001</SelectItem>
                    <SelectItem value="mem2">Michael Chen - MEM-2024-002</SelectItem>
                    <SelectItem value="mem3">Emily Davis - MEM-2024-003</SelectItem>
                    <SelectItem value="mem4">James Wilson - MEM-2023-156</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Contribution Type *</Label>
                <Select>
                  <SelectTrigger id="type" className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly Contribution</SelectItem>
                    <SelectItem value="special">Special Savings</SelectItem>
                    <SelectItem value="fixed">Fixed Deposit</SelectItem>
                    <SelectItem value="voluntary">Voluntary Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount">Amount *</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="payment">Payment Method *</Label>
                <Select>
                  <SelectTrigger id="payment" className="mt-1">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="mobile">Mobile Money</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="check">Check</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Transaction Date *</Label>
                <Input
                  id="date"
                  type="date"
                  className="mt-1"
                  defaultValue="2026-02-12"
                />
              </div>

              <div>
                <Label htmlFor="reference">Reference Number</Label>
                <Input
                  id="reference"
                  type="text"
                  placeholder="TXN-2026-XXX"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Add any additional notes..."
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Contribution
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowAddForm(false)}
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
