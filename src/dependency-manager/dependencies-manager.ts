import { dependenciesContainer } from "./dependencies-container";

class DependenciesManager {
  private dependencies: Record<string, any>;

  constructor() {
    this.dependencies = {};
    dependenciesContainer.forEach(({ key, value }) => {
      this.set(key, new value());
    });
  }

  set(key: string, dependency: any) {
    this.dependencies[key] = dependency;
  }

  get(key: string) {
    const existingDependency = this.dependencies[key];
    if (!existingDependency) {
      throw new Error("Dependency not found!");
    }
    return existingDependency;
  }
}

export const dependenciesManager = new DependenciesManager();
