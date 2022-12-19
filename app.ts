import { app } from './src/bin';

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
