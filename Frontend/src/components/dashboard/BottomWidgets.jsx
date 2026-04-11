import React from 'react';
import { FileCheck, BookOpen, ExternalLink, LifeBuoy, Ticket } from 'lucide-react';
import { Card, CardTitle, CardContent, Badge, Button } from '../ui';
import { useApp } from '../../context/AppContext';

export const BottomWidgets = () => {
  const { DASHBOARD_ASSIGNMENTS, DASHBOARD_OBJECTIVES, DASHBOARD_INTERNSHIPS } = useApp();

  return (
    <div className="px-0 pb-12 mt-8 lg:mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Assignments */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-6 flex items-center gap-3">
              <FileCheck className="text-purple-500 w-5 h-5" /> Assignments
            </CardTitle>
            <div className="space-y-4">
              {DASHBOARD_ASSIGNMENTS.map((item) => (
                <div key={item.title} className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-slate-800 text-sm">{item.title}</p>
                    <p className="text-slate-600 text-xs font-bold mt-1">{item.date}</p>
                  </div>
                  <Badge variant={item.color}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Courses Bottom (Objectives) */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-6 flex items-center gap-3">
              <BookOpen className="text-purple-500 w-5 h-5" /> Objectives
            </CardTitle>
            <div className="space-y-4">
              {DASHBOARD_OBJECTIVES.map((item) => (
                <div key={item.title} className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-slate-800 text-sm">{item.title}</p>
                    <p className="text-slate-600 text-xs font-bold mt-1">{item.date}</p>
                  </div>
                  <Badge variant={item.color}>{item.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Internships */}
        <Card>
          <CardContent className="pt-6">
            <CardTitle className="mb-6 flex items-center gap-3">
              <ExternalLink className="text-purple-500 w-5 h-5" /> Internships
            </CardTitle>
            <div className="space-y-4">
              <div className="p-4 bg-purple-100/50 rounded-lg border border-purple-300">
                <h4 className="font-black text-slate-800 text-sm">{DASHBOARD_INTERNSHIPS.title}</h4>
                <p className="text-slate-600 text-xs font-bold mt-2 uppercase">{DASHBOARD_INTERNSHIPS.company}</p>
                <p className="text-slate-600 text-xs font-bold mt-1">{DASHBOARD_INTERNSHIPS.type}</p>
                <p className="text-slate-800 text-xs font-black mt-2">{DASHBOARD_INTERNSHIPS.salary}</p>
              </div>
              <Button className="w-full text-sm">
                {DASHBOARD_INTERNSHIPS.status}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <div className="bg-purple-600 p-8 rounded-2xl relative overflow-hidden shadow-2xl flex flex-col justify-center">
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
  );
};
