import { randomUUID } from "crypto";
import { ProjectName } from "../value-objects/ProjectName";
export class PortfolioProject {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static create(name) {
        return new PortfolioProject(randomUUID(), ProjectName.create(name));
    }
    rename(newName) {
        this.name = newName;
    }
    currentName() {
        return this.name.toString();
    }
}
//# sourceMappingURL=PortfolioProject.js.map