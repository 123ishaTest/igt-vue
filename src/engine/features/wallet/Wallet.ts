import {Currency} from "./Currency";
import {CurrencyType} from "./CurrencyType";
import {Feature} from "@/game/Feature";
import {WalletSaveData} from "@/engine/features/wallet/WalletSaveData";

import {SimpleEventDispatcher, ISimpleEvent} from "strongly-typed-events";


export class Wallet extends Feature {
    name = 'Wallet';
    currencies: { [key: string]: number } = {}

    private _onMoneyGain = new SimpleEventDispatcher<number>();

    constructor() {
        super();
        this.currencies[CurrencyType[CurrencyType.money]] = 0;
        this.currencies[CurrencyType[CurrencyType.somethingElse]] = 0;
    }

    public gainMoney(base: number, origin?: string): number {

        // const money = base * App.game.getTotalMoneyMultiplier();
        const money = base;

        this._onMoneyGain.dispatch(money);
        this.addCurrency(new Currency(money, CurrencyType.money));
        return money;
    }


    private addCurrency(currency: Currency) {
        if (isNaN(currency.amount) || currency.amount <= 0) {
            console.trace(`Could not add currency ${currency.toString()}`);
            return;
        }

        this.currencies[CurrencyType[currency.type]] += currency.amount;
    }

    public hasCurrency(currency: Currency) {
        return this.currencies[CurrencyType[currency.type]] >= currency.amount;
    }

    public loseCurrency(currency: Currency) {
        if (isNaN(currency.amount) || currency.amount <= 0) {
            console.trace(`Could not lose currency ${currency.toString()}`);
            return;
        }

        this.currencies[CurrencyType[currency.type]] -= currency.amount;
    }

    saveKey: string = "wallet";

    load(data: WalletSaveData): void {
        this.currencies[CurrencyType[CurrencyType.money]] = data.money;
        this.currencies[CurrencyType[CurrencyType.somethingElse]] = data.other;
    }

    parseSaveData(json: Record<string, unknown>): WalletSaveData {
        return new WalletSaveData(json?.money as number ?? 0, json?.other as number ?? 0)
    }

    save(): WalletSaveData {
        return new WalletSaveData(this.currencies[CurrencyType[CurrencyType.money]], this.currencies[CurrencyType[CurrencyType.somethingElse]])
    }

    public get onMoneyGain(): ISimpleEvent<number> {
        return this._onMoneyGain.asEvent();
    }

}
