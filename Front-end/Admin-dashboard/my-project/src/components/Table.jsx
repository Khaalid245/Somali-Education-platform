// src/components/Table.jsx
import React from 'react';

function Table({ data, columns }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="p-4 text-sm font-semibold text-gray-600 uppercase bg-gray-200 border-b">
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              {columns.map((col) => (
                <td key={col} className="p-4 text-gray-800 border-b">
                  {col === 'status' ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        row[col] === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {row[col]}
                    </span>
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
