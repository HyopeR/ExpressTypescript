import { OptionalHandlerProps } from './type';

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
}

export default DataHandler;
