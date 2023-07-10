import { HandlerOptions, ExtraField } from './types';
import { Response } from 'express';

class DataHandler {
  data: any;
  statusCode: number;
  extra: ExtraField | null;

  constructor(data: any, props: HandlerOptions) {
    this.data = data;
    this.statusCode = props?.statusCode || 200;
    this.extra = props?.extra || null;
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
      success: true,
      statusCode: this.statusCode,
      data: this.data,
      error: null,
      extra: this.extra,
    };
  }

  handle(res: Response) {
    const data = this.json;
    res.status(this.statusCode).json(data);
  }
}

export default DataHandler;
