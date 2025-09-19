import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import AlumniData from './pages/AlumniData';
import EventManagement from './pages/EventManagement';
import Communications from './pages/Communications';
import Donations from './pages/Donations';
import Analytics from './pages/Analytics';
import CareerServices from './pages/CareerServices';
import Surveys from './pages/Surveys';
import Security from './pages/Security';
import Reports from './pages/Reports';
import Volunteers from './pages/Volunteers';
import Integrations from './pages/Integrations';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserManagement />;
      case 'alumni':
        return <AlumniData />;
      case 'events':
        return <EventManagement />;
      case 'communications':
        return <Communications />;
      case 'donations':
        return <Donations />;
      case 'analytics':
        return <Analytics />;
      case 'careers':
        return <CareerServices />;
      case 'surveys':
        return <Surveys />;
      case 'security':
        return <Security />;
      case 'reports':
        return <Reports />;
      case 'volunteers':
        return <Volunteers />;
      case 'integrations':
        return <Integrations />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-transparent">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;