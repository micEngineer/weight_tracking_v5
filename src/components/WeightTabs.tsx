import React, { useState } from 'react';
import { WeightEntryForm } from './WeightEntryForm';
import { WeightList } from './WeightList';
import { WeightGraph } from './WeightGraph';
import type { WeightEntry } from '../types';
import { ListFilter, LineChart } from 'lucide-react';

interface WeightTabsProps {
  entries: WeightEntry[];
  onSubmit: (entry: Omit<WeightEntry, 'id'>) => void;
}

export function WeightTabs({ entries, onSubmit }: WeightTabsProps) {
  const [activeTab, setActiveTab] = useState<'list' | 'graph'>('list');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-1">
        <nav className="flex space-x-2" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('list')}
            className={`${
              activeTab === 'list'
                ? 'bg-violet-100 text-violet-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            } flex items-center rounded-md py-2 px-3 text-sm font-medium transition-colors`}
          >
            <ListFilter className="h-4 w-4 mr-2" />
            リスト表示
          </button>
          <button
            onClick={() => setActiveTab('graph')}
            className={`${
              activeTab === 'graph'
                ? 'bg-violet-100 text-violet-700'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            } flex items-center rounded-md py-2 px-3 text-sm font-medium transition-colors`}
          >
            <LineChart className="h-4 w-4 mr-2" />
            グラフ表示
          </button>
        </nav>
      </div>

      <WeightEntryForm onSubmit={onSubmit} />

      {activeTab === 'list' ? (
        <WeightList entries={entries} />
      ) : (
        <WeightGraph entries={entries} />
      )}
    </div>
  );
}