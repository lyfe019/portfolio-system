import { ProjectName } from "../value-objects/ProjectName";
export declare class PortfolioProject {
    readonly id: string;
    private name;
    constructor(id: string, name: ProjectName);
    static create(name: string): PortfolioProject;
    rename(newName: ProjectName): void;
    currentName(): string;
}
