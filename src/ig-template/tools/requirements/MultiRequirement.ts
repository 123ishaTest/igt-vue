import {Requirement} from "@/ig-template/tools/requirements/Requirement";

/**
 * All requirements in the provided list need to be completed for this requirement to be completed.
 */
export class MultiRequirement extends Requirement {
    requirements: Requirement[];

    constructor(requirements: Requirement[]) {
        super();
        this.requirements = requirements;
    }

    get isCompleted() {
        return this.requirements.every(requirement => {
            return requirement.isCompleted;
        });
    }

    get hint(): string {
        let hint = "Complete the following requirements:\n";
        for (const req of this.requirements) {
            hint += req.hint + "\n";
        }
        return hint;
    }

    get actualValue(): number {
        let completed = 0;

        for (const req of this.requirements) {
            if (req.isCompleted) {
                completed++;
            }
        }
        return completed;
    }

    get targetValue(): number {
        return this.requirements.length;
    }


}
