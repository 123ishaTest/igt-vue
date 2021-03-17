import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";

export class EmptyItem extends AbstractItem {

    constructor() {
        super('Empty', '', ItemId.Empty, ItemType.Empty, 0);
    }
}
