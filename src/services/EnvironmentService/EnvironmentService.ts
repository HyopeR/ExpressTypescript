import path from 'path';
import dotenv from 'dotenv';
import { env, schema } from './constants';
import { Environment } from './types';

class EnvironmentService {
  rootDirectory = '../../../';
  rootName = 'env';

  #env = env;
  #schema = schema;

  get env() {
    return this.#env;
  }

  get schema() {
    return this.#schema;
  }

  initialize() {
    const envPath = this.getEnvPath();
    if (!envPath) {
      throw new Error('NODE_ENV is required. Example: development');
    }

    dotenv.config({ path: envPath });
    const error = this.validate(process.env);
    if (error) {
      throw new Error(`Environment error: ${error.message}`);
    }

    this.fill(process.env);
    return this.env;
  }

  validate(env: Environment) {
    const { error } = this.schema
      .prefs({
        errors: { label: 'key' },
      })
      .validate(env);

    return error;
  }

  fill(env: Environment) {
    this.#env = Object.entries(env).reduce((prev, current) => {
      const [key, value] = current;
      return {
        ...prev,
        [key]: value,
      };
    }, {}) as Environment;
  }

  getEnvPath() {
    const nodeEnv = process?.env?.NODE_ENV;

    if (nodeEnv) {
      const pieces = [this.rootDirectory, this.rootName];
      if (nodeEnv !== 'production') {
        pieces.push(nodeEnv);
      }

      const envPath = pieces.join('.');
      return path.join(__dirname, envPath);
    }

    return null;
  }
}

export default EnvironmentService;
