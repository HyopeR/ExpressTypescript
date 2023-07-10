import { Request, Response, NextFunction } from 'express';
import { DataHandler } from '../core/handlers';

const ResponseHandler =
  (action: (req: Request) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await action(req);
      return new DataHandler(200, data).handle(res);
    } catch (err: unknown) {
      next(err);
    }
  };

export default ResponseHandler;
