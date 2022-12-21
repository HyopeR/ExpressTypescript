import { Server } from 'http';
import { Debugger } from 'debug';
import { ServerHelperProps, ServerError } from './type';

class ServerHelperService {
  #server: Server;
  #port: any;
  #debug: Debugger;

  get server() {
    return this.#server;
  }

  get port() {
    return this.#port;
  }

  get debug() {
    return this.#debug;
  }

  constructor({ server, port, debug }: ServerHelperProps) {
    this.#server = server;
    this.#port = this.normalizePort(port);
    this.#debug = debug;
  }

  normalizePort(value: string) {
    const port = parseInt(value, 10);

    if (isNaN(port)) {
      return value;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  }

  onListening = () => {
    const address = this.server.address();
    const bind =
      typeof address === 'string' ? `pipe ${address}` : `port ${address?.port}`;

    this.debug(`Listening on ${bind}`);
  };

  onError = (error: ServerError) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind =
      typeof this.port === 'string' ? `Pipe ${this.port}` : `Port ${this.port}`;

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;

      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;

      default:
        throw error;
    }
  };
}

export default ServerHelperService;
