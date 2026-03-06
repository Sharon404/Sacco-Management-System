import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  FileText,
  Users,
  PiggyBank,
  Wallet,
  Heart,
  Download,
  TrendingUp,
  Calendar,
  BarChart3,
  PieChart,
  LineChart,
  Filter,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

interface ReportCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  iconBg: string;
  iconColor: string;
  totalRecords: number;
  lastGenerated: string;
  category: string;
}

const reportCards: ReportCard[] = [
  {
    id: 'members',
    title: 'Members Report',
    description: 'Complete member directory, registration dates, and status overview',
    icon: Users,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    totalRecords: 2847,
    lastGenerated: '2026-02-13',
    category: 'Membership',
  },
  {
    id: 'savings',
    title: 'Savings Report',
    description: 'Contribution history, account balances, and savings trends',
    icon: PiggyBank,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    totalRecords: 15234,
    lastGenerated: '2026-02-13',
    category: 'Financial',
  },
  {
    id: 'loans',
    title: 'Loans Report',
    description: 'Loan applications, disbursements, repayments, and arrears',
    icon: Wallet,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    totalRecords: 432,
    lastGenerated: '2026-02-13',
    category: 'Financial',
  },
  {
    id: 'welfare',
    title: 'Welfare Report',
    description: 'Welfare events, contributions collected, and disbursements',
    icon: Heart,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    totalRecords: 45,
    lastGenerated: '2026-02-13',
    category: 'Operations',
  },
  {
    id: 'financial',
    title: 'Financial Statement',
    description: 'Income, expenses, assets, liabilities, and balance sheet',
    icon: BarChart3,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    totalRecords: 1,
    lastGenerated: '2026-02-13',
    category: 'Financial',
  },
  {
    id: 'transactions',
    title: 'Transaction Report',
    description: 'All transactions including deposits, withdrawals, and transfers',
    icon: LineChart,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    totalRecords: 8456,
    lastGenerated: '2026-02-13',
    category: 'Operations',
  },
];

// Chart data
const monthlyGrowthData = [
  { month: 'Jul', members: 2420, savings: 980, loans: 380 },
  { month: 'Aug', members: 2510, savings: 1050, loans: 390 },
  { month: 'Sep', members: 2590, savings: 1100, loans: 400 },
  { month: 'Oct', members: 2650, savings: 1150, loans: 410 },
  { month: 'Nov', members: 2740, savings: 1180, loans: 420 },
  { month: 'Dec', members: 2790, savings: 1200, loans: 428 },
  { month: 'Jan', members: 2820, savings: 1215, loans: 430 },
  { month: 'Feb', members: 2847, savings: 1240, loans: 432 },
];

const savingsDistributionData = [
  { name: 'Regular Savings', value: 450000, color: '#3b82f6' },
  { name: 'Fixed Deposits', value: 380000, color: '#10b981' },
  { name: 'Emergency Fund', value: 220000, color: '#f59e0b' },
  { name: 'Investment Fund', value: 150000, color: '#8b5cf6' },
];

const loanPerformanceData = [
  { month: 'Jul', disbursed: 120000, collected: 95000 },
  { month: 'Aug', disbursed: 135000, collected: 102000 },
  { month: 'Sep', disbursed: 148000, collected: 110000 },
  { month: 'Oct', disbursed: 152000, collected: 118000 },
  { month: 'Nov', disbursed: 145000, collected: 125000 },
  { month: 'Dec', disbursed: 158000, collected: 132000 },
  { month: 'Jan', disbursed: 165000, collected: 138000 },
  { month: 'Feb', disbursed: 172000, collected: 145000 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export function ReportsPage() {
  const [dateRange, setDateRange] = useState('last-month');
  const [reportCategory, setReportCategory] = useState('all');

  const filteredReports = reportCategory === 'all' 
    ? reportCards 
    : reportCards.filter(report => report.category === reportCategory);

  const handleGenerateReport = (reportId: string) => {
    alert(`Generating ${reportCards.find(r => r.id === reportId)?.title}...`);
  };

  const handleDownloadPDF = (reportId: string) => {
    alert(`Downloading ${reportCards.find(r => r.id === reportId)?.title} as PDF...`);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reports & Statements</h1>
        <p className="text-gray-600 mt-1">Generate and download comprehensive reports</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-quarter">Last Quarter</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <Select value={reportCategory} onValueChange={setReportCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Membership">Membership</SelectItem>
              <SelectItem value="Financial">Financial</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="ml-auto">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download All Reports
          </Button>
        </div>
      </div>

      {/* Report Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredReports.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.id} className="p-6 bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`${report.iconBg} ${report.iconColor} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {report.category}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{report.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                <div>
                  <p className="text-xs text-gray-500">Total Records</p>
                  <p className="font-semibold text-gray-900">{report.totalRecords.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Last Generated</p>
                  <p className="font-semibold text-gray-900">{report.lastGenerated}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700" 
                  size="sm"
                  onClick={() => handleGenerateReport(report.id)}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Generate
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDownloadPDF(report.id)}
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Analytics Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Analytics Overview</h2>
            <p className="text-sm text-gray-600 mt-1">Visual insights and performance metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-600">All metrics trending up</span>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Monthly Growth Chart */}
          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">Monthly Growth Trends</h3>
                <p className="text-sm text-gray-600 mt-1">Members, Savings & Loans (in thousands)</p>
              </div>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyGrowthData}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="members" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorMembers)"
                  name="Members"
                />
                <Area 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorSavings)"
                  name="Savings (KES K)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Savings Distribution Chart */}
          <Card className="p-6 bg-white border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">Savings Distribution</h3>
                <p className="text-sm text-gray-600 mt-1">Total: KES 2.4M across all accounts</p>
              </div>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <Pie
                  data={savingsDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {savingsDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `KES ${value.toLocaleString()}`}
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Loan Performance Chart - Full Width */}
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Loan Performance</h3>
              <p className="text-sm text-gray-600 mt-1">Disbursed vs Collected amounts (in KES)</p>
            </div>
            <LineChart className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={loanPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                formatter={(value: number) => `KES ${value.toLocaleString()}`}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="disbursed" fill="#f59e0b" name="Disbursed" radius={[8, 8, 0, 0]} />
              <Bar dataKey="collected" fill="#10b981" name="Collected" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8 text-blue-600" />
            <Badge className="bg-blue-600 text-white">+12%</Badge>
          </div>
          <p className="text-sm text-blue-700 mb-1">Total Members</p>
          <p className="text-2xl font-bold text-blue-900">2,847</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center justify-between mb-2">
            <PiggyBank className="w-8 h-8 text-green-600" />
            <Badge className="bg-green-600 text-white">+8.2%</Badge>
          </div>
          <p className="text-sm text-green-700 mb-1">Total Savings</p>
          <p className="text-2xl font-bold text-green-900">KES 2.4M</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="flex items-center justify-between mb-2">
            <Wallet className="w-8 h-8 text-orange-600" />
            <Badge className="bg-orange-600 text-white">432</Badge>
          </div>
          <p className="text-sm text-orange-700 mb-1">Active Loans</p>
          <p className="text-2xl font-bold text-orange-900">KES 1,700K</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-8 h-8 text-purple-600" />
            <Badge className="bg-purple-600 text-white">+5.4%</Badge>
          </div>
          <p className="text-sm text-purple-700 mb-1">Welfare Fund</p>
          <p className="text-2xl font-bold text-purple-900">KES 700K</p>
        </Card>
      </div>
    </div>
  );
}
