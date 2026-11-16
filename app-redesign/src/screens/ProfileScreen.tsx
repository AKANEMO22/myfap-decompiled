import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { mockStudentProfile } from '../fixtures/mockData';
import { ChevronRight } from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex-1 px-5 pt-4 pb-6 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1
          className={`text-[26px] font-bold tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-[#17191C]'
          }`}
        >
          Cá nhân
        </h1>
        <button className="p-1 -mr-1 text-primary cursor-pointer">
          <svg
            className={`w-6 h-6 ${
              isDarkMode ? 'text-white' : 'text-[#17191C]'
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      {/* User Info Header matching 05-profile.png */}
      <div className="flex items-center space-x-4 mb-5">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${
            isDarkMode ? 'bg-[#2A2D35] text-[#8E95A2]' : 'bg-[#E5E7EB] text-[#5E646F]'
          }`}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h2
            className={`text-[18px] font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-[#17191C]'
            }`}
          >
            {mockStudentProfile.fullName}
          </h2>
          <p
            className={`text-[14px] mt-0.5 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
            }`}
          >
            {mockStudentProfile.studentId}
          </p>
          <p
            className={`text-[13px] mt-0.5 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
            }`}
          >
            {mockStudentProfile.major}
          </p>
        </div>
      </div>

      {/* Two-Column Info Card matching 05-profile.png */}
      <div
        className={`p-4 rounded-2xl border mb-5 flex transition-colors shadow-sm ${
          isDarkMode
            ? 'bg-[#1E2025] border-[#2A2D35]'
            : 'bg-white border-[#EAECF0]'
        }`}
      >
        <div className="flex-1 pl-1">
          <span
            className={`text-[12px] font-medium block ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
            }`}
          >
            Học kỳ
          </span>
          <p
            className={`text-[15px] font-bold mt-1 ${
              isDarkMode ? 'text-white' : 'text-[#17191C]'
            }`}
          >
            {mockStudentProfile.semester}
          </p>
        </div>
        <div
          className={`w-[1px] my-0.5 mx-4 ${
            isDarkMode ? 'bg-[#2A2D35]' : 'bg-[#EAECF0]'
          }`}
        />
        <div className="flex-1">
          <span
            className={`text-[12px] font-medium block ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
            }`}
          >
            Cơ sở
          </span>
          <p
            className={`text-[15px] font-bold mt-1 ${
              isDarkMode ? 'text-white' : 'text-[#17191C]'
            }`}
          >
            {mockStudentProfile.campus}
          </p>
        </div>
      </div>

      {/* Unified Menu List Card with dividers matching 05-profile.png */}
      <div
        className={`rounded-2xl border transition-colors shadow-sm divide-y overflow-hidden mb-5 ${
          isDarkMode
            ? 'bg-[#1E2025] border-[#2A2D35] divide-[#2A2D35]'
            : 'bg-white border-[#EAECF0] divide-[#F0F2F5]'
        }`}
      >
        {/* Row 1: Hồ sơ sinh viên */}
        <div className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/5">
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Hồ sơ sinh viên
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 2: Bảo mật & quyền riêng tư */}
        <div className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/5">
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Bảo mật & quyền riêng tư
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>

        {/* Row 3: Giao diện tối Toggle */}
        <div
          onClick={toggleDarkMode}
          className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/5"
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
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Giao diện tối
            </span>
          </div>
          {/* iOS-style Switch matching 05-profile.png */}
          <div
            className={`w-12 h-7 rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
              isDarkMode ? 'bg-[#F36A21]' : 'bg-[#D0D5DD]'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out ${
                isDarkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Row 4: Trợ giúp & phiên bản */}
        <div className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-black/5 dark:hover:bg-white/5">
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <span
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Trợ giúp & phiên bản
            </span>
          </div>
          <ChevronRight
            className={`w-5 h-5 shrink-0 ${
              isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
            }`}
          />
        </div>
      </div>

      {/* Đăng xuất Row matching 05-profile.png (left-aligned) */}
      <div
        className={`p-4 rounded-2xl border transition-colors flex items-center cursor-pointer shadow-sm active:opacity-80 ${
          isDarkMode
            ? 'bg-[#1E2025] border-[#2A2D35]'
            : 'bg-white border-[#EAECF0]'
        }`}
      >
        <svg
          className="w-5 h-5 text-[#F36A21] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        <span className="text-[15px] font-bold text-[#F36A21] ml-3.5">
          Đăng xuất
        </span>
      </div>
    </div>
  );
};
