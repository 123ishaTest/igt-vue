import {Feature} from "@/ig-template/features/Feature";
import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {EmptyItem} from "@/ig-template/features/items/instances/EmptyItem";
import {MoneyPouch} from "@/ig-template/features/items/instances/MoneyPouch";
import {Features} from "@/ig-template/Features";
import {MoneyPouch2} from "@/ig-template/features/items/instances/MoneyPouch2";

export class ItemList extends Feature {

    _features = undefined as unknown as Features

    constructor() {
        super('item-list');
    }


    initialize(features: Features) {
        super.initialize(features);
        this._features = features;
    }

    get getEmpty(): EmptyItem {
        return new EmptyItem()
    }

    get moneyPouch(): MoneyPouch {
        return new MoneyPouch(this._features.wallet)
    }
    get moneyPouch2(): MoneyPouch2 {
        return new MoneyPouch2(this._features.wallet)
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {}
    }
}
