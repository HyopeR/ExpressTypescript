import readline from 'readline';

export const readlineManager = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const execAsyncQuestion = (question: string): Promise<string[]> => {
  return new Promise((resolve) => {
    readlineManager.question(question, (value: string) => {
      resolve(value.split(' ').filter((field) => field));
      readlineManager.close();
    });
  });
};

export const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const camelToSnakeCase = (value: string) =>
  value
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

export const camelToTitleCase = (value: string) => {
  const result = value.replace(/([A-Z])/g, '$1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const snakeToCamelCase = (value: string) =>
  value
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group: string) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    );
