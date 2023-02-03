import fs from 'fs';
import Skeleton from './skeleton';
import { execAsyncQuestion, camelToSnakeCase, camelToTitleCase } from './utils';

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
    'Type the subfolders you want to add, specifying spaces.',
    'Optional input (for example api): ',
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
