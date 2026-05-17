import { Search, Bell, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';

interface TopBarProps {
  menuButton?: React.ReactNode;
}

export function TopBar({ menuButton }: TopBarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
      {/* Search Bar */}
      <div className="flex-1 max-w-md hidden sm:flex">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 bg-gray-50 border-gray-200 text-sm"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        {/* Mobile Search Button */}
        <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Search className="w-5 h-5 text-gray-600" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile - Hidden on small mobile, shown on tablet+ */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-gray-200">
          <Avatar className="w-8 h-8 sm:w-9 sm:h-9">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs sm:text-sm font-medium text-gray-900">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        {/* Profile - Compact on mobile */}
        <div className="sm:hidden flex items-center gap-2 pl-2 border-l border-gray-200">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {menuButton && menuButton}
    </div>
  );
}
