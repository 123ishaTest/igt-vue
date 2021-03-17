import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";

export abstract class AbstractConsumable extends AbstractItem {

    /**
     * What will be shown on the consume
     */
    label: string;

    protected constructor(name: string, description: string, id: ItemId, type: ItemType, maxStack: number, label: string) {
        super(name, description, id, type, maxStack);
        this.label = label;
    }

    /**
     * What to do when this item is consumed.
     */
    abstract consume(): void;

    /**
     * Whether or not this item can be consumed.
     */
    abstract canConsume(): boolean;
}
