import {Feature} from "@/ig-template/features/Feature";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {EmptyItem} from "@/ig-template/features/items/instances/EmptyItem";

export class ItemList extends Feature {


    constructor() {
        super('item-list');
    }

    get emptyItem(): EmptyItem {
        return new EmptyItem()
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {}
    }
}
