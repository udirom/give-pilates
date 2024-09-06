import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Box, Avatar } from '@mui/material';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'שרה כהן',
      text: 'השיעורים ב-Give Pilates שינו את חיי. היציבה שלי השתפרה, הכאבים בגב נעלמו, ואני מרגישה חזקה יותר מתמיד.',
      avatar: '/images/avatar1.jpg',
    },
    {
      name: 'דן לוי',
      text: 'המדריכים מקצועיים ומסורים. הם תמיד מוודאים שאני מבצע את התרגילים נכון ומתאימים את האימון לצרכים שלי.',
      avatar: '/images/avatar2.jpg',
    },
    {
      name: 'מיכל ברק',
      text: 'האווירה בסטודיו מדהימה. זה הזמן שלי לטפל בעצמי, ואני תמיד יוצאת מהשיעורים מלאת אנרגיה ומוטיבציה.',
      avatar: '/images/avatar3.jpg',
    },
  ];

  return (
    <Box id="testimonials" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
          <Typography variant="h2" gutterBottom align="center" color="primary">
            מה אומרים עלינו
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card elevation={3}>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
                      <Typography variant="h6">{testimonial.name}</Typography>
                    </Box>
                    <Typography variant="body1">{testimonial.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;