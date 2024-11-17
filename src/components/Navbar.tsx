import React, { useState } from 'react';
import { Scale, Users, BookOpen } from 'lucide-react';

interface Tab {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'derechos', title: 'Derechos Fundamentales', icon: <Scale className="w-5 h-5" /> },
  { id: 'registro', title: 'Registro Internacional', icon: <Users className="w-5 h-5" /> },
  { id: 'recursos', title: 'Recursos Legales', icon: <BookOpen className="w-5 h-5" /> },
];

export default function Navbar({ activeTab, setActiveTab }: { 
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-xl font-bold">RIPIAF</h1>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:bg-blue-500'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}