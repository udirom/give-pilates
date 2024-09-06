import React from 'react';
import { Container, Typography, Grid, Box, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
          <Typography variant="h2" gutterBottom align="center" color="primary">
            צרו קשר
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                אנחנו כאן כדי לענות על כל שאלה ולעזור לכם להתחיל את המסע שלכם עם פילאטיס. אל תהססו ליצור איתנו קשר!
              </Typography>
              <Typography variant="body1" paragraph>
                טלפון: 054-6626151
              </Typography>
              <Typography variant="body1" paragraph>
                אימייל: info@givepilates.com
              </Typography>
              <Typography variant="body1" paragraph>
                כתובת: רחוב שבזי 22, פתח תקווה
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom color="primary">
                עקבו אחרינו ברשתות החברתיות
              </Typography>
              <Box>
                <IconButton color="primary" component={Link} href="#" target="_blank">
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" component={Link} href="#" target="_blank">
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" component={Link} href="#" target="_blank">
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;