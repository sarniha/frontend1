import React from 'react';
import { FileBarChart, Download, Calendar, TrendingUp } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Insights</h1>
        <p className="text-gray-600 mt-2">Generate custom reports and export data in various formats</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <FileBarChart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Custom Reporting</h2>
        <p className="text-gray-600 mb-6">Create detailed reports on alumni engagement, donations, events, and more. Export in PDF, CSV, or Excel formats.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Create Report
        </button>
      </div>
    </div>
  );
};

export default Reports;