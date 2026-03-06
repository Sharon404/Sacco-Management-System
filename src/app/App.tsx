import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  PiggyBank,
  Heart,
  Wallet,
  CreditCard,
  FileText,
  UserCog,
  Settings,
  User,
  Smartphone,
} from 'lucide-react';
import { SidebarItem } from './components/SidebarItem';
import { TopBar } from './components/TopBar';
import { StatCard } from './components/StatCard';
import { TransactionsTable } from './components/TransactionsTable';
import { MembersPage } from './components/MembersPage';
import { ContributionsPage } from './components/ContributionsPage';
import { WelfarePage } from './components/WelfarePage';
import { LoansPage } from './components/LoansPage';
import { ReportsPage } from './components/ReportsPage';
import { MemberPortalPage } from './components/MemberPortalPage';
import { USSDPage } from './components/USSDPage';
import { PaymentsPage } from './components/PaymentsPage';
import { UsersPage } from './components/UsersPage';
import { SettingsPage } from './components/SettingsPage';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Users, label: 'Members' },
  { icon: PiggyBank, label: 'Contributions' },
  { icon: Heart, label: 'Welfare' },
  { icon: Wallet, label: 'Loans' },
  { icon: CreditCard, label: 'Payments' },
  { icon: FileText, label: 'Reports' },
  { icon: UserCog, label: 'Users' },
  { icon: Settings, label: 'Settings' },
  { icon: User, label: 'Member Portal' },
  { icon: Smartphone, label: 'USSD Service' },
];

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <PiggyBank className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">SACCO</h1>
              <p className="text-xs text-gray-500">Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeNav === item.label}
              onClick={() => setActiveNav(item.label)}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-900 mb-1">Need Help?</p>
            <p className="text-xs text-gray-600 mb-3">Contact support team</p>
            <button className="w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar />

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {activeNav === 'Dashboard' && (
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <StatCard
                  title="Total Members"
                  value="2,847"
                  change="+12% from last month"
                  changeType="positive"
                  icon={Users}
                  iconBgColor="bg-blue-100"
                  iconColor="text-blue-600"
                />
                <StatCard
                  title="Total Savings"
                  value="KES 2.4M"
                  change="+8.2% from last month"
                  changeType="positive"
                  icon={PiggyBank}
                  iconBgColor="bg-green-100"
                  iconColor="text-green-600"
                />
                <StatCard
                  title="Welfare Fund"
                  value="KES 700K"
                  change="+5.4% from last month"
                  changeType="positive"
                  icon={Heart}
                  iconBgColor="bg-purple-100"
                  iconColor="text-purple-600"
                />
                <StatCard
                  title="Active Loans"
                  value="432"
                  change="-3.1% from last month"
                  changeType="negative"
                  icon={Wallet}
                  iconBgColor="bg-orange-100"
                  iconColor="text-orange-600"
                />
                <StatCard
                  title="Pending Approvals"
                  value="28"
                  change="+2 new today"
                  changeType="positive"
                  icon={FileText}
                  iconBgColor="bg-red-100"
                  iconColor="text-red-600"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Loan Portfolio</h3>
                    <CreditCard className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">KES 850,000</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Outstanding</span>
                      <span className="font-medium text-gray-900">KES 650,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Collected</span>
                      <span className="font-medium text-green-600">KES 200,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Monthly Growth</h3>
                    <PiggyBank className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">+15.3%</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">New Members</span>
                      <span className="font-medium text-gray-900">+127</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Contributions</span>
                      <span className="font-medium text-green-600">KES 45,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Payment Status</h3>
                    <CreditCard className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-2">94.2%</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">On Time</span>
                      <span className="font-medium text-green-600">407</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Overdue</span>
                      <span className="font-medium text-red-600">25</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transactions Table */}
              <TransactionsTable />
            </div>
          )}

          {activeNav === 'Members' && <MembersPage />}
          {activeNav === 'Contributions' && <ContributionsPage />}
          {activeNav === 'Welfare' && <WelfarePage />}
          {activeNav === 'Loans' && <LoansPage />}
          {activeNav === 'Payments' && <PaymentsPage />}
          {activeNav === 'Reports' && <ReportsPage />}
          {activeNav === 'Users' && <UsersPage />}
          {activeNav === 'Settings' && <SettingsPage />}
          {activeNav === 'Member Portal' && <MemberPortalPage />}
          {activeNav === 'USSD Service' && <USSDPage />}
        </main>
      </div>
    </div>
  );
}