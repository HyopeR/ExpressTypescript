export const skeletonController = (
  depth: string,
  serviceName: string,
  fileName: string
) => {
  return `
import { Request } from 'express';
import { ${serviceName}Service } from './${fileName}.service';

const get = async (req: Request) => {
  const result = await ${serviceName}Service.get();

  return result;
};

const getOne = async (req: Request) => {
  const result = await ${serviceName}Service.getOne();

  return result;
};

const create = async (req: Request) => {
  const result = await ${serviceName}Service.create();

  return result;
};

const remove = async (req: Request) => {
  const result = await ${serviceName}Service.remove();

  return result;
};

const update = async (req: Request) => {
  const result = await ${serviceName}Service.update();

  return result;
};

export const ${serviceName}Controller = {
  get,
  getOne,
  create,
  remove,
  update,
};
`.trim();
};
