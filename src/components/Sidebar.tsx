import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Calendar, 
  MessageSquare, 
  DollarSign, 
  BarChart3, 
  Briefcase, 
  FileText, 
  Shield, 
  FileBarChart, 
  Heart, 
  Settings 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'alumni', label: 'Alumni Data', icon: GraduationCap },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'donations', label: 'Donations', icon: DollarSign },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'careers', label: 'Career Services', icon: Briefcase },
    { id: 'surveys', label: 'Surveys', icon: FileText },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'reports', label: 'Reports', icon: FileBarChart },
    { id: 'volunteers', label: 'Volunteers', icon: Heart },
    { id: 'integrations', label: 'Integrations', icon: Settings },
  ];

  return (
    <div className="w-80 glass shadow-professional">
      <div className="p-8 border-b border-white/10">
        <h1 className="text-2xl font-bold gradient-text mb-2">Alumni Admin</h1>
        <p className="text-sm text-gray-300">Management Dashboard</p>
      </div>
      
      <nav className="mt-8 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-4 mb-2 text-left rounded-xl sidebar-item ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-r-4 border-blue-400 shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Icon className="w-6 h-6 mr-4" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;