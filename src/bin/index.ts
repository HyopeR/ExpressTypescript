import http from 'http';
import debug from 'debug';
import express from 'express';

import '../core/extensions/toPromiseArray';
import '../locales/extensions/translate';

import { env } from '../helpers/env';
import { ServerHelperService } from '../services/ServerHelperService';

const app = express();

import i18next from 'i18next';
import i18nextFsBackend from 'i18next-fs-backend';
import { i18nextConfig } from '../locales/config';

i18next.use(i18nextFsBackend).init(i18nextConfig);

const ServerHelperModule = new ServerHelperService({
  server: http.createServer(app),
  port: env.PORT || '3306',
  debug: debug('expressTypescript'),
});

app.set('port', ServerHelperModule.port);
ServerHelperModule.server.listen(ServerHelperModule.port);
ServerHelperModule.server.on('error', ServerHelperModule.onError);
ServerHelperModule.server.on('listening', ServerHelperModule.onListening);

export { app };
