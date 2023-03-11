declare global {
  interface Promise<T> {
    toPromiseArray(): Promise<[Error | null, T | undefined]>;
  }
}

Promise.prototype.toPromiseArray = function <T>() {
  return this.then((data: T): [null, T] => {
    return [null, data];
  }).catch((err: Error): [Error, undefined] => {
    return [err, undefined];
  });
};

export {};
