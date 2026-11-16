import React from 'react';
import { useTheme } from '../theme/ThemeContext';

export const HomeIndicator: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="w-full flex justify-center py-2 pb-2.5">
      <div
        className={`w-32 h-1 rounded-full transition-colors duration-200 ${
          isDarkMode ? 'bg-[#3A3D45]' : 'bg-[#17191C]/25'
        }`}
      />
    </div>
  );
};
