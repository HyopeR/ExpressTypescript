import { app } from './bin';

import express from 'express';
import path from 'path';
// @ts-ignore
import engine from 'ejs-blocks';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import i18next from 'i18next';
import i18nextMiddleware from 'i18next-http-middleware';

app.set('views', path.join(__dirname, '/views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(i18nextMiddleware.handle(i18next));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

export default app;
