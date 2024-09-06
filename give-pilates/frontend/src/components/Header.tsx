import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        {/* Logo Section */}
        <Box>
          <img src="/images/give-logo.png" alt="Give Pilates" style={{ height: '70px' }} />
        </Box>

        {/* Navigation Buttons */}
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', gap: 2 }}>
            <Button color="primary" component={ScrollLink} to="contact" smooth={true} duration={500} sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              צור קשר
            </Button>
            <Button color="primary" component={ScrollLink} to="testimonials" smooth={true} duration={500} sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              המלצות
            </Button>
            <Button color="primary" component={ScrollLink} to="gallery" smooth={true} duration={500} sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              גלריה
            </Button>
            <Button color="primary" component={ScrollLink} to="schedule" smooth={true} duration={500} sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              לוח זמנים
            </Button>
            <Button color="primary" component={ScrollLink} to="about" smooth={true} duration={500} sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              אודות
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
