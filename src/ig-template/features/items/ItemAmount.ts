import {ItemId} from "@/ig-template/features/items/ItemId";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export class ItemAmount {
    id: ItemId;
    amount: Decimal;

    constructor(id: ItemId, amount: DecimalValue) {
        this.id = id;
        this.amount = new Decimal(amount);
    }
}
