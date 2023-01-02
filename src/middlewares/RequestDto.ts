import { Exception } from '../bin';
import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

const RequestDto =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync({ ...req.body, ...req.query });
      next();
    } catch (err) {
      next(Exception.dto_error);
    }
  };

export default RequestDto;
