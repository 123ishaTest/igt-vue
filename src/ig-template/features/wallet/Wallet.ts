import {Currency} from "./Currency";
import {CurrencyType} from "./CurrencyType";

import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {Feature} from "@/ig-template/features/Feature";
import {WalletSaveData} from "@/ig-template/features/wallet/WalletSaveData";
import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";
import {NumberField} from "@/ig-template/developer-panel/fields/NumberField";
import {FunctionField} from "@/ig-template/developer-panel/fields/FunctionField";
import {RangeField} from "@/ig-template/developer-panel/fields/RangeField";


export class Wallet extends Feature {
    private _currencies: Record<CurrencyType, number> = {} as Record<CurrencyType, number>
    private _multipliers: Record<CurrencyType, number> = {} as Record<CurrencyType, number>

    private _onCurrencyGain = new SimpleEventDispatcher<Currency>();

    private readonly _supportedCurrencies: CurrencyType[];

    constructor(supportedCurrencies: CurrencyType[]) {
        super("wallet");

        this._supportedCurrencies = supportedCurrencies;

        // Initialize currencies and multipliers
        for (const type of this._supportedCurrencies) {
            this._currencies[type as CurrencyType] = 0;
            this._multipliers[type as CurrencyType] = 1;
        }
    }

    public getAmount(type: CurrencyType): number {
        if (!this.supportsCurrencyType(type)) {
            return 0;
        }
        return this._currencies[type];
    }

    /**
     * Gain the specified currency and apply the global multiplier
     */
    public gainCurrency(currency: Currency): void {
        currency.multiply(this.getCurrencyMultiplier(currency.type));

        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {
            console.warn(`Could not add currency ${currency.toString()}`);
            return;
        }

        this._onCurrencyGain.dispatch(currency);
        this._currencies[currency.type] += currency.amount;
    }

    /**
     * Return true if the currency is valid and the player has the specified amount.
     */
    public hasCurrency(currency: Currency): boolean {
        if (!this.supportsCurrencyType(currency.type)) {
            return false;
        }
        return this._currencies[currency.type] >= currency.amount;
    }

    /**
     * Remove the currency amount from the specified currency.
     * IMPORTANT: This method does not care if amounts go negative
     * @param currency
     */
    public loseCurrency(currency: Currency): void {
        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {
            console.warn(`Could not lose currency ${currency.toString()}`);
            return;
        }
        this._currencies[currency.type] -= currency.amount;
    }

    /**
     * Subtracts the specified currency and returns true if the wallet has enough.
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

    /**
     * Return 1 if the multiplier is not set
     */
    public getCurrencyMultiplier(type: CurrencyType): number {
        return this._multipliers[type] ?? 1;
    }

    public setCurrencyMultiplier(multiplier: number, type: CurrencyType): void {
        if (multiplier <= 0 || isNaN(multiplier) || !this.supportsCurrencyType(type)) {
            return;
        }
        this._multipliers[type] = multiplier;
    }

    public supportsCurrencyType(type: CurrencyType): boolean {
        return this._supportedCurrencies.includes(type);
    }

    public canAccess(): boolean {
        return true;
    }

    public save(): WalletSaveData {
        return {
            money: this._currencies[CurrencyType.Money],
            secondary: this._currencies[CurrencyType.Secondary],
        }
    }

    public load(data: WalletSaveData): void {
        this._currencies[CurrencyType.Money] = data.money ?? this._currencies[CurrencyType.Money];
        this._currencies[CurrencyType.Secondary] = data.secondary ?? this._currencies[CurrencyType.Secondary];
    }

    /**
     * Emitted whenever a currency is gained
     * @private
     */
    public get onCurrencyGain(): ISimpleEvent<Currency> {
        return this._onCurrencyGain.asEvent();
    }

    public get money(): number {
        return this._currencies.Money;
    }

    public set money(value: number) {
        this._currencies.Money = value;
    }


    getDeveloperPanelFields(): AbstractField[] {
        return [
            new NumberField('money', 'Money'),
            new FunctionField(() => {
                this.money = 10
            }, 'Set money to 10').setCssClass('btn-blue'),
            new RangeField('money', 0, 100, 2, 'Money Slider'),
        ]
    }
}
