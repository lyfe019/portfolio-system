import { randomUUID } from "crypto";
import { ProjectName } from "../value-objects/ProjectName";

export class PortfolioProject {
  constructor(
    public readonly id: string,
    private name: ProjectName
  ) {}

  static create(name: string): PortfolioProject {
    return new PortfolioProject(
      randomUUID(),
      ProjectName.create(name)
    );
  }

  rename(newName: ProjectName): void {
    this.name = newName;
  }

  currentName(): string {
    return this.name.toString();
  }
}
