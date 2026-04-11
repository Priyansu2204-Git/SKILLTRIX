import React from 'react';
import { Button } from '../ui';

export const WelcomeBanner = () => {
  return (
    <div className="bg-white/20 backdrop-blur-xl px-4 sm:px-8 lg:px-12 py-8 border-b border-white/30">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">Welcome back, Anjali 👋</h1>
          <p className="text-slate-600 font-medium text-sm mt-2">Keep learning, you're doing great!</p>
        </div>
        <Button size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
          Create Course
        </Button>
      </div>
    </div>
  );
};
