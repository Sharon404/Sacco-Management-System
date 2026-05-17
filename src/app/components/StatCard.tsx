import { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative';
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconBgColor,
  iconColor,
}: StatCardProps) {
  return (
    <Card className="p-4 sm:p-6 bg-white border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-2">{value}</h3>
          {change && (
            <p
              className={`text-xs sm:text-sm ${
                changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {change}
            </p>
          )}
        </div>
        <div className={`${iconBgColor} ${iconColor} p-2 sm:p-3 rounded-lg flex-shrink-0`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </Card>
  );
}
