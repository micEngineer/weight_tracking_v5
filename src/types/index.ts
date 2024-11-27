export interface FoodEntry {
  id: string;
  date: Date;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  description: string;
  calories?: number;
}

export interface WeightEntry {
  id: string;
  date: Date;
  weight: number;
}

export interface MealTemplate {
  id: string;
  meal: FoodEntry['meal'];
  name: string;
  description: string;
  calories?: number;
}