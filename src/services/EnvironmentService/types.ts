declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends Environment {}
  }
}

interface Environment {
  NODE_ENV: string;
  PORT: string;

  REDIS_URI: string;
  REDIS_PORT: string;
  REDIS_PASSWORD: string;

  SECRET_KEY: string;
}

export { Environment };
