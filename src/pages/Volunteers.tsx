import React from 'react';
import { Heart, Users, Award, Calendar } from 'lucide-react';

const Volunteers: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Volunteer & Community Management</h1>
        <p className="text-gray-600 mt-2">Manage volunteer opportunities and track community engagement</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Volunteer Management</h2>
        <p className="text-gray-600 mb-6">Coordinate volunteer opportunities, track participation, and recognize outstanding community contributions.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Manage Volunteers
        </button>
      </div>
    </div>
  );
};

export default Volunteers;