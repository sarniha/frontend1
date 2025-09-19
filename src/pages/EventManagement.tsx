import React, { useState } from 'react';
import { Calendar, Plus, MapPin, Clock, Users, Mail, BarChart3 } from 'lucide-react';
import Modal from '../components/Modal';

const EventManagement: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      title: 'Class of 2020 Reunion',
      date: '2025-06-15',
      time: '18:00',
      location: 'University Campus',
      type: 'Reunion',
      status: 'Published',
      attendees: 45,
      capacity: 100,
      rsvps: 65,
      description: 'Join us for an evening of reconnection and celebration.',
    },
    {
      id: 2,
      title: 'Career Networking Event',
      date: '2025-06-20',
      time: '19:00',
      location: 'Downtown Convention Center',
      type: 'Networking',
      status: 'Published',
      attendees: 78,
      capacity: 150,
      rsvps: 92,
      description: 'Connect with fellow alumni and explore career opportunities.',
    },
    {
      id: 3,
      title: 'Alumni Webinar: Tech Trends',
      date: '2025-06-25',
      time: '14:00',
      location: 'Virtual',
      type: 'Webinar',
      status: 'Draft',
      attendees: 0,
      capacity: 500,
      rsvps: 123,
      description: 'Latest trends in technology presented by industry leaders.',
    },
  ];

  const stats = [
    { label: 'Total Events', value: '24', icon: Calendar },
    { label: 'This Month', value: '8', icon: Calendar },
    { label: 'Total Attendees', value: '1,247', icon: Users },
    { label: 'Avg. Attendance', value: '78%', icon: BarChart3 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
        <p className="text-gray-600 mt-2">Create, manage, and track alumni events and engagement</p>
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
                <div className="p-3 bg-orange-50 rounded-full">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Event List */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        event.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.status}
                      </span>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees}/{event.capacity} attending
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-green-600 font-medium">{event.rsvps} RSVPs</span>
                    <span className="text-blue-600 font-medium">
                      {Math.round((event.attendees / event.capacity) * 100)}% capacity
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center px-3 py-1 text-gray-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4 mr-1" />
                      Send Invite
                    </button>
                    <button className="flex items-center px-3 py-1 text-gray-600 hover:text-green-600 transition-colors">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      Analytics
                    </button>
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Event Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Event"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter event title"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <input
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter location or 'Virtual'"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option value="Reunion">Reunion</option>
                <option value="Networking">Networking</option>
                <option value="Webinar">Webinar</option>
                <option value="Social">Social</option>
                <option value="Professional">Professional</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter capacity"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter event description"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Create Event
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EventManagement;