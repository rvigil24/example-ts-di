import { dependencyContainer } from "./dependencies-container";

export const Injectable = (key: string) => {
  return (InjectableClass: any) => {
    dependencyContainer.set(key, new InjectableClass());
  };
};
