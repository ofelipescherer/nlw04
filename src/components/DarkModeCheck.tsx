import React, { useEffect, useState } from "react";
import styles from '../styles/components/DarkModeCheck.module.css';

export default function DarkModeCheck() {
  const lightTheme = {
    '--white': '#fff',
    '--background': '#f2f3f5',
    '--gray-line': '#dcdde0',
    '--text': '#666666',
    '--text-highlight': '#b3b9ff',
    '--title': '#2e3f5b',
    '--red': '#e83f5b',
    '--green': '#4cd62b',
    '--blue': '#5965e0',
    '--blue-dark': '#4953b8',
  };
  const darkTheme = {
    '--white': '#383F57',
    '--background': '#141414',
    '--gray-line': '#dcdde0',
    '--text': '#3add48',
    '--title': '#0ae215',
    '--blue': '#65e071',
    '--red': '#e83f5b',
    '--blue-dark': '#ececec',
  };

    const [isDarkModeActive, setIsDarkModeActive] = useState(false);
    const [currentMode, setCurrentMode] = useState('light');

    useEffect(() => {
      const theme = currentMode === 'light' ? lightTheme : darkTheme;
      Object.keys(theme).forEach(key => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
      });
    }, [currentMode]);
  
    const toggleTheme = () => {
      
      if(currentMode === 'light'){
        setCurrentMode('dark');
      } else {
        setCurrentMode('light');
      }
      // Mesma sintaxe do bloco acima const newMode = currentMode === 'light' ? 'dark' : 'light';

      setIsDarkModeActive(!isDarkModeActive);
      ;
    };

  return (
      <div className={styles.container}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="switch"
          onChange={toggleTheme}
          checked={isDarkModeActive}
        />
        <label className={styles.labelCheckbox} htmlFor="switch">
          {isDarkModeActive ?
          (<span className={styles.buttonCheckBox}>🌛</span>) :
          (<span className={styles.buttonCheckBox}>🌞</span>)
          
          }
        </label>     
      </div>

  );
};