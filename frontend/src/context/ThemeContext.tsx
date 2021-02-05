import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

type ThemeContextType = {
  isDarkMode: boolean | undefined;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

export const ThemeContext = React.createContext<Partial<ThemeContextType>>({});

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
