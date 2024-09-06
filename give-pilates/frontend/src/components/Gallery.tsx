import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';

const Gallery: React.FC = () => {
  const itemData = [
    { img: '/images/gallery-image1.jpg', title: 'סטודיו' },
    { img: '/images/gallery-image2.jpg', title: 'שיעור בעיצומו' },
    { img: '/images/gallery-image3.jpg', title: 'תרגיל על הרפורמר' },
    { img: '/images/gallery-image4.jpg', title: 'קבוצת מתאמנים' },
    { img: '/images/gallery-image5.jpg', title: 'ציוד פילאטיס' },
    { img: '/images/gallery-image6.jpg', title: 'מדריכה מדגימה תרגיל' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % itemData.length);
    }, 5000); // Change image every 5 seconds
  
    return () => clearInterval(interval);
  }, [itemData.length]); // Add itemData.length as a dependency  

  return (
    <Box id="gallery" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
          <Typography variant="h2" gutterBottom align="center" color="primary">
            גלריה
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
            {itemData.map((item, index) => (
              <Box
                key={item.img}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              >
                <img
                  src={`${item.img}?w=1000&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=1000&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;