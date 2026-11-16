import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { mockTodayClasses } from '../fixtures/mockData';
import { Bell, ChevronRight, Calendar } from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const { isDarkMode, setActiveTab } = useTheme();

  return (
    <div className="flex-1 px-5 pt-4 pb-6 overflow-y-auto">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1
              className={`text-[26px] font-bold tracking-tight leading-tight ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Hôm nay
            </h1>
            <p
              className={`text-[13px] mt-0.5 ${
                isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
              }`}
            >
              Thứ Hai, 16/11/2026
            </p>
          </div>
          <div className="relative p-1.5 -mr-1 cursor-pointer">
            <Bell
              className={`w-6 h-6 stroke-[1.8] ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#F36A21] rounded-full border border-white dark:border-[#121316]" />
          </div>
        </div>

        {/* Lớp tiếp theo Card */}
        <div
          onClick={() => setActiveTab('schedule')}
          className={`relative overflow-hidden rounded-2xl border transition-colors mb-6 shadow-sm cursor-pointer ${
            isDarkMode
              ? 'bg-[#1E2025] border-[#2A2D35]'
              : 'bg-white border-[#EAECF0]'
          }`}
        >
          {/* Inset Orange Accent Bar */}
          <div className="absolute left-2.5 top-3.5 bottom-3.5 w-[4px] bg-[#F36A21] rounded-full" />

          <div className="pl-6 pr-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              {/* Graduation Cap outline icon without box wrapper matching 01-home.png & 06-dark-home-preview.png */}
              <div
                className={`shrink-0 ${
                  isDarkMode ? 'text-white' : 'text-[#17191C]'
                }`}
              >
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <span
                  className={`text-[12px] font-medium block ${
                    isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                  }`}
                >
                  Lớp tiếp theo
                </span>
                <h2
                  className={`text-[17px] font-bold tracking-tight mt-0.5 ${
                    isDarkMode ? 'text-white' : 'text-[#17191C]'
                  }`}
                >
                  Thống kê ứng dụng
                </h2>
                <p
                  className={`text-[13px] mt-0.5 ${
                    isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                  }`}
                >
                  09:10 – 11:30 · BE-203
                </p>
              </div>
            </div>
            <ChevronRight
              className={`w-5 h-5 shrink-0 ${
                isDarkMode ? 'text-[#8E95A2]' : 'text-[#A0A5B1]'
              }`}
            />
          </div>
        </div>

        {/* Lịch hôm nay Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3
              className={`text-[17px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Lịch hôm nay
            </h3>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`text-[13px] font-normal flex items-center space-x-0.5 transition-colors hover:text-[#F36A21] ${
                isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
              }`}
            >
              <span>Xem tất cả</span>
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

          {/* Timeline */}
          <div className="relative pl-7 space-y-6">
            {/* Vertical connecting line between centers of timeline markers */}
            <div
              className={`absolute left-[5px] top-3 bottom-6 w-[2px] ${
                isDarkMode ? 'bg-[#2A2D35]' : 'bg-[#EAECF0]'
              }`}
            />

            {mockTodayClasses.map((item, idx) => (
              <div key={item.id} className="relative flex items-start justify-between">
                {/* Timeline node */}
                <div className="absolute -left-[27px] top-1">
                  {idx === 0 ? (
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 ${
                        isDarkMode
                          ? 'border-[#8E95A2] bg-[#121316]'
                          : 'border-[#C4C8D0] bg-[#F8F9FA]'
                      }`}
                    />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#F36A21] bg-[#F8F9FA] dark:bg-[#121316]" />
                  )}
                </div>

                <div>
                  <span
                    className={`text-[12px] block ${
                      idx === 1
                        ? 'font-bold text-[#17191C] dark:text-white'
                        : isDarkMode
                        ? 'text-[#8E95A2]'
                        : 'text-[#5E646F]'
                    }`}
                  >
                    {item.time}
                  </span>
                  <h4
                    className={`text-[15px] font-bold mt-0.5 ${
                      isDarkMode ? 'text-white' : 'text-[#17191C]'
                    }`}
                  >
                    {item.courseName}
                  </h4>
                  <p
                    className={`text-[13px] mt-0.5 ${
                      isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                    }`}
                  >
                    {item.room}
                  </p>
                </div>

                {/* Status right icon */}
                <div className="pt-1.5 shrink-0">
                  {item.status === 'completed' ? (
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                        isDarkMode
                          ? 'border-[#8E95A2] text-[#8E95A2]'
                          : 'border-[#A0A5B1] text-[#A0A5B1]'
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2.5 6 5 8.5 9.5 3.5" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-[#F36A21]" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Có lịch thi Pale Orange Notice Card */}
      <div
        onClick={() => setActiveTab('schedule')}
        className={`rounded-2xl p-4 flex items-center justify-between cursor-pointer border transition-colors mt-6 ${
          isDarkMode
            ? 'bg-[#261C18] border-[#3D271E]'
            : 'bg-[#FFF2EB] border-[#FDE5D8]'
        }`}
      >
        <div className="flex items-center space-x-3.5">
          <div className="text-[#F36A21] shrink-0">
            <Calendar className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div>
            <h4
              className={`text-[15px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Có lịch thi
            </h4>
            <p
              className={`text-[13px] mt-0.5 ${
                isDarkMode ? 'text-[#E5D2C8]' : 'text-[#5E646F]'
              }`}
            >
              18/11 · Cấu trúc dữ liệu
            </p>
          </div>
        </div>
        <ChevronRight
          className={`w-5 h-5 shrink-0 ${
            isDarkMode ? 'text-[#E5D2C8]' : 'text-[#5E646F]'
          }`}
        />
      </div>
    </div>
  );
};
