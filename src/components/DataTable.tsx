import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  render?: (item: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      const result = aValue.localeCompare(bValue);
      return sortOrder === 'asc' ? result : -result;
    }
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      const result = aValue - bValue;
      return sortOrder === 'asc' ? result : -result;
    }
    
    return 0;
  });

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="w-full">
        <thead className="glass">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-white/5 transition-all duration-300"
                onClick={() => handleSort(column.key)}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.header}</span>
                  {sortKey === column.key && (
                    sortOrder === 'asc' ? 
                      <ChevronUp className="w-4 h-4 text-blue-400" /> : 
                      <ChevronDown className="w-4 h-4 text-blue-400" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {sortedData.map((item, index) => (
            <tr key={index} className="table-row">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 whitespace-nowrap text-gray-300">
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;