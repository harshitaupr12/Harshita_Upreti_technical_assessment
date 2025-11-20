import React from 'react';
import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      zIndex: 1000
    }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 16px',
          backgroundColor: isDarkMode ? '#4a5568' : '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
};