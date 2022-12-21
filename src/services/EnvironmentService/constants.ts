import Joi from 'joi';
import { Environment } from './type';

export const env = {} as Environment;
export const schema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    PORT: Joi.number().default(3306),

    DB_NAME: Joi.string().required().description('Database name'),
    DB_USER: Joi.string().required().description('Database user'),
    DB_PASSWORD: Joi.string().required().description('Database password'),
    DB_DIALECT: Joi.string().description('Database Dialect'),
    DB_HOST: Joi.string().required().description('Database host'),
    DB_PORT: Joi.number().default(5432).description('Database port'),

    REDIS_URI: Joi.string().required().description('Redis url'),
    REDIS_PORT: Joi.number().default(6379),
    REDIS_PASSWORD: Joi.any(),

    SECRET_KEY: Joi.string().default('my_secret').description('Secret key'),
  })
  .unknown();
