import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileCheck,
  Video,
  Calendar,
  BarChart3,
  MessageSquare,
  User,
  Settings,
  Bell,
  Search,
  Plus,
  ChevronRight,
  TrendingUp,
  Award,
  Clock,
  ExternalLink,
  LifeBuoy,
  Ticket,
  LogOut,
  Filter
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const { setToken } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');

  const handleLogout = () => {
    setToken(false);
    navigate('/');
  };

  const SIDEBAR_ITEMS = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Course Management', icon: BookOpen },
    { name: 'Student List', icon: Users },
    { name: 'Submissions', icon: FileCheck },
    { name: 'Live Sessions', icon: Video },
    { name: 'Schedule', icon: Calendar },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Messages', icon: MessageSquare },
    { name: 'Profile', icon: User },
    { name: 'Support', icon: LifeBuoy },
  ];

  const STATS_CARDS = [
    { title: 'Progress', value: '65%', icon: TrendingUp, detail: 'Progress up by 5%', highlight: true },
    { title: 'Rect Courses', value: '52', icon: BookOpen, detail: '4 new this week' },
    { title: 'Pending Assignments', value: '3', icon: Clock, detail: 'Due within 48h' },
    { title: 'Internship Applications', value: '4', icon: FileCheck, detail: '2 in review' },
    { title: 'Certificates Earned', value: '2 120h', icon: Award, detail: 'Latest achievements' },
  ];

  const CONTINUE_LEARNING = [
    { title: 'React Development', mentor: 'John Doe', progress: 40, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80' },
    { title: 'UI/UX esign', mentor: 'Sarah Ali', progress: 40, image: 'https://images.unsplash.com/photo-1541462608141-ad4d05945035?w=400&q=80' },
    { title: 'Python Basics', mentor: 'Mark Smith', progress: 40, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80' },
    
  ];

  const MY_COURSES = [
    { title: 'React Development', mentor: 'John Doe', progress: 70, status: 'In Progress', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80' },
    { title: 'UI/UX Design', mentor: 'Sarah Ali', progress: 45, status: 'In Progress', image: 'https://images.unsplash.com/photo-1541462608141-ad4d05945035?w=500&q=80' },
    { title: 'Digital Marketing', mentor: 'Mark Smith', progress: 20, status: 'Starting', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80' },
  ];

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

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <LayoutDashboard className="text-purple-600 w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">SkillTrix</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white hover:text-purple-100 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">3</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img src="https://ui-avatars.com/api/?name=Anjali+Devi&background=a855f7&color=fff" alt="Avatar" />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white/20 backdrop-blur-md border-r border-white/30 min-h-[calc(100vh-80px)] p-6 overflow-y-auto fixed left-0 top-20 z-40">
          <div className="space-y-2">
            
            {SIDEBAR_ITEMS.map((item) => (
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

        {/* Content Wrapper */}
        <div className="ml-64 flex flex-col min-h-[calc(100vh-80px)]">
          {/* Header Section */}
          <div className="bg-white/20 backdrop-blur-xl px-12 py-8 border-b border-white/30">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-black text-slate-800 tracking-tight">Welcome back, Anjali 👋</h1>
                  <p className="text-slate-600 font-medium text-sm mt-2">Keep learning, you're doing great!</p>
                </div>
                <button className="px-6 py-3 bg-purple-600 text-white font-black rounded-lg shadow-lg hover:shadow-xl transition-all hover:bg-purple-700">
                  Create Course
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-12">
              {/* Stats Grid */}
              <div className="grid grid-cols-5 gap-4 mb-12">
                {STATS_CARDS.map((stat) => (
                  <div
                    key={stat.title}
                    className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${stat.highlight
                        ? 'bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg border-purple-400/50'
                        : 'bg-white/40 border-white/60 shadow-sm hover:shadow-md'
                      }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${stat.highlight
                          ? 'bg-white/20'
                          : 'bg-purple-100/50'
                        }`}>
                        <stat.icon className={`w-6 h-6 ${stat.highlight ? 'text-white' : 'text-purple-600'}`} />
                      </div>
                    </div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${stat.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                      {stat.title}
                    </h3>
                    <p className={`text-3xl font-black tracking-tight mb-2 ${stat.highlight ? 'text-white' : 'text-slate-800'}`}>
                      {stat.value}
                    </p>
                    <p className={`text-[10px] font-bold ${stat.highlight ? 'text-white/60' : 'text-slate-600'}`}>
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Two Column Layout */}
              <div className="flex gap-8">
                {/* Left Column */}
                <main className="flex-1 min-w-0 flex flex-col">
                  {/* Continue Learning Section */}
                  <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-purple-600" /> Continue Learning
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {CONTINUE_LEARNING.map((course) => (
                    <div
                      key={course.title}
                      className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={course.image}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          alt={course.title}
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-black text-slate-800 text-base mb-1 group-hover:text-purple-600 transition-colors truncate">
                          {course.title}
                        </h4>
                        <p className="text-slate-600 text-xs font-bold mb-4">{course.mentor}</p>
                        <div className="space-y-3">
                          <div className="flex justify-between text-xs font-black text-slate-600 uppercase">
                            <span>Progress</span>
                            <span className="text-purple-600">{course.progress}%</span>
                          </div>
                          <div className="h-2 bg-purple-100/50 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-violet-500"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <button className="w-full mt-3 py-2 bg-purple-600 text-white font-bold rounded-lg text-xs hover:bg-purple-700 transition-all duration-300">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* My Courses Section */}
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                    <LayoutDashboard className="w-6 h-6 text-purple-600" /> My Courses
                  </h3>
                  <button className="flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-purple-600 transition-colors">
                    <Filter className="w-4 h-4" /> Filter
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {MY_COURSES.map((course) => (
                    <div
                      key={course.title}
                      className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/60 overflow-hidden shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={course.image}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          alt={course.title}
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-black text-slate-800 text-base mb-1">{course.title}</h4>
                        <p className="text-slate-600 text-xs font-bold mb-4">Mentor: {course.mentor}</p>
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-xs font-black uppercase text-slate-600">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="w-full py-2 bg-purple-600 text-white font-black rounded-lg text-sm hover:bg-purple-700 transition-all duration-300">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </main>

            {/* Right Sidebar Sections */}
            <div className="w-[350px] flex-shrink-0 mt-14 space-y-8">

            {/* Certificates */}
            <div className="bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
              <h3 className="text-white font-black text-lg mb-6 tracking-tight flex items-center gap-3">
                <Award className="text-yellow-400 w-6 h-6" /> Certificates
              </h3>
              <div className="bg-white/10 rounded-xl border border-white/20 p-6 backdrop-blur-md mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">📜</div>
                  <h4 className="text-white text-base font-black">Web Development</h4>
                  <p className="text-white/50 text-[10px] font-bold mt-2 uppercase">April 2024</p>
                </div>
              </div>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-xs font-black transition-all">
                View All Certificates
              </button>
            </div>

            {/* Messages */}
            <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-sm">
              <h3 className="font-black text-slate-800 tracking-tight text-lg mb-6">Messages</h3>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', msg: 'Adjalitgmail.com', time: '1 hour ago' },
                  { name: 'Maryam', msg: 'Announcement', time: '3 days ago' },
                ].map((chat) => (
                  <div key={chat.name} className="flex items-center gap-3 cursor-pointer hover:bg-white/40 p-2 rounded-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0">
                      <img src={`https://ui-avatars.com/api/?name=${chat.name}&background=random`} alt={chat.name} className="w-full h-full rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-slate-800 text-sm">{chat.name}</p>
                      <p className="text-slate-600 text-xs font-bold truncate">{chat.msg}</p>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold whitespace-nowrap">{chat.time}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 bg-purple-600 text-white font-black rounded-lg text-sm hover:bg-purple-700 transition-all">
                + Exit Profiles
              </button>
            </div>


            </div>
          </div>

          {/* Bottom Sections Grid - Full Width */}
          <div className="px-0 pb-12">
            <div className="grid grid-cols-4 gap-6">
              {/* Assignments */}
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="font-black text-slate-800 tracking-tight text-lg mb-6 flex items-center gap-3">
                  <FileCheck className="text-purple-500 w-5 h-5" /> Assignments
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Project Report', date: 'Due Apr 20, 2024', status: 'Pending', color: 'orange' },
                    { title: 'Coding Challenge', date: 'Due Apr 3, 2024', status: 'Submitted', color: 'blue' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between">
                      <div>
                        <p className="font-black text-slate-800 text-sm">{item.title}</p>
                        <p className="text-slate-600 text-xs font-bold mt-1">{item.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black text-white ${item.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Courses Bottom */}
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="font-black text-slate-800 tracking-tight text-lg mb-6 flex items-center gap-3">
                  <BookOpen className="text-purple-500 w-5 h-5" /> My Courses
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Last achieved', date: 'Due: Apr 16, 2024', status: 'Upload', color: 'orange' },
                    { title: 'Coding Challenge', date: 'Due: Apr 18, 2024', status: 'Submitted', color: 'blue' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between">
                      <div>
                        <p className="font-black text-slate-800 text-sm">{item.title}</p>
                        <p className="text-slate-600 text-xs font-bold mt-1">{item.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black text-white ${item.color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internships */}
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-sm">
                <h3 className="font-black text-slate-800 tracking-tight text-lg mb-6 flex items-center gap-3">
                  <ExternalLink className="text-purple-500 w-5 h-5" /> Internships
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-100/50 rounded-lg border border-purple-300">
                    <h4 className="font-black text-slate-800 text-sm">Frontend Intern</h4>
                    <p className="text-slate-600 text-xs font-bold mt-2 uppercase">XYZ Corp</p>
                    <p className="text-slate-600 text-xs font-bold mt-1">Remote / Part-Time</p>
                    <p className="text-slate-800 text-xs font-black mt-2">₹ 1,00,000/month</p>
                  </div>
                  <button className="w-full py-2 bg-purple-600 text-white font-black rounded-lg text-sm hover:bg-purple-700 transition-all duration-300">
                    Applied
                  </button>
                </div>
              </div>

              {/* Support */}
              <div className="bg-purple-600 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <h3 className="text-white font-black text-lg mb-6 tracking-tight flex items-center gap-3">
                    <LifeBuoy className="w-5 h-5" /> Support
                  </h3>
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg text-purple-600 font-black text-sm tracking-tight hover:shadow-lg transition-all mb-3">
                    <LifeBuoy className="w-4 h-4" /> Contact Support
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-500/60 rounded-lg text-white font-black text-sm tracking-tight border border-purple-400/50 hover:bg-purple-500/80 transition-all">
                    <Ticket className="w-4 h-4" /> Raise Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;