// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 dark:bg-gray-200 p-2 rounded-full focus:outline-none"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6 text-white dark:text-gray-800" />
      ) : (
        <SunIcon className="h-6 w-6 text-gray-800 dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;