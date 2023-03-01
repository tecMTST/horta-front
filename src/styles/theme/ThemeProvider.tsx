import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  CircularProgress,
  GlobalStyles,
  Theme,
  ThemeProvider as OriginalProvider,
} from '@mui/material';
import { themes } from './themes';
import { getThemeFromStorage, saveTheme } from './utils';

export const ThemeProvider = (props: { children: React.ReactElement }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>();

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
      enabled: !!!currentTheme,
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

  if (isFetching || !!!currentTheme) {
    return <CircularProgress />;
  }

  return (
    <OriginalProvider theme={currentTheme}>
      {props.children}
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: currentTheme.palette.background.default,
            letterSpacing: 1,
            color: currentTheme.palette.text.primary,
            minHeight: '100%',
            minWidth: '100%',
          },
          input: {
            colorScheme: 'dark',
          },
        }}
      />
    </OriginalProvider>
  );
};
