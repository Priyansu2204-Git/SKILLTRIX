import React from 'react';
import { Card, CardContent } from '../ui';
import { useApp } from '../../context/AppContext';

export const StatCards = () => {
  const { DASHBOARD_STATS_CARDS } = useApp();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 sm:mb-12">
      {DASHBOARD_STATS_CARDS.map((stat) => (
        <Card
          key={stat.title}
          className={`transition-all duration-300 ${stat.highlight
              ? 'bg-gradient-to-br from-purple-500 to-violet-600 text-white border-purple-400/50 hover:shadow-xl'
              : 'hover:shadow-md'
            }`}
        >
          <CardContent>
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
            <p className={`text-2xl sm:text-3xl font-black tracking-tight mb-2 ${stat.highlight ? 'text-white' : 'text-slate-800'}`}>
              {stat.value}
            </p>
            <p className={`text-[10px] font-bold ${stat.highlight ? 'text-white/60' : 'text-slate-600'}`}>
              {stat.detail}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
