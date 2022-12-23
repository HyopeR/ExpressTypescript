import i18next, { StringMap, TOptionsBase } from 'i18next';

declare global {
  interface String {
    translate(config?: TOptionsBase & StringMap): string;
  }
}

String.prototype.translate = function (
  config?: TOptionsBase & StringMap
): string {
  // @ts-ignore
  return i18next.t(this, config);
};

export {};
