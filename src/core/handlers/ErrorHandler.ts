import { HandlerOptions } from './types';
import { Response } from 'express';

class ErrorHandler extends Error {
  key: string;
  message: string;
  detail: any;
  statusCode: number;

  constructor(key: string, props?: HandlerOptions) {
    super();
    this.key = key;
    this.message = '';
    this.detail = props?.detail || null;
    this.statusCode = props?.statusCode || 400;
  }

  set(options: HandlerOptions = {}) {
    Object.entries(options).forEach((opt) => {
      const [key, value] = opt;
      // @ts-ignore
      this[key] = value;
    });

    return this;
  }

  get json() {
    return {
      success: false,
      statusCode: this.statusCode,
      data: null,
      error: {
        key: this.key,
        message: `error.${this.key}`.translate(),
        detail: this.detail,
      },
      extra: null,
    };
  }

  handle(res: Response) {
    const error = this.json;
    res.status(this.statusCode).json(error);
  }
}

export default ErrorHandler;
