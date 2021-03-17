import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";

export abstract class AbstractConsumable extends AbstractItem {

    /**
     * What will be shown on the consume
     */
    abstract label: string;

    protected constructor(name: string, description: string, id: ItemId, type: ItemType, maxStack: number = Infinity) {
        super(name, description, id, type, maxStack);
    }

    /**
     * What to do when this item is consumed.
     */
    abstract consume(): void;

    /**
     * NOTE: your consumables can probably do something more clever here.
     * Make sure to override this method as needed.
     */
    consumeMultiple(amount: number): void {
        for (let i = 0; i < amount; i++) {
            this.consume()
        }
    }

    /**
     * Whether or not this item can be consumed.
     */
    abstract canConsume(): boolean;
}
