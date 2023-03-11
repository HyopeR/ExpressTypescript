import { Server } from 'http';
import { Debugger } from 'debug';

export interface ServerHelperProps {
  server: Server;
  port: string;
  debug: Debugger;
}

interface IServerError extends Error {
  syscall: string;
  code: string;
}

export type ServerError = Partial<IServerError>;
