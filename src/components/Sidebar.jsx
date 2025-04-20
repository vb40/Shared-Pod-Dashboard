import React from 'react';

const buttons = [
  'project details',
  'team',
  'project utilisations',
  'tech used',
  'certifications',
  'contract details',
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          className="w-full text-left px-3 py-2 rounded-md hover:bg-blue-100 transition capitalize"
        >
          {btn}
        </button>
      ))}
    </aside>
  );
}
