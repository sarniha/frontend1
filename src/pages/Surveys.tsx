import React from 'react';
import { FileText, BarChart3, Users, Clock } from 'lucide-react';

const Surveys: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Surveys & Feedback</h1>
        <p className="text-gray-600 mt-2">Create surveys, collect feedback, and analyze responses</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Surveys & Feedback Management</h2>
        <p className="text-gray-600 mb-6">This feature is coming soon. You'll be able to create surveys, distribute them to alumni, and analyze responses.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Get Notified When Ready
        </button>
      </div>
    </div>
  );
};

export default Surveys;