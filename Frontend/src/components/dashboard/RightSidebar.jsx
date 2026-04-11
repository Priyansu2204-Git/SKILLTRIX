import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardTitle, CardContent, Avatar } from '../ui';
import { useApp } from '../../context/AppContext';

export const RightSidebar = () => {
  const { DASHBOARD_MESSAGES } = useApp();

  return (
    <div className="w-full xl:w-[350px] flex-shrink-0 space-y-8 xl:mt-0 mt-8">
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
      <Card>
        <CardContent className="pt-6">
          <CardTitle className="mb-6">Messages</CardTitle>
          <div className="space-y-4">
            {DASHBOARD_MESSAGES.map((chat) => (
              <div key={chat.name} className="flex items-center gap-3 cursor-pointer hover:bg-white/40 p-2 rounded-lg transition-all">
                <Avatar name={chat.name} />
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm truncate">{chat.name}</p>
                  <p className="text-slate-600 text-xs font-bold truncate">{chat.msg}</p>
                </div>
                <span className="text-[10px] text-slate-500 font-bold whitespace-nowrap">{chat.time}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-purple-600 text-white font-black rounded-lg text-sm hover:bg-purple-700 transition-all">
            + Edit Profiles
          </button>
        </CardContent>
      </Card>
    </div>
  );
};
