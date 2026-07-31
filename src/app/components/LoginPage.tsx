import type { FormEvent } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { PiggyBank, User } from 'lucide-react';

interface LoginPageProps {
  onSubmit: () => void;
}

export function LoginPage({ onSubmit }: LoginPageProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8 border-gray-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
            <PiggyBank className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">SACCO Member Access</h1>
          <p className="text-sm text-gray-600 mt-2">No credentials required. Continue to open your member portal.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3">
            <User className="w-5 h-5 text-blue-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              Click continue to access your account dashboard and welfare contribution details.
            </p>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Continue to Member Portal
          </Button>
        </form>
      </Card>
    </div>
  );
}
