import fs from 'fs';
import Skeleton from './skeleton';
import { execAsyncQuestion, camelToSnakeCase, camelToTitleCase } from './utils';

/**
 * Hello dev friend.
 * ATTENTION 1: To use the easy route builder you simply have to do this.
 * ATTENTION 2: Use the route name as a camel case.
 *
 * @example npm run route:build preferRouteName preferRouteName2
 */

const ext = 'ts';
const routesPath = [process.env.NODE_PATH, 'routes'].join('/');
const routes = process.argv.slice(2);

const types = ['dto', 'route', 'controller', 'service'] as const;

const createFolder = (path: string) => {
  !fs.existsSync(path)
    ? fs.mkdirSync(path)
    : console.log(`Folder ${path} exist.`);
};

const createRoutes = async () => {
  const routesPathQuestion = [
    `Current routes directory; ${routesPath}`,
    'If you want to create subfolders, you can specify it with spaces.',
    '[OPTIONAL] For example: api public: ',
  ].join('\n');

  const routesPathSubFolders = await execAsyncQuestion(routesPathQuestion);

  routes.forEach((route) => {
    const routeFolder = camelToTitleCase(route);
    const nestedFolders: string[] = [];
    const loopFolders = [...routesPathSubFolders, routeFolder];

    loopFolders.forEach((folder) => {
      const subFolder = [routesPath, ...nestedFolders, folder].join('/');
      nestedFolders.push(folder);
      createFolder(subFolder);
    });

    const nestedPath = [routesPath, ...nestedFolders].join('/');
    const deepPath = nestedPath
      .split('/')
      .slice(1)
      .map((field) => '../')
      .join('');

    types.forEach((type) => {
      const currentPath = [camelToSnakeCase(route), type, ext].join('.');
      const currentService = camelToTitleCase(route);
      const currentFile = camelToSnakeCase(route);
      const currentSkeleton = Skeleton[type];

      const targetPath = [nestedPath, currentPath].join('/');
      fs.writeFileSync(
        targetPath,
        currentSkeleton(deepPath, currentService, currentFile)
      );
    });
  });
};

createFolder(routesPath);
createRoutes();
