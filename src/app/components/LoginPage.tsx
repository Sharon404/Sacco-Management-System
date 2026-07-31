import type { FormEvent } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
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
          <p className="text-sm text-gray-600 mt-2">Enter any username/email and password to continue to the member portal.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="portal-username">Username or Email</Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="portal-username"
                type="text"
                placeholder="e.g. member01 or name@email.com"
                className="pl-10"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="portal-password">Password</Label>
            <Input
              id="portal-password"
              type="password"
              placeholder="Enter any password"
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Continue to Member Portal
          </Button>
        </form>
      </Card>
    </div>
  );
}
