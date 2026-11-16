import React from 'react';
import { useTheme } from '../theme/ThemeContext';

export const StatusBar: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full h-11 px-6 flex items-center justify-between text-xs font-semibold select-none transition-colors duration-200 ${
        isDarkMode ? 'text-white' : 'text-[#17191C]'
      }`}
    >
      <span className="font-semibold text-[15px] tracking-tight">09:41</span>
      <div className="flex items-center space-x-1.5">
        {/* Cellular signal */}
        <svg className="w-4 h-3.5" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0.5" y="8.5" width="2.5" height="3.5" rx="0.5" />
          <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" />
          <rect x="8.5" y="3.5" width="2.5" height="8.5" rx="0.5" />
          <rect x="12.5" y="0.5" width="2.5" height="11.5" rx="0.5" />
        </svg>

        {/* Wi-Fi */}
        <svg className="w-4 h-3.5" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4.24-3.54a6 6 0 018.48 0l-1.06 1.06a4.5 4.5 0 00-6.36 0L3.76 5.96zm-2.83-2.83a10 10 0 0114.14 0l-1.06 1.06a8.5 8.5 0 00-12.02 0L.93 3.13z" />
        </svg>

        {/* Battery */}
        <div className="flex items-center">
          <div className="w-5 h-2.5 rounded-[4px] border border-current p-0.5 flex items-center">
            <div className="w-full h-full bg-current rounded-[2px]" />
          </div>
          <div className="w-0.5 h-1 bg-current rounded-r-sm ml-[1px]" />
        </div>
      </div>
    </div>
  );
};
