import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { Coffee, Sun, Moon, Cookie } from 'lucide-react';
import type { FoodEntry } from '../types';

const mealConfig = {
  breakfast: { label: '朝食', icon: Sun, color: 'text-orange-500' },
  lunch: { label: '昼食', icon: Coffee, color: 'text-emerald-500' },
  dinner: { label: '夕食', icon: Moon, color: 'text-indigo-500' },
  snack: { label: '間食', icon: Cookie, color: 'text-pink-500' },
};

interface FoodListProps {
  entries: FoodEntry[];
}

export function FoodList({ entries }: FoodListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => {
        const { icon: Icon, label, color } = mealConfig[entry.meal];
        
        return (
          <div key={entry.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gray-50 ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="inline-block text-sm font-medium text-gray-600">
                      {label}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {format(entry.date, 'M月d日 (E) HH:mm', { locale: ja })}
                    </p>
                  </div>
                </div>
                {entry.calories && (
                  <div className="text-right">
                    <span className="text-xs text-gray-500">カロリー</span>
                    <p className="font-semibold text-violet-600">{entry.calories}kcal</p>
                  </div>
                )}
              </div>
              <p className="mt-3 text-gray-700">{entry.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}