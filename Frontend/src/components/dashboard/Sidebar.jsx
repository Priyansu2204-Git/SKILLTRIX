import React from 'react';
import { useApp } from '../../context/AppContext';

export const Sidebar = ({ activeTab, setActiveTab, isOpen }) => {
  const { DASHBOARD_SIDEBAR_ITEMS } = useApp();
  
  return (
    <aside className={`w-64 bg-white/20 backdrop-blur-md border-r border-white/30 fixed left-0 top-20 z-40 h-[calc(100vh-80px)] p-6 overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="space-y-2">
        {DASHBOARD_SIDEBAR_ITEMS.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-bold text-sm ${activeTab === item.name
                ? 'bg-purple-600 text-white shadow-lg'
                : 'text-slate-700 hover:bg-white/40'
              }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
