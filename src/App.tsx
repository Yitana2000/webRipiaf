import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TabContent from './components/TabContent';

function App() {
  const [activeTab, setActiveTab] = useState('derechos');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </div>
  );
}

export default App;