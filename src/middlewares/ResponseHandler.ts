import { DataHandler } from '../core/handlers';
import { Request, Response, NextFunction } from 'express';

const ResponseHandler =
  (action: (req: Request) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await action(req);
      return new DataHandler(200, data).handle(res);
    } catch (err) {
      // console.log(1, err.message);
      // console.log(2, err.stack);
      // console.log(3, err.name);

      next(err);
    }
  };

export default ResponseHandler;
