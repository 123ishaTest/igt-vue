import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import Decimal from "@/lib/break_eternity.min";
import {DecimalValue} from "@/lib/DecimalValueType";

export class CurrencyRequirement extends Requirement {

    private _wallet: Wallet;
    amount: Decimal;
    type: CurrencyType;


    constructor(wallet: Wallet, amount: DecimalValue, type: CurrencyType) {
        super();
        this._wallet = wallet;
        this.amount = new Decimal(amount);
        this.type = type;
    }

    get actualValue(): Decimal {
        return this._wallet.getAmount(this.type);
    }

    get targetValue(): Decimal {
        return this.amount;
    }

    get hint(): string {
        return `Have ${this.amount} ${this.type}`;
    }

}
