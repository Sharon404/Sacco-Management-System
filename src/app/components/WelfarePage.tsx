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
  Heart,
  Users,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Plus,
  Eye,
  X,
  UserCheck,
  UserX,
} from 'lucide-react';

interface WelfareEvent {
  id: string;
  title: string;
  memberName: string;
  memberNumber: string;
  eventType: string;
  contributionAmount: string;
  paidMembers: number;
  unpaidMembers: number;
  totalMembers: number;
  totalCollected: string;
  targetAmount: string;
  status: 'open' | 'closed' | 'pending';
  dateCreated: string;
  deadline: string;
}

const welfareEvents: WelfareEvent[] = [
  {
    id: 'WEL-2026-001',
    title: 'Medical Emergency - Sarah Johnson',
    memberName: 'Sarah Johnson',
    memberNumber: 'MEM-2024-001',
    eventType: 'Medical',
    contributionAmount: 'KES 100.00',
    paidMembers: 2456,
    unpaidMembers: 391,
    totalMembers: 2847,
    totalCollected: 'KES 245,600.00',
    targetAmount: 'KES 300,000.00',
    status: 'open',
    dateCreated: '2026-02-10',
    deadline: '2026-02-20',
  },
  {
    id: 'WEL-2026-002',
    title: 'Funeral Support - Michael Chen Family',
    memberName: 'Michael Chen',
    memberNumber: 'MEM-2024-002',
    eventType: 'Bereavement',
    contributionAmount: 'KES 200.00',
    paidMembers: 2847,
    unpaidMembers: 0,
    totalMembers: 2847,
    totalCollected: 'KES 569,400.00',
    targetAmount: 'KES 500,000.00',
    status: 'closed',
    dateCreated: '2026-02-05',
    deadline: '2026-02-12',
  },
  {
    id: 'WEL-2026-003',
    title: 'Education Support - Emily Davis',
    memberName: 'Emily Davis',
    memberNumber: 'MEM-2024-003',
    eventType: 'Education',
    contributionAmount: 'KES 60.00',
    paidMembers: 1842,
    unpaidMembers: 1005,
    totalMembers: 2847,
    totalCollected: 'KES 110,520.00',
    targetAmount: 'KES 160,000.00',
    status: 'open',
    dateCreated: '2026-02-08',
    deadline: '2026-02-25',
  },
  {
    id: 'WEL-2025-045',
    title: 'Hospital Bill - James Wilson',
    memberName: 'James Wilson',
    memberNumber: 'MEM-2023-156',
    eventType: 'Medical',
    contributionAmount: 'KES 150.00',
    paidMembers: 2698,
    unpaidMembers: 149,
    totalMembers: 2847,
    totalCollected: 'KES 404,700.00',
    targetAmount: 'KES 400,000.00',
    status: 'pending',
    dateCreated: '2026-01-25',
    deadline: '2026-02-15',
  },
  {
    id: 'WEL-2025-044',
    title: 'Wedding Support - Olivia Brown',
    memberName: 'Olivia Brown',
    memberNumber: 'MEM-2024-004',
    eventType: 'Wedding',
    contributionAmount: 'KES 80.00',
    paidMembers: 2847,
    unpaidMembers: 0,
    totalMembers: 2847,
    totalCollected: 'KES 227,760.00',
    targetAmount: 'KES 200,000.00',
    status: 'closed',
    dateCreated: '2026-01-15',
    deadline: '2026-02-01',
  },
];

const statusColors = {
  open: 'bg-green-100 text-green-700',
  closed: 'bg-gray-100 text-gray-700',
  pending: 'bg-yellow-100 text-yellow-700',
};

const eventTypeColors = {
  Medical: 'bg-red-50 text-red-700 border-red-200',
  Bereavement: 'bg-purple-50 text-purple-700 border-purple-200',
  Education: 'bg-blue-50 text-blue-700 border-blue-200',
  Wedding: 'bg-pink-50 text-pink-700 border-pink-200',
};

export function WelfarePage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<WelfareEvent | null>(null);

  const totalWelfareFund = 'KES 700,000';
  const activeEvents = welfareEvents.filter((e) => e.status === 'open').length;
  const pendingPayouts = welfareEvents.filter((e) => e.status === 'pending').length;

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welfare Management</h1>
        <p className="text-gray-600 mt-1">Manage welfare events and member contributions</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Welfare Fund Balance</p>
              <p className="text-2xl font-bold text-gray-900">{totalWelfareFund}</p>
              <p className="text-sm text-green-600 mt-2">+5.4% this month</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Events</p>
              <p className="text-2xl font-bold text-green-600">{activeEvents}</p>
              <p className="text-sm text-gray-500 mt-2">Collecting contributions</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Payouts</p>
              <p className="text-2xl font-bold text-yellow-600">{pendingPayouts}</p>
              <p className="text-sm text-gray-500 mt-2">Awaiting approval</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Disbursed</p>
              <p className="text-2xl font-bold text-blue-600">KES 2.4M</p>
              <p className="text-sm text-gray-500 mt-2">This year</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      {/* Welfare Events List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Welfare Events</h2>
              <p className="text-sm text-gray-500 mt-1">
                Showing {welfareEvents.length} welfare events
              </p>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setShowCreateForm(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Details</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-center">Contribution</TableHead>
              <TableHead className="text-center">Paid Members</TableHead>
              <TableHead className="text-center">Unpaid Members</TableHead>
              <TableHead className="text-right">Collected / Target</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {welfareEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.id}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Deadline: {event.deadline}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={eventTypeColors[event.eventType as keyof typeof eventTypeColors]}
                    variant="outline"
                  >
                    {event.eventType}
                  </Badge>
                </TableCell>
                <TableCell className="text-center font-semibold text-gray-900">
                  {event.contributionAmount}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-green-600">
                      <UserCheck className="w-4 h-4" />
                      <span className="font-semibold">{event.paidMembers}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {((event.paidMembers / event.totalMembers) * 100).toFixed(1)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 text-red-600">
                      <UserX className="w-4 h-4" />
                      <span className="font-semibold">{event.unpaidMembers}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {((event.unpaidMembers / event.totalMembers) * 100).toFixed(1)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div>
                    <p className="font-semibold text-gray-900">{event.totalCollected}</p>
                    <p className="text-sm text-gray-500">of {event.targetAmount}</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                        style={{
                          width: `${Math.min(
                            (parseFloat(event.totalCollected.replace(/[$,]/g, '')) /
                              parseFloat(event.targetAmount.replace(/[$,]/g, ''))) *
                              100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge className={statusColors[event.status]} variant="secondary">
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    {event.status === 'pending' && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Approve Payout
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Create Event Side Panel */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Create Welfare Event</h2>
                <p className="text-sm text-gray-500 mt-1">Register a new welfare case</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setShowCreateForm(false)}
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
                <Label htmlFor="eventType">Event Type *</Label>
                <Select>
                  <SelectTrigger id="eventType" className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical">Medical Emergency</SelectItem>
                    <SelectItem value="bereavement">Bereavement/Funeral</SelectItem>
                    <SelectItem value="education">Education Support</SelectItem>
                    <SelectItem value="wedding">Wedding Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="title">Event Title *</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Brief description of the event"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="contribution">Contribution Amount per Member *</Label>
                <Input
                  id="contribution"
                  type="number"
                  placeholder="0.00"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="target">Target Amount *</Label>
                <Input
                  id="target"
                  type="number"
                  placeholder="0.00"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="deadline">Deadline *</Label>
                <Input
                  id="deadline"
                  type="date"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Provide details about the welfare event..."
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Important Note</p>
                    <p className="text-sm text-blue-700 mt-1">
                      All active members will be notified and required to contribute
                      within the deadline period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Welfare Event
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Event Details</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedEvent.id}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setSelectedEvent(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{selectedEvent.title}</h3>
                <div className="flex items-center gap-3 mt-3">
                  <Badge
                    className={eventTypeColors[selectedEvent.eventType as keyof typeof eventTypeColors]}
                    variant="outline"
                  >
                    {selectedEvent.eventType}
                  </Badge>
                  <Badge className={statusColors[selectedEvent.status]} variant="secondary">
                    {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Member</p>
                  <p className="font-semibold text-gray-900 mt-1">{selectedEvent.memberName}</p>
                  <p className="text-sm text-gray-500">{selectedEvent.memberNumber}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">Contribution per Member</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {selectedEvent.contributionAmount}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <UserCheck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Paid Members</p>
                  <p className="text-2xl font-bold text-green-600">{selectedEvent.paidMembers}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <UserX className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Unpaid Members</p>
                  <p className="text-2xl font-bold text-red-600">{selectedEvent.unpaidMembers}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-blue-600">{selectedEvent.totalMembers}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Total Collected</p>
                    <p className="text-3xl font-bold text-gray-900">{selectedEvent.totalCollected}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Target Amount</p>
                    <p className="text-2xl font-bold text-gray-900">{selectedEvent.targetAmount}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full"
                    style={{
                      width: `${Math.min(
                        (parseFloat(selectedEvent.totalCollected.replace(/[$,]/g, '')) /
                          parseFloat(selectedEvent.targetAmount.replace(/[$,]/g, ''))) *
                          100,
                        100
                      )}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {((parseFloat(selectedEvent.totalCollected.replace(/[$,]/g, '')) /
                    parseFloat(selectedEvent.targetAmount.replace(/[$,]/g, ''))) *
                    100
                  ).toFixed(1)}
                  % of target reached
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Date Created</p>
                  <p className="font-medium text-gray-900">{selectedEvent.dateCreated}</p>
                </div>
                <div>
                  <p className="text-gray-600">Deadline</p>
                  <p className="font-medium text-gray-900">{selectedEvent.deadline}</p>
                </div>
              </div>

              {selectedEvent.status === 'pending' && (
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve Payout
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
