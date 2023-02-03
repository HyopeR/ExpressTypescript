export const skeletonService = (
  depth: string,
  serviceName: string,
  fileName: string
) => {
  return `
const get = async () => {
  return {};
};

const getOne = async () => {
  return {};
};

const create = async () => {
  return {};
};

const remove = async () => {
  return {};
};

const update = async () => {
  return {};
};

export const ${serviceName}Service = {
  get,
  getOne,
  create,
  remove,
  update,
};
`.trim();
};
