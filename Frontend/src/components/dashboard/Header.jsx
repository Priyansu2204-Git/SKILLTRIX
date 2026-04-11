import React from 'react';
import { LayoutDashboard, Bell, Menu, X } from 'lucide-react';
import { Avatar } from '../ui';

export const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">
      <div className="px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            className="lg:hidden text-white p-2 hover:bg-purple-500/50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden sm:flex w-10 h-10 bg-white rounded-xl items-center justify-center shadow-lg transform transition-transform hover:scale-105 text-xl">
            🚀
          </div>
          <span className="text-xl sm:text-2xl font-black text-white tracking-tight">SkillTrix</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="relative p-2 text-white hover:text-purple-100 transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">3</span>
          </button>
          <div className="border-2 border-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <Avatar name="Anjali Devi" />
          </div>
        </div>
      </div>
    </nav>
  );
};
