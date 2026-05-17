import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

interface Transaction {
  id: string;
  member: string;
  type: string;
  amount: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const transactions: Transaction[] = [
  {
    id: 'TXN001',
    member: 'Sarah Johnson',
    type: 'Contribution',
    amount: 'KES 5,000.00',
    date: '2026-02-11',
    status: 'completed',
  },
  {
    id: 'TXN002',
    member: 'Michael Chen',
    type: 'Loan Repayment',
    amount: 'KES 2,400.00',
    date: '2026-02-11',
    status: 'completed',
  },
  {
    id: 'TXN003',
    member: 'Emily Davis',
    type: 'Welfare Contribution',
    amount: 'KES 1,000.00',
    date: '2026-02-10',
    status: 'pending',
  },
  {
    id: 'TXN004',
    member: 'James Wilson',
    type: 'Savings Withdrawal',
    amount: 'KES 6,000.00',
    date: '2026-02-10',
    status: 'completed',
  },
  {
    id: 'TXN005',
    member: 'Olivia Brown',
    type: 'Contribution',
    amount: 'KES 3,600.00',
    date: '2026-02-09',
    status: 'completed',
  },
  {
    id: 'TXN006',
    member: 'David Martinez',
    type: 'Loan Disbursement',
    amount: 'KES 20,000.00',
    date: '2026-02-09',
    status: 'pending',
  },
  {
    id: 'TXN007',
    member: 'Sophia Taylor',
    type: 'Loan Repayment',
    amount: 'KES 1,700.00',
    date: '2026-02-08',
    status: 'completed',
  },
  {
    id: 'TXN008',
    member: 'William Anderson',
    type: 'Contribution',
    amount: 'KES 4,400.00',
    date: '2026-02-08',
    status: 'failed',
  },
];

const statusColors = {
  completed: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  failed: 'bg-red-100 text-red-700',
};

export function TransactionsTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Recent Transactions</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Latest financial activities</p>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs sm:text-sm">Transaction ID</TableHead>
              <TableHead className="text-xs sm:text-sm">Member</TableHead>
              <TableHead className="text-xs sm:text-sm">Type</TableHead>
              <TableHead className="text-xs sm:text-sm">Amount</TableHead>
              <TableHead className="text-xs sm:text-sm">Date</TableHead>
              <TableHead className="text-xs sm:text-sm">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium text-xs sm:text-sm">{transaction.id}</TableCell>
                <TableCell className="text-xs sm:text-sm">{transaction.member}</TableCell>
                <TableCell className="text-gray-600 text-xs sm:text-sm">{transaction.type}</TableCell>
                <TableCell className="font-semibold text-xs sm:text-sm">{transaction.amount}</TableCell>
                <TableCell className="text-gray-600 text-xs sm:text-sm">{transaction.date}</TableCell>
                <TableCell>
                  <Badge className={`${statusColors[transaction.status]} text-xs`} variant="secondary">
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="p-4 space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-xs text-gray-500">{transaction.id}</p>
                <p className="font-medium text-sm">{transaction.member}</p>
              </div>
              <Badge className={`${statusColors[transaction.status]} text-xs flex-shrink-0`} variant="secondary">
                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-500">Type: </span>
                <span className="font-medium">{transaction.type}</span>
              </div>
              <div>
                <span className="text-gray-500">Amount: </span>
                <span className="font-medium">{transaction.amount}</span>
              </div>
              <div>
                <span className="text-gray-500">Date: </span>
                <span className="font-medium">{transaction.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
