import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import type { WeightEntry } from '../types';

interface WeightEntryFormProps {
  onSubmit: (entry: Omit<WeightEntry, 'id'>) => void;
}

export function WeightEntryForm({ onSubmit }: WeightEntryFormProps) {
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date(),
      weight: Number(weight),
    });
    setWeight('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-2 bg-violet-100 rounded-lg">
            <Scale className="h-5 w-5 text-violet-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">体重を記録</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">体重 (kg)</label>
            <input
              type="number"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded-lg border-gray-200 focus:border-violet-500 focus:ring-violet-500 transition-colors"
              placeholder="例：60.5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors"
          >
            <Scale className="h-5 w-5 mr-2" />
            記録する
          </button>
        </div>
      </div>
    </form>
  );
}