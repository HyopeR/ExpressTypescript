import { OptionalHandlerProps } from './type';
import { Response } from 'express';

class ErrorHandler extends Error {
  key: string;
  message: string;
  detail: any;
  statusCode: number;

  constructor(key: string, message: string, props?: OptionalHandlerProps) {
    super();
    this.key = key;
    this.message = message;
    this.detail = props?.detail;
    this.statusCode = props?.statusCode || 400;
  }

  get json() {
    return {
      success: false,
      statusCode: this.statusCode,
      data: null,
      error: {
        key: this.key,
        message: this.message,
        detail: this.detail,
      },
    };
  }

  handle(res: Response) {
    const error = this.json;
    res.status(this.statusCode).json(error);
  }
}

export default ErrorHandler;
