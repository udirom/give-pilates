import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.get('/api/schedule', (req, res) => {
  // TODO: Implement schedule API
  res.json({ message: 'Schedule API not implemented yet' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});