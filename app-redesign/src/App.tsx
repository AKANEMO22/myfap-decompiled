import React from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { StatusBar } from './components/StatusBar';
import { BottomNav } from './components/BottomNav';
import { HomeIndicator } from './components/HomeIndicator';
import { HomeScreen } from './screens/HomeScreen';
import { ScheduleScreen } from './screens/ScheduleScreen';
import { AcademicsScreen } from './screens/AcademicsScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const MainApp: React.FC = () => {
  const { activeTab, isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-0 sm:p-4 transition-colors duration-200 ${
        isDarkMode ? 'bg-[#121316] sm:bg-[#0B0C0E]' : 'bg-[#F8F9FA] sm:bg-[#E5E7EB]'
      }`}
    >
      {/* Mobile Frame Container */}
      <div
        className={`w-full max-w-[390px] sm:max-w-[412px] h-[100dvh] sm:h-[844px] flex flex-col justify-between border-0 sm:border sm:rounded-[40px] overflow-hidden sm:shadow-2xl transition-colors duration-200 ${
          isDarkMode
            ? 'bg-[#121316] text-[#F3F4F6] border-[#2A2D35]'
            : 'bg-[#F8F9FA] text-[#17191C] border-[#EAECF0]'
        }`}
      >
        {/* Status Bar */}
        <header className="shrink-0 pt-1">
          <StatusBar />
        </header>

        {/* Dynamic Screen Area */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          {activeTab === 'home' && <HomeScreen />}
          {activeTab === 'schedule' && <ScheduleScreen />}
          {activeTab === 'academics' && <AcademicsScreen />}
          {activeTab === 'services' && <ServicesScreen />}
          {activeTab === 'profile' && <ProfileScreen />}
        </main>

        {/* Persistent Bottom Navigation & Home Indicator */}
        <footer className="shrink-0 flex flex-col">
          <BottomNav />
          <HomeIndicator />
        </footer>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

export default App;
