export class ProjectName {
    value;
    constructor(value) {
        this.value = value;
    }
    static create(value) {
        if (value.trim().length < 3) {
            throw new Error("Project name must contain at least 3 characters.");
        }
        return new ProjectName(value);
    }
    equals(other) {
        return this.value === other.value;
    }
    toString() {
        return this.value;
    }
}
//# sourceMappingURL=ProjectName.js.map