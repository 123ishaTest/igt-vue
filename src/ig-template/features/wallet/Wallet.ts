import {Currency} from "./Currency";
import {CurrencyType} from "./CurrencyType";

import {SimpleEventDispatcher, ISimpleEvent} from "strongly-typed-events";
import {Feature} from "@/ig-template/features/Feature";
import {App} from "@/App";
import {WalletSaveData} from "@/ig-template/features/wallet/WalletSaveData";


export class Wallet extends Feature {
    currencies: { [key: string]: number } = {}

    private _onCurrencyGain = new SimpleEventDispatcher<Currency>();

    constructor() {
        super("wallet");
        this.currencies[CurrencyType.Money] = 0;
        this.currencies[CurrencyType.Secondary] = 0;
    }


    /**
     * Gain the specified currency and apply the global multiplier
     * @param currency
     */
    public gainCurrency(currency: Currency): void {
        if (!currency.isValid()) {
            console.warn(`Could not add currency ${currency.toString()}`);
            return;
        }

        currency.multiply(App.game.getTotalCurrencyMultiplier(currency.type));

        this._onCurrencyGain.dispatch(currency);
        this.currencies[currency.type] += currency.amount;
    }

    public hasCurrency(currency: Currency): boolean {
        return this.currencies[currency.type] >= currency.amount;
    }

    /**
     * Remove the currency amount from the specified currency.
     * IMPORTANT: This method does not care if amounts go negative
     * @param currency
     */
    public loseCurrency(currency: Currency) {
        if (!currency.isValid()) {
            console.warn(`Could not lose currency ${currency.toString()}`);
            return;
        }

        this.currencies[currency.type] -= currency.amount;
    }

    /**
     * Subtracts the specified currency and returns true if the wallet had enough.
     * Otherwise return false and don't subtract anything
     * @param currency
     * @constructor
     */
    public payIfPossible(currency: Currency): boolean {
        if (this.hasCurrency(currency)) {
            this.loseCurrency(currency);
            return true;
        }
        return false;
    }


    public canAccess(): boolean {
        return true;
    }

    public load(data: WalletSaveData): void {
        this.currencies[CurrencyType.Money] = data.money ?? this.currencies[CurrencyType.Money];
        this.currencies[CurrencyType.Secondary] = data.secondary ?? this.currencies[CurrencyType.Secondary];
    }

    public save(): WalletSaveData {
        return {
            money: this.currencies[CurrencyType.Money],
            secondary: this.currencies[CurrencyType.Secondary],
        }
    }

    /**
     * Emitted whenever a currency is gained
     * @private
     */
    public get onCurrencyGain(): ISimpleEvent<Currency> {
        return this._onCurrencyGain.asEvent();
    }

}
