import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { ChevronRight } from 'lucide-react';

export const ServicesScreen: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex-1 px-5 pt-4 pb-6 overflow-y-auto">
      {/* Title */}
      <div className="mb-6">
        <h1
          className={`text-[26px] font-bold tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-[#17191C]'
          }`}
        >
          Dịch vụ
        </h1>
      </div>

      {/* 5 Full-Width List Rows matching 04-services.png */}
      <div className="space-y-3">
        {/* Row 1: Học phí & thanh toán */}
        <div
          className={`p-4 rounded-2xl border transition-colors flex items-center justify-between cursor-pointer active:scale-[0.99] shadow-sm ${
            isDarkMode
              ? 'bg-[#1E2025] border-[#2A2D35]'
              : 'bg-white border-[#EAECF0]'
          }`}
        >
          <div className="flex items-center space-x-3.5">
            <svg
              className={`w-5 h-5 shrink-0 ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Học phí & thanh toán
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 2: Đơn từ & thủ tục */}
        <div
          className={`p-4 rounded-2xl border transition-colors flex items-center justify-between cursor-pointer active:scale-[0.99] shadow-sm ${
            isDarkMode
              ? 'bg-[#1E2025] border-[#2A2D35]'
              : 'bg-white border-[#EAECF0]'
          }`}
        >
          <div className="flex items-center space-x-3.5">
            <svg
              className={`w-5 h-5 shrink-0 ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Đơn từ & thủ tục
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 3: Tin nhắn & hỗ trợ */}
        <div
          className={`p-4 rounded-2xl border transition-colors flex items-center justify-between cursor-pointer active:scale-[0.99] shadow-sm ${
            isDarkMode
              ? 'bg-[#1E2025] border-[#2A2D35]'
              : 'bg-white border-[#EAECF0]'
          }`}
        >
          <div className="flex items-center space-x-3.5">
            <svg
              className={`w-5 h-5 shrink-0 ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Tin nhắn & hỗ trợ
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 4: Thông báo & tin tức */}
        <div
          className={`p-4 rounded-2xl border transition-colors flex items-center justify-between cursor-pointer active:scale-[0.99] shadow-sm ${
            isDarkMode
              ? 'bg-[#1E2025] border-[#2A2D35]'
              : 'bg-white border-[#EAECF0]'
          }`}
        >
          <div className="flex items-center space-x-3.5">
            <svg
              className={`w-5 h-5 shrink-0 ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Thông báo & tin tức
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 5: Tiện ích khác */}
        <div
          className={`p-4 rounded-2xl border transition-colors flex items-center justify-between cursor-pointer active:scale-[0.99] shadow-sm ${
            isDarkMode
              ? 'bg-[#1E2025] border-[#2A2D35]'
              : 'bg-white border-[#EAECF0]'
          }`}
        >
          <div className="flex items-center space-x-3.5">
            <svg
              className={`w-5 h-5 shrink-0 ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Tiện ích khác
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
