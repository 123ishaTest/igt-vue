import {AbstractConsumable} from "@/ig-template/features/items/Consumable";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {Wallet} from "@/ig-template/features/wallet/Wallet";

export class MoneyPouch extends AbstractConsumable {
    consumeLabel: string = "Open";
    _wallet: Wallet;

    moneyToGain: number = 10;

    constructor(wallet: Wallet) {
        super('Money Pouch', 'Open for some coins', ItemId.MoneyPouch, ItemType.Consumable);
        this._wallet = wallet;
    }

    canConsume(): boolean {
        return true;
    }

    consume(): void {
        this._wallet.gainCurrency(new Currency(this.moneyToGain, CurrencyType.Money));
    }

    consumeMultiple(amount: number) {
        this._wallet.gainCurrency(new Currency(this.moneyToGain * amount, CurrencyType.Money));
    }
}
