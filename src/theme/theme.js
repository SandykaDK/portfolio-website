import { createTheme } from '@mui/material/styles';

const paletteByMode = {
  light: {
    background: { default: '#f5f5f2', paper: '#ffffff' },
    text: { primary: '#202923', secondary: '#65716a' },
    divider: '#e3e7e2',
    primary: { main: '#263b32', contrastText: '#ffffff' },
    secondary: { main: '#9ddd58', contrastText: '#172017' },
  },
  dark: {
    background: { default: '#151b18', paper: '#202923' },
    text: { primary: '#f2f5ef', secondary: '#aab5ac' },
    divider: '#354039',
    primary: { main: '#b8f36b', contrastText: '#172017' },
    secondary: { main: '#d1f7a6', contrastText: '#172017' },
  },
};

export const getTheme = (mode = 'light') => createTheme({
  palette: { mode, ...paletteByMode[mode] },
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    h1: { fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: 0 },
    h2: { fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: 0 },
    h3: { fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: 0 },
    h4: { fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: 0 },
    h5: { fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, letterSpacing: 0 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: '88px' },
        body: { transition: 'background-color 180ms ease, color 180ms ease' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, paddingInline: 18, minHeight: 44 },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 8, boxShadow: 'none' } },
    },
  },
});