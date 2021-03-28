import {Feature} from "@/ig-template/features/Feature";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {KeyItem} from "@/ig-template/features/key-items/KeyItem";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";
import {KeyItemSaveData} from "@/ig-template/features/key-items/KeyItemSaveData";

export class KeyItems extends Feature {
    list: KeyItem[];

    private _onKeyItemGain = new SimpleEventDispatcher<KeyItem>();

    constructor() {
        super('key-items');
        this.list = [
            new KeyItem(KeyItemId.Item1, "Item 1", "Grants access to something", "Maybe look over there?", "logo.png"),
            new KeyItem(KeyItemId.Item2, "Item 2", "Now you can do something"),
        ]
    }

    getKeyItem(id: KeyItemId) {
        return this.list.find(item => {
            return item.id === id;
        })
    }

    gainKeyItem(id: KeyItemId) {
        const item = this.getKeyItem(id);
        if (!item) {
            console.warn(`Key Item with id ${id} could not be found`);
            return;
        }
        item.unlock();
        this._onKeyItemGain.dispatch(item);
    }

    /**
     * Emitted whenever a currency is gained
     * @private
     */
    public get onKeyItemGain(): ISimpleEvent<KeyItem> {
        return this._onKeyItemGain.asEvent();
    }

    load(data: KeyItemSaveData): void {
        data.list?.forEach(id => {
            const item = this.getKeyItem(id);
            if (item) {
                item.isUnlocked = true;
            }
        })
    }

    save(): KeyItemSaveData {
        return {
            list: this.list.filter(item => {
                return item.isUnlocked;
            }).map(item => {
                return item.id;
            }),
        };
    }
}
