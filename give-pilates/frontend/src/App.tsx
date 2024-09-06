import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#41675E', // Dark green from the logo
    },
    secondary: {
      main: '#F0F0F0', // Light gray for backgrounds
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#41675E',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#41675E',
    },
    body1: {
      fontSize: '1.1rem',
      color: '#333333',
    },
  },
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box
            sx={{
              minHeight: '100vh',
              backgroundImage: 'url(/images/leaf-pattern.png)',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Schedule />
                  <Gallery />
                  <Testimonials />
                  <Contact />
                </>
              } />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
