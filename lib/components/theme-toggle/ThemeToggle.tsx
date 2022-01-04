import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react'

export interface ThemeToggleProps {
  theme?: string;
  onThemeChanged?: (theme: string) => void;
}

export default function ThemeToggle({theme, onThemeChanged}: ThemeToggleProps) {
  const [lightThemeEnabled, setLightTheme] = useState(true);

  useEffect(() => {
    setLightTheme(theme === 'light');
  }, [theme])

  function toggle() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setLightTheme(newTheme === 'light');
    onThemeChanged && onThemeChanged(newTheme);
  }

  const iconClass = 'text-base ml-1';

  return (
    <div className="flex">
      <Switch
        checked={lightThemeEnabled}
        onChange={toggle}
        className={`${
          lightThemeEnabled ? 'bg-primary' : 'bg-chip'
        } relative inline-flex items-center h-6 rounded-full w-11`}>
        <span className="sr-only">Toggle Theme</span>
        <div className="absolute">
          <span className={iconClass}>☀️</span>
          <span className={iconClass}>🌙</span>
        </div>
        <span
          className={`${
            lightThemeEnabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full`} />
      </Switch>
    </div>
  );
}
