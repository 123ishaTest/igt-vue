import {Requirement} from "@/ig-template/tools/requirements/Requirement";

/**
 * Only 1 requirement in the provided list need to be completed for this requirement to be completed.
 */
export class OneOfRequirement extends Requirement {
    requirements: Requirement[];

    constructor(requirements: Requirement[]) {
        super();
        this.requirements = requirements;
    }

    public get isCompleted() {
        return this.requirements.some(requirement => {
            return requirement.isCompleted;
        });
    }

    get hint(): string {
        let hint = "Complete one of following requirements:\n";
        for (const req of this.requirements) {
            hint += req.hint + "\n";
        }
        return hint;
    }

    get actualValue(): number {
        return this.isCompleted ? 1 : 0;
    }

    get targetValue(): number {
        return 1;
    }


}
