import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Box
            component="img"
            src="/images/give-logo-with-pattern.png"
            alt="Give Pilates"
            sx={{ width: '100%', maxWidth: '400px', mb: 4 }}
          />
          <Typography variant="h5" sx={{ mb: 2, color: '#41675E' }}>
            זמן לפילאטיס, זמן לעצמך
          </Typography>
          <Button variant="contained" color="primary" size="large">
            קבעו שיעור ניסיון
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;