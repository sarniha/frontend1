import React, { useState } from 'react';
import { Mail, Send, MessageSquare, Users, BookTemplate as Template, History } from 'lucide-react';

const Communications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('compose');

  const templates = [
    { id: 1, name: 'Event Invitation', type: 'Email', lastUsed: '2025-01-10' },
    { id: 2, name: 'Welcome Message', type: 'Email', lastUsed: '2025-01-08' },
    { id: 3, name: 'Donation Thank You', type: 'Email', lastUsed: '2025-01-05' },
    { id: 4, name: 'Event Reminder', type: 'SMS', lastUsed: '2025-01-07' },
  ];

  const campaigns = [
    {
      id: 1,
      name: 'June 2025 Newsletter',
      type: 'Email',
      recipients: 8921,
      sent: '2025-01-10',
      opened: 6847,
      clicked: 1234,
      status: 'Sent',
    },
    {
      id: 2,
      name: 'Event Reminder - Reunion',
      type: 'SMS',
      recipients: 145,
      sent: '2025-01-09',
      opened: 142,
      clicked: 89,
      status: 'Sent',
    },
  ];

  const stats = [
    { label: 'Messages Sent', value: '45,213', icon: Send },
    { label: 'Open Rate', value: '76.8%', icon: Mail },
    { label: 'Click Rate', value: '14.2%', icon: MessageSquare },
    { label: 'Active Subscribers', value: '8,921', icon: Users },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Communications</h1>
        <p className="text-gray-600 mt-2">Manage bulk messaging, templates, and communication history</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-full">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['compose', 'templates', 'campaigns', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'compose' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message Type</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input type="radio" name="type" value="email" defaultChecked className="mr-2" />
                          Email
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="type" value="sms" className="mr-2" />
                          SMS
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>All Alumni (8,921)</option>
                        <option>Class of 2020 (1,245)</option>
                        <option>Class of 2019 (1,187)</option>
                        <option>Mentors (234)</option>
                        <option>Donors (567)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter email subject"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={8}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Template className="w-4 h-4 mr-2" />
                        Use Template
                      </button>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          Save Draft
                        </button>
                        <button className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                          <Send className="w-4 h-4 mr-2" />
                          Send Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Message Preview</h3>
                  <div className="bg-white rounded border p-3 text-sm">
                    <div className="border-b pb-2 mb-3">
                      <p className="font-medium">Subject: Your subject here</p>
                      <p className="text-gray-500">To: Selected recipients</p>
                    </div>
                    <p className="text-gray-700">Your message content will appear here...</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Message Templates</h3>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Create Template
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{template.type} Template</p>
                    <p className="text-xs text-gray-400 mt-2">Last used: {template.lastUsed}</p>
                    <div className="flex justify-end space-x-2 mt-3">
                      <button className="text-sm text-purple-600 hover:text-purple-700">Edit</button>
                      <button className="text-sm text-purple-600 hover:text-purple-700">Use</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'campaigns' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Recent Campaigns</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Campaign</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Recipients</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sent Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Open Rate</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {campaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">{campaign.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{campaign.type}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{campaign.recipients.toLocaleString()}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">{campaign.sent}</td>
                        <td className="px-4 py-4 text-sm text-gray-500">
                          {((campaign.opened / campaign.recipients) * 100).toFixed(1)}%
                        </td>
                        <td className="px-4 py-4">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {campaign.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Communication History</h3>
              <div className="space-y-3">
                {[
                  { type: 'Email', title: 'June 2025 Newsletter', recipients: 8921, date: '2025-01-10 14:30' },
                  { type: 'SMS', title: 'Event Reminder', recipients: 145, date: '2025-01-09 16:15' },
                  { type: 'Email', title: 'Donation Campaign', recipients: 567, date: '2025-01-08 10:00' },
                  { type: 'Email', title: 'Welcome Message', recipients: 23, date: '2025-01-07 09:30' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        item.type === 'Email' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {item.type === 'Email' ? (
                          <Mail className="w-4 h-4 text-blue-600" />
                        ) : (
                          <MessageSquare className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.recipients} recipients • {item.date}</p>
                      </div>
                    </div>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communications;