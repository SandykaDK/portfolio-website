import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from './theme/theme.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [mode, setMode] = useState('light');
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar mode={mode} onToggleMode={() => setMode((current) => (current === 'light' ? 'dark' : 'light'))} />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}