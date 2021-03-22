import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";

export class RawFish extends AbstractItem {
    constructor() {
        super('Raw Fish', 'Maybe you can cook it?', ItemId.RawFish, ItemType.Default);
    }
}
