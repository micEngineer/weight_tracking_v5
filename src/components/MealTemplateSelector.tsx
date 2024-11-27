import React, { useState } from 'react';
import { BookTemplate, Check } from 'lucide-react';
import type { MealTemplate, FoodEntry } from '../types';
import { mealTemplates } from '../utils/mealTemplates';

interface MealTemplateSelectorProps {
  selectedMeal: FoodEntry['meal'];
  onSelect: (template: MealTemplate) => void;
}

export function MealTemplateSelector({ selectedMeal, onSelect }: MealTemplateSelectorProps) {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const filteredTemplates = mealTemplates.filter(template => template.meal === selectedMeal);

  const handleTemplateClick = (template: MealTemplate) => {
    setSelectedTemplateId(template.id);
    onSelect(template);

    // Reset the selection after a delay for visual feedback
    setTimeout(() => {
      setSelectedTemplateId(null);
    }, 1000);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <BookTemplate className="h-4 w-4" />
        <span>テンプレートから選択</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {filteredTemplates.map((template) => {
          const isSelected = selectedTemplateId === template.id;
          
          return (
            <button
              key={template.id}
              onClick={() => handleTemplateClick(template)}
              className={`relative text-left p-3 rounded-lg border transition-all duration-200 ${
                isSelected
                  ? 'border-violet-500 bg-violet-50 shadow-md transform scale-[0.98]'
                  : 'border-gray-200 hover:border-violet-500 hover:bg-violet-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900">{template.name}</h4>
                {isSelected && (
                  <span className="flex items-center justify-center w-5 h-5 bg-violet-500 rounded-full">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 line-clamp-2 mt-1">{template.description}</p>
              {template.calories && (
                <p className="text-sm text-violet-600 mt-1">{template.calories}kcal</p>
              )}
              
              {/* Selection overlay with animation */}
              <div
                className={`absolute inset-0 border-2 border-violet-500 rounded-lg transition-opacity duration-200 ${
                  isSelected ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}