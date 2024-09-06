import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

const Schedule: React.FC = () => {
  return (
    <Box id="schedule" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
          <Typography variant="h2" gutterBottom align="center" color="primary">
            לוח זמנים
          </Typography>
          <Typography variant="body1" paragraph align="center">
            מיקום הסטודיו: רחוב שבזי 22, פתח תקווה
          </Typography>
          <Typography variant="body1" paragraph align="center">
            שעות פעילות: א'-ה' 07:00-21:00, ו' 08:00-14:00
          </Typography>
          <TableContainer component={Paper} elevation={3}>
            <Table aria-label="class schedule">
              <TableHead>
                <TableRow>
                  <TableCell>יום</TableCell>
                  <TableCell>שעה</TableCell>
                  <TableCell>שיעור</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>יום שני</TableCell>
                  <TableCell>09:00</TableCell>
                  <TableCell>רפורמר למתחילים</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default Schedule;