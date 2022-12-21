class DataHandler extends Object {
  data: any;
  statusCode: number;

  constructor(data: any, statusCode: number) {
    super();
    this.data = data;
    this.statusCode = statusCode;
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
