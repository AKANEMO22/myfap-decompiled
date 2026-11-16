import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { mockScheduleDays, mockMondayClasses, mockExamList } from '../fixtures/mockData';

export const ScheduleScreen: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [scheduleType, setScheduleType] = useState<'class' | 'exam'>('class');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  return (
    <div className="flex-1 px-5 pt-4 pb-6 overflow-y-auto">
      {/* Screen Title */}
      <div className="mb-4">
        <h1
          className={`text-[26px] font-bold tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-[#17191C]'
          }`}
        >
          Lịch
        </h1>
      </div>

      {/* Underline Selector: Lịch học / Lịch thi */}
      <div className="flex border-b border-[#EAECF0] dark:border-[#2A2D35] mb-5">
        <button
          onClick={() => setScheduleType('class')}
          className={`flex-1 pb-3 text-[15px] font-semibold text-center transition-colors relative ${
            scheduleType === 'class'
              ? 'text-[#F36A21]'
              : isDarkMode
              ? 'text-[#8E95A2]'
              : 'text-[#5E646F]'
          }`}
        >
          Lịch học
          {scheduleType === 'class' && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F36A21] rounded-full" />
          )}
        </button>
        <button
          onClick={() => setScheduleType('exam')}
          className={`flex-1 pb-3 text-[15px] font-semibold text-center transition-colors relative ${
            scheduleType === 'exam'
              ? 'text-[#F36A21]'
              : isDarkMode
              ? 'text-[#8E95A2]'
              : 'text-[#5E646F]'
          }`}
        >
          Lịch thi
          {scheduleType === 'exam' && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F36A21] rounded-full" />
          )}
        </button>
      </div>

      {scheduleType === 'class' ? (
        <>
          {/* Weekday Strip: T2 - CN */}
          <div className="flex justify-between items-center mb-6">
            {mockScheduleDays.map((day, idx) => {
              const isSelected = selectedDayIndex === idx;
              return (
                <button
                  key={day.dayOfWeek}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? 'w-11 py-2 bg-[#F36A21] text-white rounded-xl shadow-sm'
                      : 'w-10 py-2 text-[#5E646F] dark:text-[#8E95A2]'
                  }`}
                >
                  <span
                    className={`text-[12px] font-semibold ${
                      isSelected ? 'text-white' : ''
                    }`}
                  >
                    {day.dayOfWeek}
                  </span>
                  <span
                    className={`text-[15px] font-bold mt-0.5 ${
                      isSelected
                        ? 'text-white'
                        : isDarkMode
                        ? 'text-white'
                        : 'text-[#17191C]'
                    }`}
                  >
                    {day.dayNumber}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Day Heading */}
          <div className="mb-3.5">
            <h2
              className={`text-[17px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              {mockScheduleDays[selectedDayIndex].fullDate}
            </h2>
          </div>

          {/* Single Stacked White Schedule Card with dividers matching 02-schedule.png */}
          <div
            className={`rounded-2xl border transition-colors shadow-sm divide-y overflow-hidden ${
              isDarkMode
                ? 'bg-[#1E2025] border-[#2A2D35] divide-[#2A2D35]'
                : 'bg-white border-[#EAECF0] divide-[#F0F2F5]'
            }`}
          >
            {mockMondayClasses.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-center justify-between"
              >
                <div>
                  <span
                    className={`text-[12px] block ${
                      item.status === 'upcoming'
                        ? 'font-bold text-[#17191C] dark:text-white'
                        : isDarkMode
                        ? 'text-[#8E95A2]'
                        : 'text-[#5E646F]'
                    }`}
                  >
                    {item.time}
                  </span>
                  <h3
                    className={`text-[15px] font-bold mt-0.5 ${
                      isDarkMode ? 'text-white' : 'text-[#17191C]'
                    }`}
                  >
                    {item.courseName}
                  </h3>
                  <p
                    className={`text-[13px] mt-0.5 ${
                      isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                    }`}
                  >
                    {item.room}
                  </p>
                </div>

                {/* Right Status Indicator */}
                <div className="shrink-0">
                  {item.status === 'completed' && (
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
                  )}
                  {item.status === 'upcoming' && (
                    <div className="w-6 h-6 rounded-full border-2 border-[#F36A21]" />
                  )}
                  {item.status === 'future' && (
                    <div
                      className={`w-6 h-6 rounded-full border-2 ${
                        isDarkMode ? 'border-[#3A3D45]' : 'border-[#D0D5DD]'
                      }`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Lịch thi List: Grouped by actual exam session */
        <div className="space-y-4">
          <div className="mb-2">
            <h2
              className={`text-[17px] font-bold ${
                isDarkMode ? 'text-white' : 'text-[#17191C]'
              }`}
            >
              Lịch thi học kỳ Fall 2026
            </h2>
          </div>
          {mockExamList.map((exam) => (
            <div
              key={exam.id}
              className={`p-4 rounded-2xl border transition-colors shadow-sm ${
                isDarkMode
                  ? 'bg-[#1E2025] border-[#2A2D35]'
                  : 'bg-white border-[#EAECF0]'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[13px] font-bold text-[#F36A21]">
                  {exam.date} · {exam.time}
                </span>
                <span
                  className={`text-[12px] font-semibold px-2 py-0.5 rounded-md ${
                    isDarkMode
                      ? 'bg-[#2A2D35] text-white'
                      : 'bg-[#F8F9FA] text-[#17191C]'
                  }`}
                >
                  Ghế: {exam.seatNumber}
                </span>
              </div>
              <h3
                className={`text-[16px] font-bold ${
                  isDarkMode ? 'text-white' : 'text-[#17191C]'
                }`}
              >
                {exam.courseName}
              </h3>
              <p
                className={`text-[13px] mt-1 ${
                  isDarkMode ? 'text-[#8E95A2]' : 'text-[#5E646F]'
                }`}
              >
                Phòng thi: {exam.room} · Hình thức: Tập trung (EOS)
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
