import http from "http";
import debug from "debug";
import express from "express";

import ServerHelperService from "../services/ServerHelperService/ServerHelperService";
import { env } from '../helpers/env';

const app = express();

const ServerHelperModule = new ServerHelperService({
    server: http.createServer(app),
    port: env.PORT || '3306',
    debug: debug('expressTypescript'),
});

app.set('port', ServerHelperModule.port);
ServerHelperModule.server.listen(ServerHelperModule.port);
ServerHelperModule.server.on('error', ServerHelperModule.onError);
ServerHelperModule.server.on('listening', ServerHelperModule.onListening);

export {
    app,
}
