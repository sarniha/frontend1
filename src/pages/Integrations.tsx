import React from 'react';
import { Settings, Zap, Database, Globe } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Integrations & Third-Party Sync</h1>
        <p className="text-gray-600 mt-2">Connect with external systems and manage data synchronization</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">System Integrations</h2>
        <p className="text-gray-600 mb-6">Connect with CRM systems, social media platforms, payment gateways, and other external services.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Configure Integrations
        </button>
      </div>
    </div>
  );
};

export default Integrations;