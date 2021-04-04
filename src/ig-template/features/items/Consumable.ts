import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export abstract class AbstractConsumable extends AbstractItem {

    /**
     * What will be shown on the consume button
     */
    abstract consumeLabel: string;

    protected constructor(name: string, description: string, id: ItemId, type: ItemType, maxStack: DecimalValue = Decimal.dInf) {
        super(name, description, id, type, maxStack);
    }

    /**
     * What to do when this item is consumed.
     */
    abstract consume(): void;

    /**
     * NOTE: your consumables can probably do something more clever here.
     * Make sure to override this method as needed. ESPECIALLY if you plan
     * on having consumables over the max safe integer limit
     */
    consumeMultiple(amount: DecimalValue): void {
        amount = new Decimal(amount);
        for (let i = 0; amount.gt(i); i++) {
            this.consume()
        }
    }

    /**
     * Whether or not this item can be consumed.
     */
    abstract canConsume(): boolean;
}
