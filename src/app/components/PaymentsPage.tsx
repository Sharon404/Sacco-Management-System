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
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Plus,
  Download,
  Search,
  Filter,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Calendar,
  X,
} from 'lucide-react';

interface Payment {
  id: string;
  date: string;
  time: string;
  memberName: string;
  memberNumber: string;
  paymentType: string;
  paymentMethod: string;
  amount: string;
  referenceNumber: string;
  status: 'completed' | 'pending' | 'failed';
}

const payments: Payment[] = [
  {
    id: 'PAY-2026-5678',
    date: '2026-02-13',
    time: '09:15 AM',
    memberName: 'Sarah Johnson',
    memberNumber: 'MEM-2024-001',
    paymentType: 'Savings Contribution',
    paymentMethod: 'Mobile Money',
    amount: 'KES 1,000.00',
    referenceNumber: 'MM-45678901234',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5677',
    date: '2026-02-13',
    time: '08:45 AM',
    memberName: 'Michael Chen',
    memberNumber: 'MEM-2024-002',
    paymentType: 'Loan Repayment',
    paymentMethod: 'Bank Transfer',
    amount: 'KES 2,400.00',
    referenceNumber: 'BT-78945612301',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5676',
    date: '2026-02-13',
    time: '08:30 AM',
    memberName: 'Emily Davis',
    memberNumber: 'MEM-2024-003',
    paymentType: 'Welfare Contribution',
    paymentMethod: 'Cash',
    amount: 'KES 100.00',
    referenceNumber: 'CASH-00234',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5675',
    date: '2026-02-13',
    time: '07:50 AM',
    memberName: 'James Wilson',
    memberNumber: 'MEM-2023-156',
    paymentType: 'Loan Repayment',
    paymentMethod: 'Mobile Money',
    amount: 'KES 1,874.00',
    referenceNumber: 'MM-45678901189',
    status: 'failed',
  },
  {
    id: 'PAY-2026-5674',
    date: '2026-02-12',
    time: '04:20 PM',
    memberName: 'Olivia Brown',
    memberNumber: 'MEM-2024-004',
    paymentType: 'Savings Contribution',
    paymentMethod: 'Bank Transfer',
    amount: 'KES 4,000.00',
    referenceNumber: 'BT-78945612289',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5673',
    date: '2026-02-12',
    time: '03:15 PM',
    memberName: 'David Martinez',
    memberNumber: 'MEM-2023-178',
    paymentType: 'Loan Repayment',
    paymentMethod: 'Card Payment',
    amount: 'KES 5,190.00',
    referenceNumber: 'CARD-123456789',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5672',
    date: '2026-02-12',
    time: '02:30 PM',
    memberName: 'Isabella Thomas',
    memberNumber: 'MEM-2024-006',
    paymentType: 'Savings Contribution',
    paymentMethod: 'Mobile Money',
    amount: 'KES 1,500.00',
    referenceNumber: 'MM-45678901145',
    status: 'pending',
  },
  {
    id: 'PAY-2026-5671',
    date: '2026-02-12',
    time: '01:45 PM',
    memberName: 'Ethan Garcia',
    memberNumber: 'MEM-2023-189',
    paymentType: 'Welfare Contribution',
    paymentMethod: 'Bank Transfer',
    amount: 'KES 60.00',
    referenceNumber: 'BT-78945612267',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5670',
    date: '2026-02-12',
    time: '12:30 PM',
    memberName: 'Sophia Anderson',
    memberNumber: 'MEM-2024-008',
    paymentType: 'Loan Repayment',
    paymentMethod: 'Cash',
    amount: 'KES 1,700.00',
    referenceNumber: 'CASH-00231',
    status: 'completed',
  },
  {
    id: 'PAY-2026-5669',
    date: '2026-02-12',
    time: '11:15 AM',
    memberName: 'Liam Robinson',
    memberNumber: 'MEM-2023-145',
    paymentType: 'Savings Contribution',
    paymentMethod: 'Mobile Money',
    amount: 'KES 3,000.00',
    referenceNumber: 'MM-45678901098',
    status: 'completed',
  },
];

const statusColors = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  failed: 'bg-red-100 text-red-700',
};

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  failed: XCircle,
};

const paymentMethodIcons = {
  'Mobile Money': Smartphone,
  'Bank Transfer': Building2,
  'Card Payment': CreditCard,
  'Cash': Wallet,
};

export function PaymentsPage() {
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDate, setFilterDate] = useState('today');
  const [filterPaymentType, setFilterPaymentType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Calculate stats
  const todayPayments = payments.filter(p => p.date === '2026-02-13');
  const todayTotal = todayPayments.reduce((sum, p) => sum + parseFloat(p.amount.replace(/[$,]/g, '')), 0);
  const failedPayments = payments.filter(p => p.status === 'failed').length;
  const monthlyTotal = payments.reduce((sum, p) => sum + parseFloat(p.amount.replace(/[$,]/g, '')), 0);

  // Filter payments
  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.memberNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = filterDate === 'all' || 
                       (filterDate === 'today' && payment.date === '2026-02-13') ||
                       (filterDate === 'yesterday' && payment.date === '2026-02-12');
    const matchesType = filterPaymentType === 'all' || payment.paymentType === filterPaymentType;
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
    
    return matchesSearch && matchesDate && matchesType && matchesStatus;
  });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Payments & Collections</h1>
        <p className="text-gray-600 mt-1">Track and manage all payment transactions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Today's Payments</p>
              <p className="text-2xl font-bold text-gray-900">
                ${todayTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-blue-600 mt-2">{todayPayments.length} transactions</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Monthly Total</p>
              <p className="text-2xl font-bold text-gray-900">
                ${monthlyTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-green-600 mt-2">+12.5% vs last month</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Failed Payments</p>
              <p className="text-2xl font-bold text-red-600">{failedPayments}</p>
              <p className="text-sm text-gray-500 mt-2">Requires attention</p>
            </div>
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-green-600">98.5%</p>
              <p className="text-sm text-gray-500 mt-2">This month</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Filters and Search */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Payment Transactions</h2>
              <p className="text-sm text-gray-500 mt-1">Showing {filteredPayments.length} transactions</p>
            </div>
            <div className="flex gap-3">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => setShowAddPayment(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Payment
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search member or reference..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterDate} onValueChange={setFilterDate}>
              <SelectTrigger>
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterPaymentType} onValueChange={setFilterPaymentType}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Payment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Savings Contribution">Savings Contribution</SelectItem>
                <SelectItem value="Loan Repayment">Loan Repayment</SelectItem>
                <SelectItem value="Welfare Contribution">Welfare Contribution</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date & Time</TableHead>
              <TableHead>Member</TableHead>
              <TableHead>Payment Type</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Reference Number</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayments.map((payment) => {
              const StatusIcon = statusIcons[payment.status];
              const MethodIcon = paymentMethodIcons[payment.paymentMethod as keyof typeof paymentMethodIcons];
              
              return (
                <TableRow key={payment.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{payment.date}</p>
                      <p className="text-sm text-gray-500">{payment.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{payment.memberName}</p>
                      <p className="text-sm text-gray-500">{payment.memberNumber}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-gray-900">{payment.paymentType}</p>
                      <p className="text-sm text-gray-500">{payment.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {MethodIcon && <MethodIcon className="w-4 h-4 text-gray-400" />}
                      <span className="text-gray-900">{payment.paymentMethod}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-gray-900">
                    {payment.amount}
                  </TableCell>
                  <TableCell>
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                      {payment.referenceNumber}
                    </code>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={statusColors[payment.status]} variant="secondary">
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      {payment.status === 'failed' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Retry
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {filteredPayments.length === 0 && (
          <div className="py-12 text-center">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No payments found matching your filters</p>
          </div>
        )}
      </div>

      {/* Add Payment Modal */}
      {showAddPayment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Record New Payment</h2>
                <p className="text-sm text-gray-500 mt-1">Add a payment transaction manually</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setShowAddPayment(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
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
                  <Label htmlFor="paymentType">Payment Type *</Label>
                  <Select>
                    <SelectTrigger id="paymentType" className="mt-1">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings Contribution</SelectItem>
                      <SelectItem value="loan">Loan Repayment</SelectItem>
                      <SelectItem value="welfare">Welfare Contribution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                  <Label htmlFor="paymentMethod">Payment Method *</Label>
                  <Select>
                    <SelectTrigger id="paymentMethod" className="mt-1">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobile">Mobile Money</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="card">Card Payment</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Payment Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    className="mt-1"
                    defaultValue="2026-02-13"
                  />
                </div>

                <div>
                  <Label htmlFor="time">Payment Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="reference">Reference Number *</Label>
                <Input
                  id="reference"
                  type="text"
                  placeholder="e.g., MM-45678901234"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes (Optional)</Label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Add any additional notes about this payment..."
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Payment Verification</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Please verify all payment details before submitting. This action will update the member's account balance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Record Payment
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowAddPayment(false)}
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
