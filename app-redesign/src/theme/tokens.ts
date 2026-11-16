export const tokens = {
  light: {
    bg: '#F8F9FA',
    surface: '#FFFFFF',
    text: '#17191C',
    subtext: '#5E646F',
    border: '#EAECF0',
    accent: '#F36A21',
    alertTint: '#FFF2EB',
  },
  dark: {
    bg: '#121316',
    surface: '#1E2025',
    text: '#F3F4F6',
    subtext: '#8E95A2',
    border: '#2A2D35',
    accent: '#F36A21',
    alertTint: '#2A1E18',
  },
  spacing: {
    screenHorizontal: '20px',
    rowHeight: '58px',
    cardRadius: '16px',
    subcardRadius: '12px',
  },
  typography: {
    title: 'text-[25px] font-bold tracking-tight',
    header: 'text-[17px] font-semibold',
    body: 'text-[15px] font-medium',
    subtext: 'text-[13px] font-normal',
    caption: 'text-[11px] font-medium',
  }
} as const;

export type ThemeMode = 'light' | 'dark';
