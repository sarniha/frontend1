import React from 'react';
import { Briefcase, Users, TrendingUp, MapPin, Building, Clock } from 'lucide-react';

const CareerServices: React.FC = () => {
  const stats = [
    { label: 'Active Job Postings', value: '127', icon: Briefcase },
    { label: 'Alumni Mentors', value: '342', icon: Users },
    { label: 'Placements This Year', value: '89', icon: TrendingUp },
    { label: 'Partner Companies', value: '45', icon: Building },
  ];

  const jobPostings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      postedBy: 'Alumni Network',
      postedDate: '2025-01-10',
      applications: 12,
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Growth Inc',
      location: 'New York, NY',
      type: 'Full-time',
      postedBy: 'Career Services',
      postedDate: '2025-01-09',
      applications: 8,
    },
    {
      id: 3,
      title: 'Data Analyst Intern',
      company: 'Analytics Plus',
      location: 'Remote',
      type: 'Internship',
      postedBy: 'Alumni Network',
      postedDate: '2025-01-08',
      applications: 15,
    },
  ];

  const mentorships = [
    {
      mentor: 'Sarah Johnson',
      mentee: 'Alex Chen',
      field: 'Technology',
      status: 'Active',
      startDate: '2025-01-01',
    },
    {
      mentor: 'Michael Rodriguez',
      mentee: 'Emily Davis',
      field: 'Marketing',
      status: 'Active',
      startDate: '2024-12-15',
    },
    {
      mentor: 'David Wilson',
      mentee: 'Jennifer Liu',
      field: 'Finance',
      status: 'Completed',
      startDate: '2024-11-01',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Career Services Management</h1>
        <p className="text-gray-600 mt-2">Manage job postings, mentorship programs, and career resources</p>
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
                <div className="p-3 bg-indigo-50 rounded-full">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Job Postings */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Recent Job Postings</h3>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Post Job
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {jobPostings.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {job.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      job.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span>Posted by {job.postedBy}</span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.postedDate}
                      </span>
                    </div>
                    <span className="font-medium text-indigo-600">{job.applications} applications</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mentorship Programs */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Active Mentorships</h3>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Create Match
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {mentorships.map((mentorship, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {mentorship.mentor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{mentorship.mentor}</p>
                          <p className="text-xs text-gray-500">Mentor</p>
                        </div>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {mentorship.mentee.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{mentorship.mentee}</p>
                          <p className="text-xs text-gray-500">Mentee</p>
                        </div>
                      </div>
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      mentorship.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {mentorship.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Field: {mentorship.field}</span>
                    <span>Started: {mentorship.startDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Career Resources */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Career Resources & Tools</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Job Search Tools</h4>
              <p className="text-sm text-gray-600 mb-4">Access to job boards, resume builders, and interview prep</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">Manage Tools</button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Networking Events</h4>
              <p className="text-sm text-gray-600 mb-4">Career fairs, industry meetups, and networking sessions</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">Schedule Events</button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Success Tracking</h4>
              <p className="text-sm text-gray-600 mb-4">Monitor career progress and alumni achievements</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">View Analytics</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerServices;