import { dependencyMapper } from "./dependency-mapper";

export class DependenciesContainer {
  private dependencies: Record<string, any>;

  constructor() {
    this.dependencies = {};
    dependencyMapper.forEach(({ key, value }) => {
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
