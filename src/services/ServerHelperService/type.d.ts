import { Server } from 'http';
import debug from "debug";

export type ServerHelperProps = {
    server: Server,
    port: string,
    debug: debug,
}

interface IServerError extends Error {
    syscall: string,
    code: string,
}

export interface ServerError extends Partial<IServerError> {}
