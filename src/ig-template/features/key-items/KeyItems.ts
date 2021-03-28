import {Feature} from "@/ig-template/features/Feature";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {KeyItem} from "@/ig-template/features/key-items/KeyItem";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";
import {KeyItemSaveData} from "@/ig-template/features/key-items/KeyItemSaveData";

export class KeyItems extends Feature {
    list: Record<KeyItemId, KeyItem>

    private _onKeyItemGain = new SimpleEventDispatcher<KeyItem>();

    constructor() {
        super('key-items');
        this.list = {} as Record<KeyItemId, KeyItem>;
    }


    initialize() {
        this.registerKeyItem(new KeyItem(KeyItemId.Item1, "Item 1", "Grants access to something", "Maybe look over there?", "logo.png"));
        this.registerKeyItem(new KeyItem(KeyItemId.Item2, "Item 2", "Now you can do something"));
    }

    public registerKeyItem<T extends KeyItem>(keyItem: T): T {
        this.list[keyItem.id] = keyItem;
        return keyItem;
    }

    hasKeyItem(id: KeyItemId): boolean {
        return this.getKeyItem(id)?.isUnlocked;
    }

    getKeyItem(id: KeyItemId): KeyItem {
        return this.list[id];
    }

    gainKeyItem(id: KeyItemId) {
        const item = this.getKeyItem(id);
        if (!item) {
            console.warn(`Key Item with id ${id} could not be found`);
            return;
        }
        const didUnlock = item.unlock();
        if (didUnlock) {
            this._onKeyItemGain.dispatch(item);
        }
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
        const list = [];
        for (const key in this.list) {
            if (this.list[key as KeyItemId].isUnlocked) {
                list.push(key as KeyItemId)
            }
        }
        return {
            list: list,
        };
    }
}
