import React from 'react';

export default function Footer() {
  const date = new Date();
  return (
    <div className="flex w-full justify-center space-x-2 bg-slate-100 p-5 text-center text-gray-400">
      <div>Copyright {date.getFullYear()} All rights reserved</div>
    </div>
  );
}
