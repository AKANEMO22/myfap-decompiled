import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { mockAcademicSummary } from '../fixtures/mockData';
import { ChevronRight } from 'lucide-react';

export const AcademicsScreen: React.FC = () => {
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
          Học tập
        </h1>
      </div>

      {/* GPA & Credits Summary Panel */}
      <div
        className={`p-5 rounded-2xl border mb-6 shadow-sm transition-colors ${
          isDarkMode
            ? 'bg-[#1E2025] border-[#2A2D35]'
            : 'bg-white border-[#EAECF0]'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span
              className={`text-[13px] font-medium block ${
                isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
              }`}
            >
              GPA tích lũy
            </span>
            <div className="flex items-baseline space-x-1 mt-1">
              <span className="text-[32px] font-bold text-[#F36A21] leading-none tracking-tight">
                {mockAcademicSummary.cumulativeGpa.toFixed(2)}
              </span>
              <span
                className={`text-[15px] font-normal ${
                  isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                }`}
              >
                / {mockAcademicSummary.maxGpa.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span
              className={`text-[13px] font-medium block ${
                isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
              }`}
            >
              Tín chỉ
            </span>
            <div className="flex items-baseline justify-end space-x-1 mt-1">
              <span
                className={`text-[18px] font-bold leading-none ${
                  isDarkMode ? 'text-white' : 'text-[#17191C]'
                }`}
              >
                {mockAcademicSummary.earnedCredits}
              </span>
              <span
                className={`text-[15px] font-normal ${
                  isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                }`}
              >
                / {mockAcademicSummary.totalCredits}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-3">
          <div
            className={`flex-1 h-2 rounded-full overflow-hidden ${
              isDarkMode ? 'bg-[#2A2D35]' : 'bg-[#F2F4F7]'
            }`}
          >
            <div
              className="h-full bg-[#F36A21] rounded-full transition-all duration-300"
              style={{ width: `${mockAcademicSummary.progressPercent}%` }}
            />
          </div>
          <span
            className={`text-[13px] font-semibold shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
            }`}
          >
            {mockAcademicSummary.progressPercent}%
          </span>
        </div>
      </div>

      {/* 4 Separate Menu Rows matching 03-academics.png */}
      <div className="space-y-3">
        {/* Row 1: Bảng điểm */}
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
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Bảng điểm
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 2: Tiến độ học tập */}
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
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Tiến độ học tập
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 3: Chuyên cần */}
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
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <rect x="8" y="2" width="8" height="4" rx="1" />
              <path d="m9 14 2 2 4-4" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Chuyên cần
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 4: Thực tập (OJT) */}
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
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Thực tập (OJT)
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
