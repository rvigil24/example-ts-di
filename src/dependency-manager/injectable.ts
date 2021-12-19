import { dependenciesManager } from "./dependencies-manager";

export const Injectable = (key: string) => {
  return (InjectableClass: any) => {
    dependenciesManager.set(key, new InjectableClass());
  };
};
