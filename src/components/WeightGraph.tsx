import React from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { WeightEntry } from '../types';

interface WeightGraphProps {
  entries: WeightEntry[];
}

export function WeightGraph({ entries }: WeightGraphProps) {
  const sortedEntries = [...entries].sort((a, b) => a.date.getTime() - b.date.getTime());

  const data = sortedEntries.map((entry) => ({
    date: entry.date,
    weight: entry.weight,
    formattedDate: format(entry.date, 'M/d HH:mm', { locale: ja }),
  }));

  const weights = entries.map((entry) => entry.weight);
  const minWeight = Math.floor(Math.min(...weights) - 1);
  const maxWeight = Math.ceil(Math.max(...weights) + 1);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="formattedDate"
              angle={-45}
              textAnchor="end"
              height={70}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              stroke="#9CA3AF"
            />
            <YAxis
              domain={[minWeight, maxWeight]}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              stroke="#9CA3AF"
              label={{
                value: '体重 (kg)',
                angle: -90,
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#6B7280' }
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              formatter={(value: number) => [`${value} kg`, '体重']}
              labelFormatter={(label) => `${label}`}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{
                fill: '#8B5CF6',
                strokeWidth: 2,
                r: 4,
                strokeDasharray: '',
              }}
              activeDot={{
                r: 6,
                stroke: '#8B5CF6',
                strokeWidth: 2,
                fill: '#EDE9FE',
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}