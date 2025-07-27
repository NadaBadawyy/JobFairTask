// components/DarkModeToggle.tsx
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState<boolean>(
    () => localStorage.theme === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  useEffect(() => {
    // On initial load
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-end p-4">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
        sunColor="#facc15"
        moonColor="#3b82f6"
      />
    </div>
  );
}
