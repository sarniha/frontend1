import React from 'react';
import { Users, Calendar, DollarSign, TrendingUp, Mail, GraduationCap } from 'lucide-react';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Alumni',
      value: '12,847',
      change: '+5.2%',
      changeType: 'positive' as const,
      icon: GraduationCap,
    },
    {
      title: 'Active Users',
      value: '8,921',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Events This Month',
      value: '24',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Calendar,
    },
    {
      title: 'Total Donations',
      value: '$1.2M',
      change: '+18.5%',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Engagement Rate',
      value: '76%',
      change: '+3.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
    },
    {
      title: 'Messages Sent',
      value: '45,213',
      change: '-2.4%',
      changeType: 'negative' as const,
      icon: Mail,
    },
  ];

  const engagementData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 70 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 78 },
    { month: 'Jun', value: 76 },
  ];

  const donationData = [
    { month: 'Jan', value: 85000 },
    { month: 'Feb', value: 92000 },
    { month: 'Mar', value: 78000 },
    { month: 'Apr', value: 125000 },
    { month: 'May', value: 138000 },
    { month: 'Jun', value: 142000 },
  ];

  return (
    <div className="p-10 min-h-screen">
      <div className="mb-8">
        <h1 className="text-5xl font-bold gradient-text mb-4 fade-in-up">Dashboard</h1>
        <p className="text-xl text-gray-300 fade-in-up stagger-1">Welcome back! Here's what's happening with your alumni network.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className={`stagger-${index + 1}`}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="glass-card rounded-2xl p-8 card-3d float-delayed fade-in-up stagger-2">
          <h3 className="text-2xl font-semibold gradient-text-teal mb-6">Engagement Trends</h3>
          <Chart data={engagementData} color="#3B82F6" />
        </div>
        
        <div className="glass-card rounded-2xl p-8 card-3d float-delayed-2 fade-in-up stagger-3">
          <h3 className="text-2xl font-semibold gradient-text-green mb-6">Monthly Donations</h3>
          <Chart data={donationData} color="#10B981" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-4">
          <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { action: 'New user registration', user: 'John Smith', time: '2 minutes ago' },
              { action: 'Event RSVP confirmed', user: 'Sarah Johnson', time: '5 minutes ago' },
              { action: 'Donation received', user: 'Michael Brown', time: '10 minutes ago' },
              { action: 'Profile updated', user: 'Emily Davis', time: '15 minutes ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.action}</p>
                  <p className="text-gray-400 text-sm">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-5">
          <h3 className="text-xl font-semibold text-white mb-6">Upcoming Events</h3>
          <div className="space-y-6">
            {[
              { title: 'Class of 2020 Reunion', date: 'June 15, 2025', attendees: 45 },
              { title: 'Career Networking Event', date: 'June 20, 2025', attendees: 78 },
              { title: 'Alumni Webinar Series', date: 'June 25, 2025', attendees: 123 },
            ].map((event, index) => (
              <div key={index} className="border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-all duration-300">
                <h4 className="font-semibold text-white mb-2">{event.title}</h4>
                <p className="text-sm text-gray-300 mb-1">{event.date}</p>
                <p className="text-sm text-blue-400 font-medium">{event.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-6">
          <h3 className="text-xl font-semibold text-white mb-6">Top Donors</h3>
          <div className="space-y-6">
            {[
              { name: 'Robert Wilson', amount: '$25,000', type: 'Major Donor' },
              { name: 'Jennifer Martinez', amount: '$15,000', type: 'Annual Donor' },
              { name: 'David Lee', amount: '$12,500', type: 'Corporate Donor' },
              { name: 'Lisa Anderson', amount: '$10,000', type: 'Regular Donor' },
            ].map((donor, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div>
                  <p className="font-semibold text-white">{donor.name}</p>
                  <p className="text-sm text-gray-400">{donor.type}</p>
                </div>
                <p className="font-bold text-green-400 text-lg">{donor.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;