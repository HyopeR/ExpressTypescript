import app from './app';

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Typescript',
    content: 'Hello World',
  });
});
