import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, Eye, Calendar, Download } from 'lucide-react';
import Chart from '../components/Chart';

const Analytics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  const engagementData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 70 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 78 },
    { month: 'Jun', value: 76 },
  ];

  const userGrowthData = [
    { month: 'Jan', value: 8450 },
    { month: 'Feb', value: 8567 },
    { month: 'Mar', value: 8698 },
    { month: 'Apr', value: 8789 },
    { month: 'May', value: 8856 },
    { month: 'Jun', value: 8921 },
  ];

  const eventAttendanceData = [
    { month: 'Jan', value: 234 },
    { month: 'Feb', value: 189 },
    { month: 'Mar', value: 267 },
    { month: 'Apr', value: 312 },
    { month: 'May', value: 298 },
    { month: 'Jun', value: 345 },
  ];

  const metrics = [
    { key: 'engagement', label: 'Engagement Rate', data: engagementData, color: '#3B82F6' },
    { key: 'users', label: 'User Growth', data: userGrowthData, color: '#10B981' },
    { key: 'events', label: 'Event Attendance', data: eventAttendanceData, color: '#F97316' },
  ];

  const stats = [
    { label: 'Total Page Views', value: '234,567', change: '+12.3%', icon: Eye },
    { label: 'Active Users', value: '8,921', change: '+5.2%', icon: Users },
    { label: 'Engagement Rate', value: '76%', change: '+3.1%', icon: TrendingUp },
    { label: 'Events Attended', value: '345', change: '+8.7%', icon: Calendar },
  ];

  const topPerformers = [
    { name: 'June Newsletter', type: 'Email', engagement: '84%', date: '2025-06-01' },
    { name: 'Career Fair 2025', type: 'Event', engagement: '92%', date: '2025-05-15' },
    { name: 'Alumni Spotlight', type: 'Social Post', engagement: '78%', date: '2025-05-28' },
    { name: 'Scholarship Announcement', type: 'Email', engagement: '89%', date: '2025-05-20' },
  ];

  return (
    <div className="p-10 min-h-screen">
      <div className="mb-8">
        <h1 className="text-5xl font-bold gradient-text mb-4 fade-in-up">Engagement Analytics</h1>
        <p className="text-xl text-gray-300 fade-in-up stagger-1">Monitor alumni engagement, participation, and growth metrics</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`glass-card rounded-2xl p-8 card-3d float fade-in-up stagger-${index + 1}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-1 mb-2">{stat.value}</p>
                  <p className="text-sm text-green-400 font-medium">{stat.change} from last month</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Chart */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 card-3d fade-in-up stagger-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold gradient-text-teal">Trends Over Time</h3>
            <div className="flex space-x-2">
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-4 py-2 input-glass rounded-xl text-sm"
              >
                {metrics.map(metric => (
                  <option key={metric.key} value={metric.key}>{metric.label}</option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 glass rounded-xl text-gray-300 hover:text-white transition-all duration-300 text-sm">
                <Download className="w-4 h-4 mr-1" />
                Export
              </button>
            </div>
          </div>
          {metrics.map(metric => (
            selectedMetric === metric.key && (
              <Chart key={metric.key} data={metric.data} color={metric.color} />
            )
          ))}
        </div>

        {/* Top Performers */}
        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-3">
          <h3 className="text-xl font-semibold text-white mb-6">Top Performers</h3>
          <div className="space-y-6">
            {topPerformers.map((item, index) => (
              <div key={index} className="border border-white/10 rounded-xl p-4 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                  <span className="text-sm font-bold text-blue-400">{item.engagement}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{item.type}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Alumni Segments */}
        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-4">
          <h3 className="text-xl font-semibold text-white mb-6">Alumni Segments</h3>
          <div className="space-y-6">
            {[
              { segment: 'Class of 2020-2025', count: 2847, percentage: 32, color: 'bg-blue-500' },
              { segment: 'Class of 2015-2019', count: 2156, percentage: 24, color: 'bg-green-500' },
              { segment: 'Class of 2010-2014', count: 1893, percentage: 21, color: 'bg-orange-500' },
              { segment: 'Class of 2005-2009', count: 1234, percentage: 14, color: 'bg-purple-500' },
              { segment: 'Before 2005', count: 837, percentage: 9, color: 'bg-gray-500' },
            ].map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${segment.color} shadow-lg`}></div>
                  <span className="text-sm font-medium text-white">{segment.segment}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{segment.count.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">{segment.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-5">
          <h3 className="text-xl font-semibold text-white mb-6">Geographic Distribution</h3>
          <div className="space-y-6">
            {[
              { location: 'California', count: 2143, percentage: 24 },
              { location: 'New York', count: 1567, percentage: 18 },
              { location: 'Texas', count: 1234, percentage: 14 },
              { location: 'Florida', count: 987, percentage: 11 },
              { location: 'Illinois', count: 743, percentage: 8 },
              { location: 'Other States', count: 2264, percentage: 25 },
            ].map((location, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <span className="text-sm font-medium text-white">{location.location}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-3 rounded-full shadow-lg transition-all duration-500"
                      style={{ width: `${location.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-300 w-16 text-right font-medium">
                    {location.count.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;