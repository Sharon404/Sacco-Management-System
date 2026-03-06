import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Smartphone,
  Battery,
  Signal,
  Wifi,
  ArrowLeft,
  Phone,
} from 'lucide-react';

interface USSDScreen {
  id: string;
  title: string;
  content: string;
}

const ussdScreens: { [key: string]: USSDScreen } = {
  main: {
    id: 'main',
    title: 'SACCO Services',
    content: `Welcome to SACCO Services

1. Check Savings Balance
2. Check Loan Balance
3. Check Welfare Dues
4. Last Payment
5. Mini Statement
0. Exit

Reply with your choice`,
  },
  savings: {
    id: 'savings',
    title: 'Savings Balance',
    content: `Your Savings Balance

Member: Michael Chen
Account: MEM-2024-002

Total Savings: KES 64,300.00

Regular Savings: KES 37,000.00
Fixed Deposit: KES 20,000.00
Emergency Fund: KES 7,300.00

Last updated: 13/02/2026

0. Main Menu
00. Exit`,
  },
  loan: {
    id: 'loan',
    title: 'Loan Balance',
    content: `Your Loan Balance

Member: Michael Chen
Loan ID: LOAN-2025-089

Outstanding: KES 97,600.00
Monthly Payment: KES 2,400.00
Next Payment: 10/03/2026

Interest Rate: 12%
Remaining: 36 months

0. Main Menu
00. Exit`,
  },
  welfare: {
    id: 'welfare',
    title: 'Welfare Dues',
    content: `Welfare Contributions

Member: Michael Chen

Active Events: 2

1. Medical Emergency
   Sarah Johnson
   Amount: KES 100.00
   Status: PAID

2. Education Support
   Emily Davis
   Amount: KES 60.00
   Status: PAID

Total Paid: KES 900.00

0. Main Menu
00. Exit`,
  },
  payment: {
    id: 'payment',
    title: 'Last Payment',
    content: `Last Payment Details

Member: Michael Chen

Date: 12/02/2026
Type: Monthly Savings
Amount: KES 1,000.00
Reference: TXN-2026-1234
Status: COMPLETED

Thank you for your payment

0. Main Menu
00. Exit`,
  },
  statement: {
    id: 'statement',
    title: 'Mini Statement',
    content: `Mini Statement

Member: Michael Chen
Last 5 Transactions:

12/02 Savings Deposit
      +KES 1,000.00

10/02 Loan Payment
      -KES 2,400.00

10/02 Welfare Contrib
      -KES 100.00

08/02 Fixed Deposit
      +KES 4,000.00

01/02 Loan Payment
      -KES 2,400.00

0. Main Menu
00. Exit`,
  },
};

export function USSDPage() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [inputValue, setInputValue] = useState('');
  const [showPhone, setShowPhone] = useState(true);

  const handleInput = (value: string) => {
    const screens: { [key: string]: string } = {
      '1': 'savings',
      '2': 'loan',
      '3': 'welfare',
      '4': 'payment',
      '5': 'statement',
      '0': 'main',
    };

    if (screens[value]) {
      setCurrentScreen(screens[value]);
      setInputValue('');
    } else if (value === '00') {
      setCurrentScreen('main');
      setInputValue('');
    }
  };

  const screen = ussdScreens[currentScreen];

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">USSD Mobile Service</h1>
        <p className="text-gray-600 mt-1">Access SACCO services via mobile phone USSD menu</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
        {/* Phone Mockup */}
        <div className="flex flex-col items-center">
          <Card className="w-full max-w-md bg-white p-8 border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Mobile Phone</h2>
            </div>

            {/* Phone Frame */}
            <div className="mx-auto" style={{ width: '320px' }}>
              {/* Phone Device */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                
                {/* Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner h-[600px] flex flex-col">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-2 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                    </div>
                    <div className="font-medium">12:34</div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">85%</span>
                      <Battery className="w-3 h-3" />
                    </div>
                  </div>

                  {/* USSD Screen Content */}
                  <div className="flex-1 bg-gray-100 flex flex-col">
                    {/* USSD Header */}
                    <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-900">*888#</span>
                    </div>

                    {/* USSD Content */}
                    <div className="flex-1 p-4 overflow-y-auto">
                      <div className="bg-white rounded-lg border border-gray-300 p-4 shadow-sm">
                        <pre className="text-sm font-mono text-gray-900 whitespace-pre-wrap leading-relaxed">
                          {screen.content}
                        </pre>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="bg-white px-4 py-3 border-t border-gray-200">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Enter option..."
                          className="text-base"
                          maxLength={2}
                        />
                        <Button
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => {
                            handleInput(inputValue);
                          }}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="bg-white px-4 py-3 border-t border-gray-200">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setCurrentScreen('main')}
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-red-600 border-red-300 hover:bg-red-50"
                        onClick={() => {
                          setCurrentScreen('main');
                          setInputValue('');
                        }}
                      >
                        Exit
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Home Button */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </Card>

          {/* Instructions */}
          <Card className="w-full max-w-md bg-blue-50 border-blue-200 p-4 mt-4">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              How to Use
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Dial *888# from your mobile phone</li>
              <li>• Select an option (1-5)</li>
              <li>• Press 0 to return to main menu</li>
              <li>• Press 00 to exit</li>
              <li>• Available 24/7 on all networks</li>
            </ul>
          </Card>
        </div>

        {/* Information Panel */}
        <div className="space-y-6">
          {/* Features */}
          <Card className="bg-white border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">USSD Banking Features</h2>
            <p className="text-gray-600 mb-6">
              Access your SACCO account anytime, anywhere using simple USSD codes. No internet required!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Check Savings Balance</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    View your total savings including regular savings, fixed deposits, and emergency funds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Check Loan Balance</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    View your outstanding loan balance, monthly payment amount, and next payment date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Check Welfare Dues</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    View active welfare events and your contribution status for each event.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Last Payment</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    View details of your most recent payment including date, amount, and reference number.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
                <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mini Statement</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    View your last 5 transactions including deposits, withdrawals, and loan payments.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 border-0">
              <p className="text-sm text-blue-100 mb-1">Active Users</p>
              <p className="text-3xl font-bold">2,847</p>
              <p className="text-xs text-blue-100 mt-2">Using USSD service</p>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 border-0">
              <p className="text-sm text-green-100 mb-1">Daily Queries</p>
              <p className="text-3xl font-bold">1,245</p>
              <p className="text-xs text-green-100 mt-2">Average per day</p>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-6">
            <h3 className="font-semibold text-green-900 mb-4">Why Use USSD Banking?</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Works on any phone - no smartphone needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>No internet connection required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Fast and secure access to your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Available 24/7 on all mobile networks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Free of charge for all members</span>
              </li>
            </ul>
          </Card>

          {/* Support */}
          <Card className="bg-white border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you're having trouble with USSD services, contact our support team.
            </p>
            <div className="flex gap-3">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Call Support
              </Button>
              <Button variant="outline" className="flex-1">
                Help Center
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
