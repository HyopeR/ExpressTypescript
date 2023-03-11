interface IEnvironment extends NodeJS.ProcessEnv {
  NODE_ENV: string;
  PORT: string;

  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_DIALECT: string;
  DB_HOST: string;
  DB_PORT: string;

  REDIS_URI: string;
  REDIS_PORT: string;
  REDIS_PASSWORD: string;

  SECRET_KEY: string;
}

export type Environment = Partial<IEnvironment>;
