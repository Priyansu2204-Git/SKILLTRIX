import React from 'react';
import { BookOpen, LayoutDashboard, Filter } from 'lucide-react';
import { Card, Button } from '../ui';
import { useApp } from '../../context/AppContext';

export const CourseGrids = () => {
  const { DASHBOARD_CONTINUE_LEARNING, DASHBOARD_MY_COURSES } = useApp();

  return (
    <>
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-purple-600" /> Continue Learning
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DASHBOARD_CONTINUE_LEARNING.map((course) => (
            <Card key={course.title} className="overflow-hidden group hover:shadow-lg transition-all duration-500">
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
                  <Button className="w-full mt-3 text-xs" size="sm">
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col sm:flex-row flex-wrap sm:items-center justify-between mb-6 gap-4">
          <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-purple-600" /> My Courses
          </h3>
          <button className="flex items-center gap-2 text-slate-600 font-bold text-sm hover:text-purple-600 transition-colors w-fit">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DASHBOARD_MY_COURSES.map((course) => (
            <Card key={course.title} className="overflow-hidden group hover:shadow-md transition-all">
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
                <Button className="w-full text-xs" size="sm">
                  Continue
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};
