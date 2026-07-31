import { Badge } from './ui/badge';
import { Card } from './ui/card';
import {
  Heart,
  DollarSign,
  Users,
  Calendar,
} from 'lucide-react';

interface WelfarePayment {
  id: string;
  memberName: string;
  memberNumber: string;
  amountPaid: number;
  balanceRemaining: number;
  paymentDate: string;
  paymentMethod: string;
}

const annualWelfareAmount = 5000;

const recentWelfarePayments: WelfarePayment[] = [
  {
    id: 'WEL-PAY-2026-001',
    memberName: 'Sarah Johnson',
    memberNumber: 'MEM-2024-001',
    amountPaid: 2500,
    balanceRemaining: 2500,
    paymentDate: '2026-07-28',
    paymentMethod: 'Mobile Money',
  },
  {
    id: 'WEL-PAY-2026-002',
    memberName: 'Michael Chen',
    memberNumber: 'MEM-2024-002',
    amountPaid: 5000,
    balanceRemaining: 0,
    paymentDate: '2026-07-27',
    paymentMethod: 'Bank Transfer',
  },
  {
    id: 'WEL-PAY-2026-003',
    memberName: 'Emily Davis',
    memberNumber: 'MEM-2024-003',
    amountPaid: 4000,
    balanceRemaining: 1000,
    paymentDate: '2026-07-26',
    paymentMethod: 'Cash',
  },
  {
    id: 'WEL-PAY-2026-004',
    memberName: 'James Wilson',
    memberNumber: 'MEM-2023-156',
    amountPaid: 1500,
    balanceRemaining: 3500,
    paymentDate: '2026-07-25',
    paymentMethod: 'Mobile Money',
  },
  {
    id: 'WEL-PAY-2026-005',
    memberName: 'Olivia Brown',
    memberNumber: 'MEM-2024-004',
    amountPaid: 5000,
    balanceRemaining: 0,
    paymentDate: '2026-07-24',
    paymentMethod: 'Bank Transfer',
  },
];

export function WelfarePage() {
  const collectedAmount = recentWelfarePayments.reduce((sum, payment) => sum + payment.amountPaid, 0);
  const expectedAmount = recentWelfarePayments.length * annualWelfareAmount;
  const remainingAmount = expectedAmount - collectedAmount;
  const fullyPaidMembers = recentWelfarePayments.filter((payment) => payment.balanceRemaining === 0).length;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welfare Contributions</h1>
        <p className="text-gray-600 mt-1">Recent members who have paid toward the annual KES {annualWelfareAmount.toLocaleString('en-US')} welfare amount</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Collected Amount</p>
              <p className="text-2xl font-bold text-gray-900">KES {collectedAmount.toLocaleString('en-US')}</p>
              <p className="text-sm text-green-600 mt-2">Against annual target</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Expected Amount</p>
              <p className="text-2xl font-bold text-green-600">KES {expectedAmount.toLocaleString('en-US')}</p>
              <p className="text-sm text-gray-500 mt-2">{recentWelfarePayments.length} members</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Members Paid</p>
              <p className="text-2xl font-bold text-yellow-600">{fullyPaidMembers}</p>
              <p className="text-sm text-gray-500 mt-2">Fully settled</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Remaining Balance</p>
              <p className="text-2xl font-bold text-blue-600">KES {remainingAmount.toLocaleString('en-US')}</p>
              <p className="text-sm text-gray-500 mt-2">To reach expected amount</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Welfare Payments */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Recently Paid Members</h2>
              <p className="text-sm text-gray-500 mt-1">Names of members and the amount they paid toward the annual KES {annualWelfareAmount.toLocaleString('en-US')} contribution</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Member</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Member No.</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Paid</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Balance</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Collected vs Expected</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Method</th>
              </tr>
            </thead>
            <tbody>
              {recentWelfarePayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/70">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{payment.memberName}</p>
                    <p className="text-sm text-gray-500">Recently paid welfare</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.memberNumber}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">KES {payment.amountPaid.toLocaleString('en-US')}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">KES {payment.balanceRemaining.toLocaleString('en-US')}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">
                        KES {payment.amountPaid.toLocaleString('en-US')} of KES {annualWelfareAmount.toLocaleString('en-US')}
                      </p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                          style={{ width: `${Math.min((payment.amountPaid / annualWelfareAmount) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.paymentDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{payment.paymentMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
