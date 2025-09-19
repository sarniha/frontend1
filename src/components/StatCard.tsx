import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon }) => {
  return (
    <div className="glass-card rounded-2xl p-8 card-3d float hover:glow-blue fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-300 mb-2">{title}</p>
          <p className="text-3xl font-bold text-white mt-1 mb-2">{value}</p>
          <p className={`text-sm font-medium ${
            changeType === 'positive' ? 'text-green-400' : 'text-red-400'
          }`}>
            {change} from last month
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;