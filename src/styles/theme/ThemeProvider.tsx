import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { Theme, themes } from './themes';
import { getThemeFromStorage, saveTheme } from './utils';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.dark);
  const useThemeProvider = () => {
    return useQuery({
      queryKey: ['ThemeProvider'],
      queryFn: () => {
        const theme = getThemeFromStorage();
        if (theme === null) {
          saveTheme('dark');
          return 'dark';
        }
        return theme;
      },
    });
  };
  const { status, data, error, isFetching } = useThemeProvider();
  useEffect(() => {
    if (!isFetching) {
      if (status === 'success') {
        setCurrentTheme(themes[data]);
      } else if (error !== null) {
        alert('ERROR');
      }
    }
  }, [status, isFetching, data, error]);

  return (
    <OriginalThemeProvider theme={currentTheme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
