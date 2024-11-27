import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { TrendingDown, TrendingUp, Scale } from 'lucide-react';
import type { WeightEntry } from '../types';

interface WeightListProps {
  entries: WeightEntry[];
}

export function WeightList({ entries }: WeightListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry, index) => {
        const prevWeight = index < entries.length - 1 ? entries[index + 1].weight : entry.weight;
        const weightDiff = entry.weight - prevWeight;
        const isIncrease = weightDiff > 0;
        const isDecrease = weightDiff < 0;
        
        return (
          <div key={entry.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="p-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-violet-100 rounded-lg">
                    <Scale className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      {format(entry.date, 'M月d日 (E) HH:mm', { locale: ja })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-semibold text-gray-900">
                    {entry.weight}kg
                  </span>
                  {index < entries.length - 1 && (
                    <div className={`flex items-center text-sm ${
                      isIncrease ? 'text-red-500' : isDecrease ? 'text-green-500' : 'text-gray-400'
                    }`}>
                      {isIncrease && <TrendingUp className="h-4 w-4 mr-1" />}
                      {isDecrease && <TrendingDown className="h-4 w-4 mr-1" />}
                      <span>{Math.abs(weightDiff).toFixed(1)}kg</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}