import { useState } from 'react';
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
  Building2,
  PiggyBank,
  Wallet,
  Heart,
  Bell,
  Shield,
  Save,
  Check,
  AlertCircle,
  Mail,
  Globe,
  Phone,
  MapPin,
  Percent,
  Calendar,
  DollarSign,
  Lock,
  Key,
  Eye,
  Clock,
  FileText,
} from 'lucide-react';

interface SettingsTab {
  id: string;
  label: string;
  icon: React.ElementType;
}

const settingsTabs: SettingsTab[] = [
  { id: 'profile', label: 'SACCO Profile', icon: Building2 },
  { id: 'contributions', label: 'Contribution Settings', icon: PiggyBank },
  { id: 'loans', label: 'Loan Settings', icon: Wallet },
  { id: 'welfare', label: 'Welfare Settings', icon: Heart },
  { id: 'notifications', label: 'Notification Settings', icon: Bell },
  { id: 'security', label: 'Security Settings', icon: Shield },
];

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label: string;
  description?: string;
}

function ToggleSwitch({ enabled, onChange, label, description }: ToggleSwitchProps) {
  return (
    <div className="flex items-start justify-between py-4">
      <div className="flex-1">
        <p className="font-medium text-gray-900">{label}</p>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saved, setSaved] = useState(false);

  // Toggle states
  const [autoApproval, setAutoApproval] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [loanPenalties, setLoanPenalties] = useState(true);
  const [welfareAutoDeduct, setWelfareAutoDeduct] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-gray-600 mt-1">Configure and manage SACCO system preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Tabs - Vertical Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-white border-gray-200 p-4">
            <nav className="space-y-1">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-700' : 'text-gray-400'}`} />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Quick Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">System Info</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Version</p>
                  <p className="text-sm font-medium text-gray-900">v2.5.0</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Last Updated</p>
                  <p className="text-sm font-medium text-gray-900">Feb 24, 2026</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">License</p>
                  <p className="text-sm font-medium text-green-600">Active</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <Card className="bg-white border-gray-200">
            {/* SACCO Profile */}
            {activeTab === 'profile' && (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">SACCO Profile</h2>
                    <p className="text-sm text-gray-500">Manage your organization information</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Basic Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="saccoName">SACCO Name *</Label>
                        <Input
                          id="saccoName"
                          type="text"
                          defaultValue="Unity Savings & Credit Cooperative"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="saccoCode">SACCO Code *</Label>
                        <Input
                          id="saccoCode"
                          type="text"
                          defaultValue="USCC-2024"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative mt-1">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              defaultValue="info@unitysacco.com"
                              className="pl-10"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <div className="relative mt-1">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="phone"
                              type="tel"
                              defaultValue="+254 700 123 456"
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <div className="relative mt-1">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="website"
                            type="url"
                            defaultValue="https://www.unitysacco.com"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Physical Address *</Label>
                        <div className="relative mt-1">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <textarea
                            id="address"
                            rows={3}
                            defaultValue="123 Main Street, Central Business District, Nairobi, Kenya"
                            className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Registration Details */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Registration Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="regNumber">Registration Number</Label>
                        <Input
                          id="regNumber"
                          type="text"
                          defaultValue="REG/2024/00123"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="regDate">Registration Date</Label>
                        <Input
                          id="regDate"
                          type="date"
                          defaultValue="2024-01-15"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contribution Settings */}
            {activeTab === 'contributions' && (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <PiggyBank className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Contribution Settings</h2>
                    <p className="text-sm text-gray-500">Configure member contribution rules</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Contribution Rules */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Contribution Rules</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="minContribution">Minimum Monthly Contribution *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="minContribution"
                            type="number"
                            placeholder="KES"
                            defaultValue="1000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="maxContribution">Maximum Monthly Contribution</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="maxContribution"
                            type="number"
                            placeholder="KES"
                            defaultValue="20000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interest Settings */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Interest Settings</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="interestRate">Annual Interest Rate (%) *</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="interestRate"
                            type="number"
                            step="0.1"
                            defaultValue="8.5"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="interestPeriod">Interest Calculation Period</Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger id="interestPeriod" className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="annually">Annually</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Payment Schedule */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Payment Schedule</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dueDay">Monthly Due Day</Label>
                        <div className="relative mt-1">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="dueDay"
                            type="number"
                            min="1"
                            max="31"
                            defaultValue="5"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="gracePeriod">Grace Period (Days)</Label>
                        <Input
                          id="gracePeriod"
                          type="number"
                          defaultValue="3"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Automation */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Automation</h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={autoApproval}
                        onChange={setAutoApproval}
                        label="Auto-approve Contributions"
                        description="Automatically approve contributions from verified payment sources"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Loan Settings */}
            {activeTab === 'loans' && (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Loan Settings</h2>
                    <p className="text-sm text-gray-500">Configure loan policies and rules</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Loan Limits */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Loan Limits</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="minLoan">Minimum Loan Amount *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="minLoan"
                            type="number"
                            placeholder="KES"
                            defaultValue="2000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="maxLoan">Maximum Loan Amount *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="maxLoan"
                            type="number"
                            placeholder="KES"
                            defaultValue="100000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interest & Fees */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Interest & Fees</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="loanInterest">Loan Interest Rate (%) *</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="loanInterest"
                            type="number"
                            step="0.1"
                            defaultValue="12.5"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="processingFee">Processing Fee (%) *</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="processingFee"
                            type="number"
                            step="0.1"
                            defaultValue="2.5"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="penaltyRate">Late Payment Penalty (%) *</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="penaltyRate"
                            type="number"
                            step="0.1"
                            defaultValue="5.0"
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="insuranceFee">Insurance Fee (%) *</Label>
                        <div className="relative mt-1">
                          <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="insuranceFee"
                            type="number"
                            step="0.1"
                            defaultValue="1.0"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Repayment Terms */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Repayment Terms</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="minPeriod">Minimum Repayment Period (Months)</Label>
                        <Input
                          id="minPeriod"
                          type="number"
                          defaultValue="3"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="maxPeriod">Maximum Repayment Period (Months)</Label>
                        <Input
                          id="maxPeriod"
                          type="number"
                          defaultValue="60"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Eligibility Criteria</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="minMonths">Minimum Membership (Months)</Label>
                        <Input
                          id="minMonths"
                          type="number"
                          defaultValue="6"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="savingsMultiple">Savings Multiple (x)</Label>
                        <Input
                          id="savingsMultiple"
                          type="number"
                          step="0.1"
                          defaultValue="3.0"
                          className="mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">Max loan = Savings × Multiple</p>
                      </div>
                    </div>
                  </div>

                  {/* Loan Options */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Loan Options</h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={loanPenalties}
                        onChange={setLoanPenalties}
                        label="Enable Late Payment Penalties"
                        description="Automatically apply penalties for late loan repayments"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Welfare Settings */}
            {activeTab === 'welfare' && (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Welfare Settings</h2>
                    <p className="text-sm text-gray-500">Configure welfare fund policies</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Contribution Settings */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Welfare Contributions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="welfareAmount">Monthly Welfare Amount *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="welfareAmount"
                            type="number"
                            placeholder="KES"
                            defaultValue="100"
                            className="pl-14"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="welfareFrequency">Contribution Frequency</Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger id="welfareFrequency" className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="biweekly">Bi-weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Benefit Amounts */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Benefit Payouts</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="deathBenefit">Death Benefit Amount *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="deathBenefit"
                            type="number"
                            placeholder="KES"
                            defaultValue="10000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="hospitalBenefit">Hospitalization Benefit *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="hospitalBenefit"
                            type="number"
                            placeholder="KES"
                            defaultValue="2000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="funeralBenefit">Funeral Assistance *</Label>
                        <div className="relative mt-1">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">KES</span>
                          <Input
                            id="funeralBenefit"
                            type="number"
                            placeholder="KES"
                            defaultValue="4000"
                            className="pl-14"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Welfare Options */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4">Automation</h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={welfareAutoDeduct}
                        onChange={setWelfareAutoDeduct}
                        label="Auto-deduct from Savings"
                        description="Automatically deduct welfare contributions from member savings"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-lg">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Notification Settings</h2>
                    <p className="text-sm text-gray-500">Configure notification preferences</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-gray-400" />
                      Email Notifications
                    </h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={emailNotifications}
                        onChange={setEmailNotifications}
                        label="Enable Email Notifications"
                        description="Send notifications to members via email"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Payment Confirmations"
                        description="Send email when payments are received"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Loan Status Updates"
                        description="Notify members about loan application status"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Contribution Reminders"
                        description="Send reminders before contribution due dates"
                      />
                    </div>
                  </div>

                  {/* SMS Notifications */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-400" />
                      SMS Notifications
                    </h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={smsNotifications}
                        onChange={setSmsNotifications}
                        label="Enable SMS Notifications"
                        description="Send notifications to members via SMS"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Payment Alerts"
                        description="Send SMS alerts for successful payments"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Low Balance Warnings"
                        description="Alert members when balance is low"
                      />
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="Monthly Statements"
                        description="Send monthly account statements via SMS"
                      />
                    </div>
                  </div>

                  {/* System Notifications */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Bell className="w-5 h-5 text-gray-400" />
                      System Notifications
                    </h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Welcome Messages"
                        description="Send welcome message to new members"
                      />
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="Birthday Greetings"
                        description="Send birthday wishes to members"
                      />
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="Promotional Messages"
                        description="Send promotional offers and updates"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>
                    <p className="text-sm text-gray-500">Configure system security options</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Authentication */}
                  <div>
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Key className="w-5 h-5 text-gray-400" />
                      Authentication
                    </h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={twoFactorAuth}
                        onChange={setTwoFactorAuth}
                        label="Two-Factor Authentication"
                        description="Require 2FA for all admin users"
                      />
                      <ToggleSwitch
                        enabled={sessionTimeout}
                        onChange={setSessionTimeout}
                        label="Session Timeout"
                        description="Automatically log out inactive users after 30 minutes"
                      />
                      <ToggleSwitch
                        enabled={loginAlerts}
                        onChange={setLoginAlerts}
                        label="Login Alerts"
                        description="Send alerts for new device logins"
                      />
                    </div>
                  </div>

                  {/* Password Policy */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-gray-400" />
                      Password Policy
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="minLength">Minimum Password Length</Label>
                          <Input
                            id="minLength"
                            type="number"
                            defaultValue="8"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="expiryDays">Password Expiry (Days)</Label>
                          <Input
                            id="expiryDays"
                            type="number"
                            defaultValue="90"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="complexity">Password Complexity</Label>
                        <Select defaultValue="high">
                          <SelectTrigger id="complexity" className="mt-1">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (Letters only)</SelectItem>
                            <SelectItem value="medium">Medium (Letters + Numbers)</SelectItem>
                            <SelectItem value="high">High (Letters + Numbers + Symbols)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Access Control */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-gray-400" />
                      Access Control
                    </h3>
                    <div className="divide-y divide-gray-200">
                      <ToggleSwitch
                        enabled={true}
                        onChange={() => {}}
                        label="IP Whitelist"
                        description="Restrict access to whitelisted IP addresses only"
                      />
                      <ToggleSwitch
                        enabled={false}
                        onChange={() => {}}
                        label="API Access"
                        description="Allow third-party integrations via API"
                      />
                    </div>
                  </div>

                  {/* Audit Logs */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gray-400" />
                      Audit & Compliance
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="logRetention">Log Retention Period (Days)</Label>
                        <Input
                          id="logRetention"
                          type="number"
                          defaultValue="365"
                          className="mt-1"
                        />
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex gap-3">
                          <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-yellow-900">Compliance Notice</p>
                            <p className="text-sm text-yellow-700 mt-1">
                              Ensure security settings comply with local data protection regulations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button - Fixed at bottom */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Changes will take effect immediately after saving
                </p>
                <div className="flex gap-3">
                  <Button variant="outline">
                    Cancel
                  </Button>
                  <Button
                    className={`${
                      saved ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    onClick={handleSave}
                  >
                    {saved ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Saved Successfully
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
