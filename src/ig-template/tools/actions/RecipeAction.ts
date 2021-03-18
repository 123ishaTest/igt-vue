import {ItemAmount} from "@/ig-template/features/items/ItemAmount";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {AbstractAction} from "@/ig-template/tools/actions/AbstractAction";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {Inventory} from "@/ig-template/features/inventory/Inventory";
import {ItemList} from "@/ig-template/features/items/ItemList";

export class RecipeAction extends AbstractAction {
    duration: number;
    input: ItemAmount[];
    output: ItemAmount[];
    requirement: Requirement;

    _inventory: Inventory;
    _itemList: ItemList;

    constructor(description: string, duration: number, input: ItemAmount[], output: ItemAmount[], inventory: Inventory, itemList: ItemList, requirement: Requirement = new NoRequirement(), repeat: number = Infinity) {
        super(description, duration, repeat);
        this.duration = duration;
        this.input = input;
        this.output = output;
        this.requirement = requirement;

        this._inventory = inventory;
        this._itemList = itemList;

    }

    canPerform(): boolean {
        if (!this._inventory.hasItemAmounts(this.input)) {
            return false;
        }
        if (!this._inventory.canTakeItemAmounts(this.output)) {
            return false
        }

        return super.canPerform();
    }

    gainReward(): boolean {
        if (!this.canPerform()) {
            return false;
        }

        this.input.forEach(itemAmount => {
            this._inventory.loseItemAmount(itemAmount.id, itemAmount.amount);

        })

        this.output.forEach(itemAmount => {
            this._inventory.gainItem(this._itemList[itemAmount.id], itemAmount.amount);
        })

        // Check if we can still perform this recipe again
        return this.canPerform()
    }

}
