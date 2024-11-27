import React, { useState } from 'react';
import { Header } from './components/Header';
import { FoodEntryForm } from './components/FoodEntryForm';
import { WeightTabs } from './components/WeightTabs';
import { FoodList } from './components/FoodList';
import type { FoodEntry, WeightEntry } from './types';
import { sampleFoodEntries, sampleWeightEntries } from './utils/sampleData';

function App() {
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(sampleFoodEntries);
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>(sampleWeightEntries);

  const handleFoodSubmit = (entry: Omit<FoodEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    setFoodEntries((prev) => [newEntry, ...prev]);
  };

  const handleWeightSubmit = (entry: Omit<WeightEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    setWeightEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-gray-900">食事記録</h2>
              <span className="text-sm text-gray-500">毎日の食事を記録しましょう</span>
            </div>
            <FoodEntryForm onSubmit={handleFoodSubmit} />
            <FoodList entries={foodEntries} />
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-gray-900">体重記録</h2>
              <span className="text-sm text-gray-500">定期的な記録で変化を把握</span>
            </div>
            <WeightTabs entries={weightEntries} onSubmit={handleWeightSubmit} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;