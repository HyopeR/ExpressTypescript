export const skeletonDto = (
  depth: string,
  serviceName: string,
  fileName: string
) => {
  return `
import Joi from 'joi';

const ${serviceName}CreateDto = Joi.object({});

const ${serviceName}UpdateDto = Joi.object({});

export { ${serviceName}CreateDto, ${serviceName}UpdateDto };
`.trim();
};
