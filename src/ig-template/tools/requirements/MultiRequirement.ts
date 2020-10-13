import {Requirement} from "@/ig-template/tools/requirements/Requirement";


export class MultiRequirement extends Requirement {
    requirements: Requirement[];

    constructor(requirements: Requirement[]) {
        super();
        this.requirements = requirements;
    }

    public isCompleted() {
        return this.requirements.every(requirement => {
            return requirement.isCompleted();
        });
    }

    getActualValue(): number {
        let completed = 0;

        for (const req of this.requirements) {
            if (req.isCompleted()) {
                completed++;
            }
        }
        return completed;
    }

    getTargetValue(): number {
        return this.requirements.length;
    }

    hint(): string {
        return "";
    }

}
