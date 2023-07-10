import { ErrorRequestHandler } from 'express';
import app from './app';
import { Exception, ErrorHandler } from './core/errors';

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Typescript',
    content: 'Hello World',
  });
});

app.use((req, res, next) => next(Exception.route_not_found));
app.use(((err, req, res, next) => {
  const errorHandler =
    err instanceof ErrorHandler ? err : Exception.unexpected_error;
  errorHandler.set({ detail: err.toString() }).handle(res);
}) as ErrorRequestHandler);
