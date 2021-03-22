import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";
import {AbstractConsumable} from "@/ig-template/features/items/Consumable";

export class CookedFish extends AbstractConsumable {
    constructor() {
        super('Cooked Fish', 'Delicious', ItemId.CookedFish, ItemType.Consumable);
    }

    consumeLabel: string = "Eat";

    canConsume(): boolean {
        return true;
    }

    consume(): void {
        // Empty
    }
}
