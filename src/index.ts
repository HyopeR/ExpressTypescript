import { app } from './bin';

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
