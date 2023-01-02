import { OptionalHandlerProps } from './type';
import { Response } from 'express';

class DataHandler extends Object {
  data: any;
  statusCode: number;

  constructor(data: any, props: OptionalHandlerProps) {
    super();
    this.data = data;
    this.statusCode = props?.statusCode || 200;
  }

  get json() {
    return {
      success: true,
      statusCode: this.statusCode,
      data: this.data,
      error: null,
    };
  }

  handle(res: Response) {
    const data = this.json;
    res.status(this.statusCode).json(data);
  }
}

export default DataHandler;
