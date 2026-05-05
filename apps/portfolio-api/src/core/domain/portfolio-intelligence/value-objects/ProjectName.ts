export class ProjectName {
  private constructor(
    private readonly value: string
  ) {}

  static create(value: string): ProjectName {
    if (value.trim().length < 3) {
      throw new Error(
        "Project name must contain at least 3 characters."
      );
    }

    return new ProjectName(value);
  }

  equals(other: ProjectName): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
