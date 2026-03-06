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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Wallet,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  DollarSign,
  Calendar,
  Percent,
  FileText,
  User,
  X,
  Check,
} from 'lucide-react';

interface LoanApplication {
  id: string;
  memberName: string;
  memberNumber: string;
  loanType: string;
  requestedAmount: string;
  interestRate: string;
  duration: string;
  monthlyPayment: string;
  purpose: string;
  applicationDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'disbursed' | 'active';
  collateral: string;
  guarantor1: string;
  guarantor2: string;
  memberSavings: string;
  creditScore: number;
}

const loanApplications: LoanApplication[] = [
  {
    id: 'LOAN-2026-001',
    memberName: 'Sarah Johnson',
    memberNumber: 'MEM-2024-001',
    loanType: 'Business Loan',
    requestedAmount: 'KES 100,000.00',
    interestRate: '12%',
    duration: '24 months',
    monthlyPayment: 'KES 4,708.00',
    purpose: 'Expand retail business operations',
    applicationDate: '2026-02-10',
    status: 'pending',
    collateral: 'Business Equipment & Inventory',
    guarantor1: 'Michael Chen - MEM-2024-002',
    guarantor2: 'Emily Davis - MEM-2024-003',
    memberSavings: 'KES 90,460.00',
    creditScore: 850,
  },
  {
    id: 'LOAN-2026-002',
    memberName: 'Michael Chen',
    memberNumber: 'MEM-2024-002',
    loanType: 'Emergency Loan',
    requestedAmount: 'KES 20,000.00',
    interestRate: '10%',
    duration: '12 months',
    monthlyPayment: 'KES 1,758.00',
    purpose: 'Medical emergency',
    applicationDate: '2026-02-11',
    status: 'approved',
    collateral: 'Savings Account',
    guarantor1: 'Sarah Johnson - MEM-2024-001',
    guarantor2: 'James Wilson - MEM-2023-156',
    memberSavings: 'KES 64,300.00',
    creditScore: 820,
  },
  {
    id: 'LOAN-2026-003',
    memberName: 'Emily Davis',
    memberNumber: 'MEM-2024-003',
    loanType: 'Education Loan',
    requestedAmount: 'KES 50,000.00',
    interestRate: '8%',
    duration: '36 months',
    monthlyPayment: 'KES 1,566.00',
    purpose: 'University tuition fees',
    applicationDate: '2026-02-09',
    status: 'pending',
    collateral: 'Property Title Deed',
    guarantor1: 'David Martinez - MEM-2023-178',
    guarantor2: 'Olivia Brown - MEM-2024-004',
    memberSavings: 'KES 57,800.00',
    creditScore: 780,
  },
  {
    id: 'LOAN-2026-004',
    memberName: 'James Wilson',
    memberNumber: 'MEM-2023-156',
    loanType: 'Personal Loan',
    requestedAmount: 'KES 30,000.00',
    interestRate: '14%',
    duration: '18 months',
    monthlyPayment: 'KES 1,874.00',
    purpose: 'Home renovation',
    applicationDate: '2026-02-08',
    status: 'rejected',
    collateral: 'None',
    guarantor1: 'Sarah Johnson - MEM-2024-001',
    guarantor2: 'N/A',
    memberSavings: 'KES 30,840.00',
    creditScore: 650,
  },
  {
    id: 'LOAN-2026-005',
    memberName: 'Olivia Brown',
    memberNumber: 'MEM-2024-004',
    loanType: 'Business Loan',
    requestedAmount: 'KES 150,000.00',
    interestRate: '12%',
    duration: '36 months',
    monthlyPayment: 'KES 4,984.00',
    purpose: 'Purchase delivery vehicles',
    applicationDate: '2026-02-07',
    status: 'disbursed',
    collateral: 'Vehicle Registration & Business Assets',
    guarantor1: 'Ethan Garcia - MEM-2023-189',
    guarantor2: 'Isabella Thomas - MEM-2024-006',
    memberSavings: 'KES 105,560.00',
    creditScore: 890,
  },
  {
    id: 'LOAN-2025-156',
    memberName: 'David Martinez',
    memberNumber: 'MEM-2023-178',
    loanType: 'Development Loan',
    requestedAmount: 'KES 200,000.00',
    interestRate: '11%',
    duration: '48 months',
    monthlyPayment: 'KES 5,190.00',
    purpose: 'Real estate development project',
    applicationDate: '2026-02-05',
    status: 'active',
    collateral: 'Land Title Deed',
    guarantor1: 'Sarah Johnson - MEM-2024-001',
    guarantor2: 'Michael Chen - MEM-2024-002',
    memberSavings: 'KES 82,700.00',
    creditScore: 870,
  },
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-700',
  approved: 'bg-blue-100 text-blue-700',
  rejected: 'bg-red-100 text-red-700',
  disbursed: 'bg-green-100 text-green-700',
  active: 'bg-purple-100 text-purple-700',
};

const statusIcons = {
  pending: Clock,
  approved: CheckCircle,
  rejected: XCircle,
  disbursed: DollarSign,
  active: TrendingUp,
};

export function LoansPage() {
  const [selectedLoan, setSelectedLoan] = useState<LoanApplication | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredLoans = filterStatus === 'all' 
    ? loanApplications 
    : loanApplications.filter(loan => loan.status === filterStatus);

  const totalLoans = loanApplications.length;
  const pendingLoans = loanApplications.filter(l => l.status === 'pending').length;
  const activeLoans = loanApplications.filter(l => l.status === 'active').length;
  const totalDisbursed = 'KES 1,700,000';

  const handleApprove = () => {
    // Handle approval logic
    alert('Loan approved successfully!');
    setSelectedLoan(null);
  };

  const handleReject = () => {
    // Handle rejection logic
    alert('Loan application rejected.');
    setSelectedLoan(null);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Loan Management</h1>
        <p className="text-gray-600 mt-1">Review and manage loan applications</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Applications</p>
              <p className="text-2xl font-bold text-gray-900">{totalLoans}</p>
              <p className="text-sm text-gray-500 mt-2">All time</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Review</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingLoans}</p>
              <p className="text-sm text-gray-500 mt-2">Awaiting approval</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Loans</p>
              <p className="text-2xl font-bold text-green-600">{activeLoans}</p>
              <p className="text-sm text-gray-500 mt-2">Currently repaying</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <Wallet className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Disbursed</p>
              <p className="text-2xl font-bold text-purple-600">{totalDisbursed}</p>
              <p className="text-sm text-gray-500 mt-2">This year</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Applications Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Loan Applications</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Showing {filteredLoans.length} applications
                  </p>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="disbursed">Disbursed</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Loan Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLoans.map((loan) => {
                  const StatusIcon = statusIcons[loan.status];
                  return (
                    <TableRow 
                      key={loan.id}
                      className={selectedLoan?.id === loan.id ? 'bg-blue-50' : ''}
                    >
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">{loan.memberName}</p>
                          <p className="text-sm text-gray-500">{loan.memberNumber}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-gray-900">{loan.loanType}</p>
                          <p className="text-sm text-gray-500">{loan.id}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-gray-900">
                        {loan.requestedAmount}
                      </TableCell>
                      <TableCell className="text-gray-600">{loan.duration}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[loan.status]} variant="secondary">
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedLoan(loan)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Loan Details Panel */}
        <div className="lg:col-span-1">
          {selectedLoan ? (
            <div className="bg-white rounded-lg border border-gray-200 sticky top-8">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Loan Details</h3>
                  <p className="text-sm text-gray-500">{selectedLoan.id}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setSelectedLoan(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* Member Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {selectedLoan.memberName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedLoan.memberName}</p>
                      <p className="text-sm text-gray-500">{selectedLoan.memberNumber}</p>
                    </div>
                  </div>

                  <Badge className={statusColors[selectedLoan.status]} variant="secondary">
                    {statusIcons[selectedLoan.status] && 
                      (() => {
                        const StatusIcon = statusIcons[selectedLoan.status];
                        return <StatusIcon className="w-3 h-3 mr-1" />;
                      })()
                    }
                    {selectedLoan.status.charAt(0).toUpperCase() + selectedLoan.status.slice(1)}
                  </Badge>
                </div>

                {/* Loan Amount Card */}
                <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-4 text-white">
                  <p className="text-sm text-blue-100 mb-1">Requested Amount</p>
                  <p className="text-3xl font-bold">{selectedLoan.requestedAmount}</p>
                  <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-100">Interest Rate</span>
                      <span className="font-semibold">{selectedLoan.interestRate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-100">Duration</span>
                      <span className="font-semibold">{selectedLoan.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-100">Monthly Payment</span>
                      <span className="font-semibold">{selectedLoan.monthlyPayment}</span>
                    </div>
                  </div>
                </div>

                {/* Credit Assessment */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Credit Assessment</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Credit Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                            style={{ width: `${(selectedLoan.creditScore / 900) * 100}%` }}
                          />
                        </div>
                        <span className="font-semibold text-gray-900">{selectedLoan.creditScore}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Member Savings</span>
                      <span className="font-semibold text-gray-900">{selectedLoan.memberSavings}</span>
                    </div>
                  </div>
                </div>

                {/* Loan Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Loan Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Loan Type</p>
                        <p className="text-sm font-medium text-gray-900">{selectedLoan.loanType}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Application Date</p>
                        <p className="text-sm font-medium text-gray-900">{selectedLoan.applicationDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Purpose</p>
                        <p className="text-sm font-medium text-gray-900">{selectedLoan.purpose}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collateral & Guarantors */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Security</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Collateral</p>
                      <p className="text-sm font-medium text-gray-900">{selectedLoan.collateral}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Guarantor 1</p>
                      <p className="text-sm font-medium text-gray-900">{selectedLoan.guarantor1}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Guarantor 2</p>
                      <p className="text-sm font-medium text-gray-900">{selectedLoan.guarantor2}</p>
                    </div>
                  </div>
                </div>

                {/* Repayment Schedule Preview */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Repayment Schedule</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Month 1</span>
                      <span className="font-medium text-gray-900">{selectedLoan.monthlyPayment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Month 2</span>
                      <span className="font-medium text-gray-900">{selectedLoan.monthlyPayment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Month 3</span>
                      <span className="font-medium text-gray-900">{selectedLoan.monthlyPayment}</span>
                    </div>
                    <div className="pt-2 text-center">
                      <Button variant="link" size="sm" className="text-blue-600">
                        View Full Schedule
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {selectedLoan.status === 'pending' && (
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={handleApprove}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve Loan
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-red-300 text-red-600 hover:bg-red-50"
                      onClick={handleReject}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Reject Application
                    </Button>
                  </div>
                )}

                {selectedLoan.status === 'approved' && (
                  <div className="pt-4 border-t border-gray-200">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Disburse Loan
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 h-[600px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Wallet className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Select a loan to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
