import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  PiggyBank,
  Wallet,
  Heart,
  TrendingUp,
  Calendar,
  Download,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Eye,
  EyeOff,
  RefreshCw,
  Send,
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'loan_payment' | 'welfare_contribution';
  description: string;
  amount: string;
  date: string;
  status: 'completed' | 'pending';
}

const recentTransactions: Transaction[] = [
  {
    id: 'TXN-2026-1234',
    type: 'deposit',
    description: 'Monthly Savings Contribution',
    amount: 'KES 1,000.00',
    date: '2026-02-12',
    status: 'completed',
  },
  {
    id: 'TXN-2026-1233',
    type: 'loan_payment',
    description: 'Business Loan Repayment',
    amount: 'KES 2,400.00',
    date: '2026-02-10',
    status: 'completed',
  },
  {
    id: 'TXN-2026-1232',
    type: 'welfare_contribution',
    description: 'Medical Emergency - Sarah Johnson',
    amount: 'KES 100.00',
    date: '2026-02-10',
    status: 'completed',
  },
  {
    id: 'TXN-2026-1231',
    type: 'deposit',
    description: 'Fixed Deposit',
    amount: 'KES 4,000.00',
    date: '2026-02-08',
    status: 'completed',
  },
  {
    id: 'TXN-2026-1230',
    type: 'loan_payment',
    description: 'Business Loan Repayment',
    amount: 'KES 2,400.00',
    date: '2026-02-01',
    status: 'completed',
  },
];

const upcomingPayments = [
  {
    title: 'Business Loan Payment',
    amount: 'KES 2,400.00',
    dueDate: '2026-03-10',
    daysLeft: 25,
  },
  {
    title: 'Monthly Savings',
    amount: 'KES 1,000.00',
    dueDate: '2026-03-12',
    daysLeft: 27,
  },
];

export function MemberPortalPage() {
  const [showBalance, setShowBalance] = useState(true);
  const memberName = 'Michael Chen';
  const memberNumber = 'MEM-2024-002';
  const savingsBalance = 32150.0;
  const loanBalance = 48800.0;
  const welfareContributions = 450.0;

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownRight className="w-4 h-4 text-green-600" />;
      case 'withdrawal':
        return <ArrowUpRight className="w-4 h-4 text-red-600" />;
      case 'loan_payment':
        return <Wallet className="w-4 h-4 text-blue-600" />;
      case 'welfare_contribution':
        return <Heart className="w-4 h-4 text-purple-600" />;
      default:
        return <CreditCard className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'text-green-600';
      case 'withdrawal':
        return 'text-red-600';
      case 'loan_payment':
        return 'text-blue-600';
      case 'welfare_contribution':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {memberName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Welcome back, {memberName.split(' ')[0]}!</h1>
                <p className="text-sm text-gray-500">{memberNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Statement
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Balance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Savings Balance */}
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <PiggyBank className="w-6 h-6" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
                onClick={() => setShowBalance(!showBalance)}
              >
                {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-sm text-blue-100 mb-2">Total Savings</p>
            <p className="text-3xl font-bold mb-4">
              {showBalance ? `KES ${savingsBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '••••••'}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-blue-100">
                <TrendingUp className="w-4 h-4" />
                <span>+8.2% this month</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8 px-3">
                View Details
              </Button>
            </div>
          </Card>

          {/* Loan Balance */}
          <Card className="p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Wallet className="w-6 h-6" />
              </div>
              <Badge className="bg-white/20 text-white border-0">Active</Badge>
            </div>
            <p className="text-sm text-orange-100 mb-2">Outstanding Loan</p>
            <p className="text-3xl font-bold mb-4">
              {showBalance ? `KES ${loanBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '••••••'}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="text-orange-100">
                <span>Next payment: Mar 10</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8 px-3">
                Pay Now
              </Button>
            </div>
          </Card>

          {/* Welfare Contributions */}
          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Heart className="w-6 h-6" />
              </div>
              <Badge className="bg-white/20 text-white border-0">2 Active</Badge>
            </div>
            <p className="text-sm text-purple-100 mb-2">Welfare Contributions</p>
            <p className="text-3xl font-bold mb-4">
              {showBalance ? `KES ${welfareContributions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '••••••'}
            </p>
            <div className="flex items-center justify-between text-sm">
              <div className="text-purple-100">
                <span>Total contributed</span>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 h-8 px-3">
                View Events
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
                    <p className="text-sm text-gray-500 mt-1">Your latest account activity</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${
                          transaction.type === 'deposit' ? 'bg-green-100' :
                          transaction.type === 'withdrawal' ? 'bg-red-100' :
                          transaction.type === 'loan_payment' ? 'bg-blue-100' :
                          'bg-purple-100'
                        }`}>
                          {getTransactionIcon(transaction.type)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <p className="text-sm text-gray-500">{transaction.id}</p>
                            <Badge variant="outline" className="text-xs">
                              {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === 'deposit' ? '+' : '-'}{transaction.amount}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{transaction.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <Button variant="link" className="w-full text-blue-600">
                  View All Transactions
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 bg-white border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start">
                  <Send className="w-4 h-4 mr-2" />
                  Make a Contribution
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="w-4 h-4 mr-2" />
                  Request a Loan
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Statement
                </Button>
              </div>
            </Card>

            {/* Upcoming Payments */}
            <Card className="p-6 bg-white border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-gray-400" />
                <h3 className="font-semibold text-gray-900">Upcoming Payments</h3>
              </div>
              <div className="space-y-4">
                {upcomingPayments.map((payment, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium text-gray-900 text-sm">{payment.title}</p>
                      <Badge variant="outline" className="text-xs">
                        {payment.daysLeft}d left
                      </Badge>
                    </div>
                    <p className="text-lg font-bold text-gray-900 mb-1">{payment.amount}</p>
                    <p className="text-sm text-gray-500">Due: {payment.dueDate}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Account Summary */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <h3 className="font-semibold text-green-900 mb-4">Account Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Member Since</span>
                  <span className="font-semibold text-green-900">Jan 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Total Contributions</span>
                  <span className="font-semibold text-green-900">KES 32,150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700">Credit Score</span>
                  <Badge className="bg-green-600 text-white">820</Badge>
                </div>
              </div>
            </Card>

            {/* Support Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Need Help?</p>
                  <p className="text-xs text-blue-700">We're here for you</p>
                </div>
              </div>
              <p className="text-sm text-blue-700 mb-3">
                Contact our support team for any questions or assistance.
              </p>
              <Button variant="outline" size="sm" className="w-full border-blue-300 text-blue-700 hover:bg-blue-200">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Monthly Deposits</p>
              <ArrowDownRight className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">KES 2,500</p>
            <p className="text-xs text-green-600 mt-2">+15% vs last month</p>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Loan Payments</p>
              <Wallet className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">KES 1,200</p>
            <p className="text-xs text-gray-500 mt-2">On schedule</p>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Interest Earned</p>
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">KES 245</p>
            <p className="text-xs text-green-600 mt-2">This month</p>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Welfare Support</p>
              <Heart className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">KES 450</p>
            <p className="text-xs text-gray-500 mt-2">Total contributed</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
