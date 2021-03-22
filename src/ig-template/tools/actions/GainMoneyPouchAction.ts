import {AbstractAction} from "@/ig-template/tools/actions/AbstractAction";
import {Inventory} from "@/ig-template/features/inventory/Inventory";
import {ItemList} from "@/ig-template/features/items/ItemList";

export class GainMoneyPouchAction extends AbstractAction {

    _inventory: Inventory;
    _itemList: ItemList;

    constructor(description: string, duration: number, inventory: Inventory, itemList: ItemList) {
        super(description, duration);
        this._inventory = inventory;
        this._itemList = itemList;
    }

    gainReward(): boolean {
        this._inventory.gainItem(this._itemList.moneyPouch);
        return true;
    }

}
