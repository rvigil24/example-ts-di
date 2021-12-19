import { dependenciesManager } from "./dependencies-manager";

export const Inject = (key: string): any => {
  return (classToInject: any, property: string) => {
    Object.defineProperty(classToInject, property, {
      get: () => dependenciesManager.get(key),
      enumerable: true,
      configurable: true,
    });
  };
};
