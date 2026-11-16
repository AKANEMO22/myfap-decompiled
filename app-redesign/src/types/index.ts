export type TabId = 'home' | 'schedule' | 'academics' | 'services' | 'profile';

export interface TabConfig {
  id: TabId;
  label: string;
}

export interface ClassScheduleItem {
  id: string;
  courseCode?: string;
  courseName: string;
  time: string; // e.g. "07:30 – 09:00"
  room: string; // e.g. "AL-204"
  status: 'completed' | 'upcoming' | 'future';
  isCurrentNext?: boolean;
}

export interface ExamScheduleItem {
  id: string;
  courseName: string;
  date: string; // e.g. "18/11/2026"
  time: string; // e.g. "09:10 – 10:40"
  room: string;
  seatNumber?: string;
}

export interface AcademicSummary {
  cumulativeGpa: number;
  maxGpa: number;
  earnedCredits: number;
  totalCredits: number;
  progressPercent: number;
}

export interface StudentProfile {
  fullName: string;
  studentId: string;
  major: string;
  semester: string;
  campus: string;
  avatarUrl?: string;
}
