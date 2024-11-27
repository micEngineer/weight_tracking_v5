import React from 'react';
import { Scale, Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Utensils className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Weight Tracking</h1>
              <p className="text-violet-200 text-sm">食事と体重の記録をシンプルに</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm">
            <Scale className="h-5 w-5 text-violet-200" />
            <span className="text-violet-200">毎日の健康管理をサポート</span>
          </div>
        </div>
      </div>
    </header>
  );
}