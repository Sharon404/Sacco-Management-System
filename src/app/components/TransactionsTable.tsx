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
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
        <p className="text-sm text-gray-500 mt-1">Latest financial activities</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Member</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>{transaction.member}</TableCell>
              <TableCell className="text-gray-600">{transaction.type}</TableCell>
              <TableCell className="font-semibold">{transaction.amount}</TableCell>
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
    </div>
  );
}
