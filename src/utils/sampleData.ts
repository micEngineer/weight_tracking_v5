import { FoodEntry, WeightEntry } from '../types';

export const sampleFoodEntries: FoodEntry[] = [
  {
    id: '1',
    date: new Date('2024-03-10T07:30:00'),
    meal: 'breakfast',
    description: '納豆ごはん、味噌汁、焼き鮭、ほうれん草のお浸し',
    calories: 450,
  },
  {
    id: '2',
    date: new Date('2024-03-10T12:15:00'),
    meal: 'lunch',
    description: '海鮮丼、わかめスープ、サラダ',
    calories: 680,
  },
  {
    id: '3',
    date: new Date('2024-03-10T15:30:00'),
    meal: 'snack',
    description: '抹茶ラテ、どら焼き',
    calories: 320,
  },
  {
    id: '4',
    date: new Date('2024-03-10T19:00:00'),
    meal: 'dinner',
    description: '肉じゃが、玄米ごはん、豆腐サラダ、みかん',
    calories: 550,
  },
  {
    id: '5',
    date: new Date('2024-03-11T07:45:00'),
    meal: 'breakfast',
    description: 'トースト、スクランブルエッグ、バナナ、コーヒー',
    calories: 400,
  },
  {
    id: '6',
    date: new Date('2024-03-11T12:30:00'),
    meal: 'lunch',
    description: '親子丼、みそ汁、漬物',
    calories: 620,
  },
  {
    id: '7',
    date: new Date('2024-03-11T16:00:00'),
    meal: 'snack',
    description: 'おにぎり（梅）、緑茶',
    calories: 180,
  },
  {
    id: '8',
    date: new Date('2024-03-11T19:30:00'),
    meal: 'dinner',
    description: '焼きうどん、餃子、もやしナムル',
    calories: 750,
  },
  {
    id: '9',
    date: new Date('2024-03-12T08:00:00'),
    meal: 'breakfast',
    description: 'オートミール、ヨーグルト、りんご、プロテイン',
    calories: 380,
  },
  {
    id: '10',
    date: new Date('2024-03-12T12:45:00'),
    meal: 'lunch',
    description: '焼き魚定食（さば）、小鉢3品',
    calories: 580,
  },
];

export const sampleWeightEntries: WeightEntry[] = [
  {
    id: '1',
    date: new Date('2024-03-10T06:00:00'),
    weight: 65.2,
  },
  {
    id: '2',
    date: new Date('2024-03-10T20:00:00'),
    weight: 65.8,
  },
  {
    id: '3',
    date: new Date('2024-03-11T06:30:00'),
    weight: 65.3,
  },
  {
    id: '4',
    date: new Date('2024-03-11T20:30:00'),
    weight: 65.9,
  },
  {
    id: '5',
    date: new Date('2024-03-12T06:15:00'),
    weight: 65.1,
  },
  {
    id: '6',
    date: new Date('2024-03-12T20:15:00'),
    weight: 65.7,
  },
  {
    id: '7',
    date: new Date('2024-03-13T06:45:00'),
    weight: 65.4,
  },
  {
    id: '8',
    date: new Date('2024-03-13T20:45:00'),
    weight: 65.8,
  },
  {
    id: '9',
    date: new Date('2024-03-14T06:30:00'),
    weight: 65.2,
  },
  {
    id: '10',
    date: new Date('2024-03-14T20:30:00'),
    weight: 65.6,
  },
];