import type { MealTemplate } from '../types';

export const mealTemplates: MealTemplate[] = [
  {
    id: '1',
    meal: 'breakfast',
    name: '和朝食',
    description: '納豆ごはん、味噌汁、焼き魚、ほうれん草のお浸し',
    calories: 450,
  },
  {
    id: '2',
    meal: 'breakfast',
    name: 'トースト朝食',
    description: 'トースト、スクランブルエッグ、サラダ、コーヒー',
    calories: 400,
  },
  {
    id: '3',
    meal: 'lunch',
    name: '定食',
    description: '焼き魚定食、みそ汁、小鉢3品',
    calories: 650,
  },
  {
    id: '4',
    meal: 'lunch',
    name: '麺類',
    description: 'うどん、天ぷら、サラダ',
    calories: 700,
  },
  {
    id: '5',
    meal: 'dinner',
    name: '和食',
    description: '肉じゃが、玄米ごはん、豆腐サラダ、みかん',
    calories: 550,
  },
  {
    id: '6',
    meal: 'dinner',
    name: '中華',
    description: '炒飯、餃子、中華スープ、青菜炒め',
    calories: 800,
  },
  {
    id: '7',
    meal: 'snack',
    name: '軽食',
    description: 'おにぎり、緑茶',
    calories: 180,
  },
  {
    id: '8',
    meal: 'snack',
    name: 'カフェ',
    description: '抹茶ラテ、どら焼き',
    calories: 320,
  },
];