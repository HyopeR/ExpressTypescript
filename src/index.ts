import { app, Exception } from './bin';

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
