import {AbstractConsumable} from "@/ig-template/features/items/Consumable";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {Wallet} from "@/ig-template/features/wallet/Wallet";

export class MoneyPouch2 extends AbstractConsumable {
    label: string = "Open";
    _wallet: Wallet;

    constructor(wallet: Wallet) {
        super('Another item', 'Interesting', ItemId.MoneyPouch2, ItemType.Consumable, 3);
        this._wallet = wallet;
    }

    canConsume(): boolean {
        return true;
    }

    consume(): void {
        this._wallet.gainCurrency(new Currency(100, CurrencyType.Money))
    }


}
