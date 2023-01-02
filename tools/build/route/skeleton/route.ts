export const skeletonRoute = (
  depth: string,
  serviceName: string,
  fileName: string
) => {
  return `
import express from 'express';

import { ${serviceName}Controller } from './${fileName}.controller';
import { ${serviceName}CreateDto, ${serviceName}UpdateDto } from './${fileName}.dto';
import { ResponseHandler, RequestDto } from '${depth}middlewares';

const router = express.Router();

router.get('/', ResponseHandler(${serviceName}Controller.get));

router.get('/:id', ResponseHandler(${serviceName}Controller.getOne));

router.post(
  '/',
  RequestDto(${serviceName}CreateDto),
  ResponseHandler(${serviceName}Controller.create)
);

router.delete('/:id', ResponseHandler(${serviceName}Controller.remove));

router.put(
  '/:id',
  RequestDto(${serviceName}UpdateDto),
  ResponseHandler(${serviceName}Controller.update)
);

export default router;
`.trim();
};
