import React from 'react';

interface ChartProps {
  data: Array<{ month: string; value: number }>;
  color: string;
}

const Chart: React.FC<ChartProps> = ({ data, color }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <div className="w-full h-80">
      <div className="flex items-end justify-between h-64 chart-container">
        {data.map((item, index) => {
          const height = range > 0 ? ((item.value - minValue) / range) * 100 : 50;
          return (
            <div key={index} className="flex flex-col items-center flex-1 mx-2">
              <div
                className="w-full rounded-t-xl transition-all hover:scale-105 cursor-pointer relative group shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
                  height: `${Math.max(height, 5)}%`,
                  minHeight: '8px',
                  boxShadow: `0 4px 20px ${color}40`
                }}
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {typeof item.value === 'number' && item.value > 1000 
                    ? `$${(item.value / 1000).toFixed(0)}k` 
                    : item.value.toString()}
                </div>
              </div>
              <span className="text-sm text-gray-300 mt-3 font-medium">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;