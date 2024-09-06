import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                אודות Give Pilates
              </Typography>
              <Typography variant="body1" paragraph>
                ב-Give Pilates, אנו מאמינים שפילאטיס הוא יותר מסתם אימון - זו דרך חיים. המטרה שלנו היא לעזור לכם לגלות את הכוח הפנימי שלכם, לשפר את הגמישות והיציבה, ולהעצים את הקשר בין הגוף והנפש.
              </Typography>
              <Typography variant="body1">
                הצוות המקצועי שלנו, בהובלת שיר רומנו, מחויב לספק לכם חוויית אימון מותאמת אישית ומעצימה. בואו לגלות כיצד פילאטיס מכשירים יכול לשנות את חייכם לטובה.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/about-image.jpg"
                alt="Pilates Reformer"
                sx={{ width: '100%', borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;