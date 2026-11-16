import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import type { TabId } from '../types';

interface TabItem {
  id: TabId;
  label: string;
}

const TABS: TabItem[] = [
  { id: 'home', label: 'Hôm nay' },
  { id: 'schedule', label: 'Lịch' },
  { id: 'academics', label: 'Học tập' },
  { id: 'services', label: 'Dịch vụ' },
  { id: 'profile', label: 'Cá nhân' },
];

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, isDarkMode } = useTheme();

  return (
    <nav
      className={`w-full border-t flex items-center justify-around px-2 pt-2 pb-1 select-none transition-colors duration-200 ${
        isDarkMode
          ? 'bg-[#1E2025] border-[#2A2D35]'
          : 'bg-white border-[#EAECF0]'
      }`}
    >
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        const activeColor = '#F36A21';
        const inactiveColor = isDarkMode ? '#8E95A2' : '#5E646F';
        const color = isActive ? activeColor : inactiveColor;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 flex flex-col items-center justify-center py-1 transition-transform active:scale-95 focus:outline-none"
            aria-label={tab.label}
          >
            <div className="h-6 flex items-center justify-center mb-1">
              {tab.id === 'home' && (
                <svg
                  className="w-5 h-5 transition-colors duration-150"
                  viewBox="0 0 24 24"
                  fill={isActive ? color : 'none'}
                  stroke={color}
                  strokeWidth={isActive ? '0.5' : '1.8'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10.25L12 3l9 7.25V20a1.5 1.5 0 0 1-1.5 1.5h-4.5a1 1 0 0 1-1-1v-4a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5v4a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 20v-9.75z" />
                </svg>
              )}

              {tab.id === 'schedule' && (
                <svg
                  className="w-5 h-5 transition-colors duration-150"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={color}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4.5" width="18" height="16.5" rx="3" />
                  <line x1="16" y1="2" x2="16" y2="5" />
                  <line x1="8" y1="2" x2="8" y2="5" />
                  <line x1="3" y1="9.5" x2="21" y2="9.5" />
                  <path d="M8 14h4" />
                </svg>
              )}

              {tab.id === 'academics' && (
                <svg
                  className="w-5 h-5 transition-colors duration-150"
                  viewBox="0 0 24 24"
                  fill={isActive ? color : 'none'}
                  stroke={color}
                  strokeWidth={isActive ? '0.5' : '1.8'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              )}

              {tab.id === 'services' && (
                <svg
                  className="w-5 h-5 transition-colors duration-150"
                  viewBox="0 0 24 24"
                  fill={isActive ? color : 'none'}
                  stroke={color}
                  strokeWidth={isActive ? '0.5' : '1.8'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.5" />
                  <rect x="14" y="3.5" width="6.5" height="6.5" rx="1.5" />
                  <rect x="3.5" y="14" width="6.5" height="6.5" rx="1.5" />
                  <rect x="14" y="14" width="6.5" height="6.5" rx="1.5" />
                </svg>
              )}

              {tab.id === 'profile' && (
                <svg
                  className="w-5 h-5 transition-colors duration-150"
                  viewBox="0 0 24 24"
                  fill={isActive ? color : 'none'}
                  stroke={color}
                  strokeWidth={isActive ? '0.5' : '1.8'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )}
            </div>
            <span
              className={`text-[11px] tracking-tight leading-none transition-colors duration-150 ${
                isActive ? 'font-semibold' : 'font-normal'
              }`}
              style={{ color }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
