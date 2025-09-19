import React, { useState } from 'react';
import { Search, Filter, Download, Upload, Tag, MapPin, Calendar, Building } from 'lucide-react';

const AlumniData: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const alumni = [
    {
      id: 1,
      name: 'Alice Johnson',
      graduationYear: 2018,
      degree: 'Computer Science',
      location: 'San Francisco, CA',
      industry: 'Technology',
      company: 'Google',
      tags: ['Mentor', 'Tech Leader'],
      email: 'alice.johnson@email.com',
      phone: '+1-555-0123',
      linkedin: 'linkedin.com/in/alicejohnson',
    },
    {
      id: 2,
      name: 'David Chen',
      graduationYear: 2015,
      degree: 'Business Administration',
      location: 'New York, NY',
      industry: 'Finance',
      company: 'Goldman Sachs',
      tags: ['Donor', 'Board Member'],
      email: 'david.chen@email.com',
      phone: '+1-555-0124',
      linkedin: 'linkedin.com/in/davidchen',
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      graduationYear: 2020,
      degree: 'Marketing',
      location: 'Austin, TX',
      industry: 'Marketing',
      company: 'Adobe',
      tags: ['Young Alumni', 'Volunteer'],
      email: 'maria.rodriguez@email.com',
      phone: '+1-555-0125',
      linkedin: 'linkedin.com/in/mariarodriguez',
    },
  ];

  const stats = [
    { label: 'Total Alumni', value: '12,847', icon: Calendar },
    { label: 'Active Profiles', value: '8,921', icon: Tag },
    { label: 'Cities Represented', value: '247', icon: MapPin },
    { label: 'Industries', value: '45', icon: Building },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alumni Data Management</h1>
        <p className="text-gray-600 mt-2">Manage and analyze alumni profiles, data integrity, and segmentation</p>
      </div>

      {/* Stats Cards */}
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
                <div className="p-3 bg-emerald-50 rounded-full">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search alumni..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="all">All Years</option>
                <option value="2020">Class of 2020</option>
                <option value="2019">Class of 2019</option>
                <option value="2018">Class of 2018</option>
                <option value="2017">Class of 2017</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option value="all">All Industries</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Advanced Filters
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </button>
              <button className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Alumni Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {alumni.map((person) => (
              <div key={person.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-medium">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{person.name}</h3>
                      <p className="text-sm text-gray-500">Class of {person.graduationYear}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {person.tags.map((tag, index) => (
                      <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="w-4 h-4 mr-2" />
                    {person.company} - {person.industry}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {person.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {person.degree}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    <p>{person.email}</p>
                    <p>{person.phone}</p>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Quality Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Quality Issues</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-yellow-800">Duplicate Profiles</p>
                <p className="text-sm text-yellow-600">12 potential duplicates found</p>
              </div>
              <button className="text-yellow-700 hover:text-yellow-800 font-medium">Review</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div>
                <p className="font-medium text-red-800">Outdated Information</p>
                <p className="text-sm text-red-600">347 profiles need updates</p>
              </div>
              <button className="text-red-700 hover:text-red-800 font-medium">Review</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-800">Missing Contact Info</p>
                <p className="text-sm text-blue-600">89 profiles incomplete</p>
              </div>
              <button className="text-blue-700 hover:text-blue-800 font-medium">Review</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <button className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Tag className="w-5 h-5 mr-3 text-gray-400" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Bulk Tag Assignment</p>
                <p className="text-sm text-gray-500">Add tags to multiple alumni</p>
              </div>
            </button>
            <button className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Upload className="w-5 h-5 mr-3 text-gray-400" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Data Import</p>
                <p className="text-sm text-gray-500">Import alumni data from CSV</p>
              </div>
            </button>
            <button className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-5 h-5 mr-3 text-gray-400" />
              <div className="text-left">
                <p className="font-medium text-gray-900">Generate Report</p>
                <p className="text-sm text-gray-500">Export filtered alumni data</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniData;