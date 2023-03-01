import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    background: {
      default: 'rgba(255,255,255,1)',
      paper: 'rgba(251,249,249,1)',
    },
    primary: {
      main: 'rgba(215,113,88,1)',
    },
    text: { primary: 'rgba(58,52,51,1)', secondary: 'rgba(58,52,51,0.7)' },
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#100D1A',
      paper: '#1F1A38',
    },
    error: { main: '#FF9736' },
    primary: {
      main: '#EE3137',
      dark: '#671416',
    },
    secondary: {
      main: '#456990',
      dark: '#1F344B',
      light: '#456990',
    },
    text: {
      primary: '#E6EAEB',
      secondary: '#E6EAEB',
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontWeightRegular: 400,
    fontSize: 16,
    h1: { color: '#E6EAEB' },
  },
  shape: { borderRadius: 5 },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#1F1A38',
        },
      },
    },
  },
});

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
