import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react'

export interface ThemeToggleProps {
  theme?: string;
  onThemeChanged?: (theme: string) => void;
}

export default function ThemeToggle({theme, onThemeChanged}: ThemeToggleProps) {
  const [lightThemeEnabled, setLightTheme] = useState(true);
  const [sunIcon, setSunIcon] = useState('visible');
  const [moonIcon, setMoonIcon] = useState('visible');

  useEffect(() => {
    setLightTheme(theme === 'light');
    setSunIcon(theme === 'light' ? 'visible' : 'invisible');
    setMoonIcon(theme === 'dark' ? 'visible' : 'invisible');
  }, [theme])

  function toggle() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setLightTheme(newTheme === 'light');
    onThemeChanged && onThemeChanged(newTheme);
  }

  const iconClass = 'text-[12px] m-auto';

  return (
    <div className="flex">
      <Switch
        checked={lightThemeEnabled}
        onChange={toggle}
        className={`${
          lightThemeEnabled ? 'bg-chip-light' : 'bg-chip'
        } relative inline-flex items-center h-6 rounded-full w-11`}>
        <span className="sr-only">Toggle Theme</span>
        <div className="absolute flex w-full">
          <div className={`${sunIcon} ${iconClass}`}>☀️</div>
          <div className={`${moonIcon} ${iconClass}`}>🌙</div>
        </div>
        <span
          className={`${
            lightThemeEnabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full`} />
      </Switch>
    </div>
  );
}
