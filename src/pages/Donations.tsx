import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Target, Gift, Calendar } from 'lucide-react';
import Chart from '../components/Chart';

const Donations: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const donationData = [
    { month: 'Jan', value: 85000 },
    { month: 'Feb', value: 92000 },
    { month: 'Mar', value: 78000 },
    { month: 'Apr', value: 125000 },
    { month: 'May', value: 138000 },
    { month: 'Jun', value: 142000 },
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Annual Scholarship Fund',
      goal: 500000,
      raised: 387500,
      donors: 234,
      endDate: '2025-12-31',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Library Renovation Project',
      goal: 250000,
      raised: 198750,
      donors: 156,
      endDate: '2025-09-30',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Emergency Student Support',
      goal: 100000,
      raised: 100000,
      donors: 89,
      endDate: '2025-06-30',
      status: 'Completed',
    },
  ];

  const recentDonations = [
    { donor: 'Robert Wilson', amount: 25000, date: '2025-01-12', campaign: 'Annual Scholarship Fund' },
    { donor: 'Jennifer Martinez', amount: 15000, date: '2025-01-11', campaign: 'Library Renovation' },
    { donor: 'David Lee', amount: 12500, date: '2025-01-10', campaign: 'Annual Scholarship Fund' },
    { donor: 'Lisa Anderson', amount: 10000, date: '2025-01-09', campaign: 'Student Support' },
  ];

  const stats = [
    { label: 'Total Raised', value: '$1.2M', change: '+18.5%', icon: DollarSign },
    { label: 'This Month', value: '$142K', change: '+12.3%', icon: TrendingUp },
    { label: 'Total Donors', value: '1,847', change: '+5.7%', icon: Users },
    { label: 'Avg. Donation', value: '$650', change: '+8.2%', icon: Gift },
  ];

  return (
    <div className="p-10 min-h-screen">
      <div className="mb-8">
        <h1 className="text-5xl font-bold gradient-text mb-4 fade-in-up">Donations & Fundraising</h1>
        <p className="text-xl text-gray-300 fade-in-up stagger-1">Track donations, manage campaigns, and recognize donors</p>
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
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Donation Trends */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 card-3d fade-in-up stagger-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold gradient-text-green">Donation Trends</h3>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 input-glass rounded-xl text-sm"
            >
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
              <option value="2years">Last 2 Years</option>
            </select>
          </div>
          <Chart data={donationData} color="#10B981" />
        </div>

        {/* Top Donors */}
        <div className="glass-card rounded-2xl p-8 card-3d fade-in-up stagger-3">
          <h3 className="text-xl font-semibold text-white mb-6">Top Donors This Month</h3>
          <div className="space-y-6">
            {recentDonations.slice(0, 4).map((donation, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div>
                  <p className="font-semibold text-white">{donation.donor}</p>
                  <p className="text-sm text-gray-400">{donation.campaign}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-400 text-lg">${donation.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{donation.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="glass-card rounded-2xl shadow-professional mb-12 fade-in-up stagger-4">
        <div className="p-8 border-b border-white/10">
          <h3 className="text-2xl font-semibold gradient-text-green">Active Campaigns</h3>
        </div>
        <div className="p-8">
          <div className="space-y-8">
            {campaigns.map((campaign) => {
              const progress = (campaign.raised / campaign.goal) * 100;
              return (
                <div key={campaign.id} className="border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">{campaign.name}</h4>
                      <div className="flex items-center space-x-6 text-sm text-gray-300 mt-2">
                        <span className="flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-400" />
                          Goal: ${campaign.goal.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-5 h-5 mr-2 text-purple-400" />
                          {campaign.donors} donors
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-orange-400" />
                          Ends: {campaign.endDate}
                        </span>
                      </div>
                    </div>
                    <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-xl ${
                      campaign.status === 'Active' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-400">Progress</span>
                      <span className="font-bold text-white text-lg">
                        ${campaign.raised.toLocaleString()} ({progress.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full transition-all duration-500 shadow-lg"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400 font-medium">
                      ${(campaign.goal - campaign.raised).toLocaleString()} remaining
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 text-sm glass rounded-xl text-gray-300 hover:text-white transition-all duration-300">
                        View Details
                      </button>
                      <button className="px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                        Promote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="glass-card rounded-2xl shadow-professional fade-in-up stagger-5">
        <div className="p-8 border-b border-white/10">
          <h3 className="text-2xl font-semibold gradient-text-green">Recent Donations</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="glass">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase">Donor</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase">Campaign</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {recentDonations.map((donation, index) => (
                <tr key={index} className="table-row">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                        {donation.donor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-semibold text-white">{donation.donor}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-xl font-bold text-green-400">
                      ${donation.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {donation.campaign}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {donation.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-green-400 hover:text-green-300 font-medium mr-4 transition-colors duration-300">
                      Send Receipt
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donations;