import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const RequestDto =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync({ ...req.body, ...req.query });
      next();
    } catch (err: unknown) {
      next(err);
    }
  };

export default RequestDto;
