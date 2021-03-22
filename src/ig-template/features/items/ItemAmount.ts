import {ItemId} from "@/ig-template/features/items/ItemId";

export class ItemAmount {
    id: ItemId;
    amount: number;

    constructor(id: ItemId, amount: number) {
        this.id = id;
        this.amount = amount;
    }
}
