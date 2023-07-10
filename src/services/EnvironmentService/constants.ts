import Joi from 'joi';
import { Environment } from './types';

export const env = {} as Environment;
export const schema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    PORT: Joi.number().default(3306),

    REDIS_URI: Joi.string().required().description('Redis url'),
    REDIS_PORT: Joi.number().default(6379),
    REDIS_PASSWORD: Joi.any(),

    SECRET_KEY: Joi.string().default('my_secret').description('Secret key'),
  })
  .unknown();
