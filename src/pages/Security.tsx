import React from 'react';
import { Shield, Lock, Key, Eye } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Security & Access Control</h1>
        <p className="text-gray-600 mt-2">Manage security settings, permissions, and audit logs</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Security Management</h2>
        <p className="text-gray-600 mb-6">Configure role-based permissions, 2FA, audit logs, and security policies for your alumni management system.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Configure Security
        </button>
      </div>
    </div>
  );
};

export default Security;