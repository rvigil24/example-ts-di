import { dependencyContainer } from "./dependencies-container";

export const Inject = (key: string): any => {
  return (classToInject: any, property: string) => {
    Object.defineProperty(classToInject, property, {
      get: () => dependencyContainer.get(key),
      enumerable: true,
      configurable: true,
    });
  };
};
