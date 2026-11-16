import type { AcademicSummary, ClassScheduleItem, ExamScheduleItem, StudentProfile } from '../types';

export const mockStudentProfile: StudentProfile = {
  fullName: 'Nguyễn Văn Minh',
  studentId: 'SE123456',
  major: 'Software Engineering',
  semester: 'Fall 2026',
  campus: 'Hòa Lạc',
};

export const mockAcademicSummary: AcademicSummary = {
  cumulativeGpa: 3.28,
  maxGpa: 4.0,
  earnedCredits: 86,
  totalCredits: 132,
  progressPercent: 65,
};

export const mockTodayClasses: ClassScheduleItem[] = [
  {
    id: 'c1',
    courseName: 'Kỹ năng giao tiếp',
    time: '07:30 – 09:00',
    room: 'AL-204',
    status: 'completed',
  },
  {
    id: 'c2',
    courseName: 'Thống kê ứng dụng',
    time: '09:10 – 11:30',
    room: 'BE-203',
    status: 'upcoming',
    isCurrentNext: true,
  },
];

export const mockScheduleDays = [
  { dayOfWeek: 'T2', dayNumber: '16', fullDate: 'Thứ Hai, 16/11', isToday: true },
  { dayOfWeek: 'T3', dayNumber: '17', fullDate: 'Thứ Ba, 17/11', isToday: false },
  { dayOfWeek: 'T4', dayNumber: '18', fullDate: 'Thứ Tư, 18/11', isToday: false },
  { dayOfWeek: 'T5', dayNumber: '19', fullDate: 'Thứ Năm, 19/11', isToday: false },
  { dayOfWeek: 'T6', dayNumber: '20', fullDate: 'Thứ Sáu, 20/11', isToday: false },
  { dayOfWeek: 'T7', dayNumber: '21', fullDate: 'Thứ Bảy, 21/11', isToday: false },
  { dayOfWeek: 'CN', dayNumber: '22', fullDate: 'Chủ Nhật, 22/11', isToday: false },
];

export const mockMondayClasses: ClassScheduleItem[] = [
  {
    id: 'm1',
    courseName: 'Kỹ năng giao tiếp',
    time: '07:30 – 09:00',
    room: 'AL-204',
    status: 'completed',
  },
  {
    id: 'm2',
    courseName: 'Thống kê ứng dụng',
    time: '09:10 – 11:30',
    room: 'BE-203',
    status: 'upcoming',
  },
  {
    id: 'm3',
    courseName: 'Cơ sở dữ liệu',
    time: '13:00 – 14:50',
    room: 'BE-101',
    status: 'future',
  },
];

export const mockExamList: ExamScheduleItem[] = [
  {
    id: 'ex1',
    courseName: 'Cấu trúc dữ liệu',
    date: '18/11/2026',
    time: '09:10 – 10:40',
    room: 'BE-202',
    seatNumber: '24',
  },
  {
    id: 'ex2',
    courseName: 'Cơ sở dữ liệu',
    date: '25/11/2026',
    time: '13:00 – 14:30',
    room: 'AL-105',
    seatNumber: '12',
  },
];
