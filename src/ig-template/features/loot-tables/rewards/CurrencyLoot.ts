import {AbstractLoot} from "@/ig-template/features/loot-tables/rewards/AbstractLoot";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class CurrencyLoot extends AbstractLoot {

    loot: CurrencyType;
    _wallet: Wallet;


    constructor(amount: number, type: CurrencyType, wallet: Wallet) {
        super(amount);
        this.loot = type;
        this._wallet = wallet;
    }

    apply(): void {
        this._wallet.gainCurrency(new Currency(this.amount, this.loot));
    }

    toHtml(): string {
        return `Currency ${this.loot}`;
    }

    equals(other: AbstractLoot): boolean {
        if (other instanceof CurrencyLoot && other.loot === this.loot) {
            return true;
        }
        return false;
    }

}
