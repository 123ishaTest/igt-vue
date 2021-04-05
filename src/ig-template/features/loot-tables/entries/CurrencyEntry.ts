import {AbstractLootEntry} from "@/ig-template/features/loot-tables/entries/AbstractLootEntry";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {NoRequirement} from "@/ig-template/tools/requirements/NoRequirement";
import {IntRange} from "@/ig-template/tools/probability/IntRange";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {CurrencyLoot} from "@/ig-template/features/loot-tables/rewards/CurrencyLoot";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";

export class CurrencyEntry extends AbstractLootEntry {
    _wallet: Wallet;
    type: CurrencyType;

    constructor(amount: IntRange, type: CurrencyType, wallet: Wallet, weight: number = 1, requirement: Requirement = new NoRequirement()) {
        super(weight, amount, requirement);
        this.type = type;
        this._wallet = wallet;
    }

    getLoot(): CurrencyLoot[] {
        if (!this.canGet()) {
            return [];
        }
        return [new CurrencyLoot(this.amount.getRandomBetween(), this.type, this._wallet)];
    }

}
