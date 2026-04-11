import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// Import newly created dashboard components
import { Sidebar } from '../components/dashboard/Sidebar';
import { Header } from '../components/dashboard/Header';
import { WelcomeBanner } from '../components/dashboard/WelcomeBanner';
import { StatCards } from '../components/dashboard/StatCards';
import { CourseGrids } from '../components/dashboard/CourseGrids';
import { RightSidebar } from '../components/dashboard/RightSidebar';
import { BottomWidgets } from '../components/dashboard/BottomWidgets';

const Dashboard = () => {
  const { setToken } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Optional integration for later, currently handled directly by setToken if needed in UI
    setToken(false);
    navigate('/');
  };

  return (
    <div
      className="min-h-screen bg-white font-sans overflow-x-hidden"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <div className="pt-20">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isOpen={isMobileMenuOpen}
        />

        {/* Content Wrapper */}
        <div className="lg:ml-64 flex flex-col min-h-[calc(100vh-80px)] transition-all duration-300">
          <WelcomeBanner />

          {/* Main Content Area */}
          <div className="p-4 sm:p-8 lg:p-12 pb-0">
            <StatCards />

            {/* Two Column Layout (Responsive flex-col to xl:flex-row) */}
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Left Column (Main flex-1 content) */}
              <main className="flex-1 min-w-0 flex flex-col">
                <CourseGrids />
              </main>

              {/* Right Sidebar */}
              <RightSidebar />
            </div>
          </div>

          {/* Bottom Sections Grid - Full Width Layout */}
          <div className="px-4 sm:px-8 lg:px-12">
            <BottomWidgets />
          </div>
        </div>
      </div>
      
      {/* Mobile overlay for sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;