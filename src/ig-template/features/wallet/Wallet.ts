import {Currency} from "@/ig-template/features/wallet/Currency";
import Decimal from "@/lib/break_eternity.min";
import {WalletSaveData} from "@/ig-template/features/wallet/WalletSaveData";
import {Feature} from "@/ig-template/features/Feature";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {ISimpleEvent, SimpleEventDispatcher} from "strongly-typed-events";
import {AbstractField} from "@/ig-template/developer-panel/fields/AbstractField";
import {NumberField} from "@/ig-template/developer-panel/fields/NumberField";
import {FunctionField} from "@/ig-template/developer-panel/fields/FunctionField";
import {RangeField} from "@/ig-template/developer-panel/fields/RangeField";
import {DecimalValue} from "@/lib/DecimalValueType";


export class Wallet extends Feature {
    // We now store a dictionary of Decimals instead of numbers
    private _currencies: Record<CurrencyType, Decimal> = {} as Record<CurrencyType, Decimal>;
    private _multipliers: Record<CurrencyType, Decimal> = {} as Record<CurrencyType, Decimal>;

    private _onCurrencyGain = new SimpleEventDispatcher<Currency>();

    private readonly _supportedCurrencies: CurrencyType[];

    constructor(supportedCurrencies: CurrencyType[]) {
        super("wallet");

        this._supportedCurrencies = supportedCurrencies;

        // Initialize currencies and multipliers
        for (const type of this._supportedCurrencies) {
            this._currencies[type as CurrencyType] = new Decimal(0);
            this._multipliers[type as CurrencyType] = new Decimal(1);
        }
    }

    public getAmount(type: CurrencyType): Decimal {
        if (!this.supportsCurrencyType(type)) {
            return new Decimal(0);
        }
        return this._currencies[type];
    }

    /**
     * Gain the specified currency and apply the global multiplier
     */
    public gainCurrency(currency: Currency): void {
        currency.amount = currency.amount.multiply(this.getCurrencyMultiplier(currency.type));

        if (!currency.isValid() || !this.supportsCurrencyType(currency.type)) {
            console.warn(`Could not add currency ${currency.toString()}`);
            return;
        }

        this._onCurrencyGain.dispatch(currency);
        this._currencies[currency.type] = this._currencies[currency.type].add(currency.amount);
    }

    /**
     * Return true if all currencies are valid and the player has the specified amount.
     */
    hasCurrencies(costs: Currency[]) {
        for (const cost of costs) {
            if (!this.hasCurrency(cost)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Return true if the currency is valid and the player has the specified amount.
     */
    public hasCurrency(currency: Currency): boolean {
        if (!this.supportsCurrencyType(currency.type)) {
            return false;
        }
        return this._currencies[currency.type].gte(currency.amount);
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
        this._currencies[currency.type] = this._currencies[currency.type].sub(currency.amount);
    }

    /**
     * Remove the currencies amounts from the specified currency.
     * IMPORTANT: This method does not care if amounts go negative
     */
    public loseMultipleCurrencies(currencies: Currency[]) {
        for (const currency of currencies) {
            this.loseCurrency(currency);
        }
    }

    /**
     * Subtracts the specified currencies and returns true if the wallet has enough.
     * Otherwise return false and don't subtract anything
     */
    public payMultipleIfPossible(currencies: Currency[]): boolean {
        if (this.hasCurrencies(currencies)) {
            this.loseMultipleCurrencies(currencies);
            return true;
        }
        return false;
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
    public getCurrencyMultiplier(type: CurrencyType): Decimal {
        return this._multipliers[type] ?? new Decimal(1);
    }

    public setCurrencyMultiplier(multiplier: DecimalValue, type: CurrencyType): void {
        multiplier = new Decimal(multiplier);
        if (multiplier.lte(0) || isNaN(multiplier.sign) || isNaN(multiplier.layer) || isNaN(multiplier.mag) || !this.supportsCurrencyType(type)) {
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
            money: this._currencies[CurrencyType.Money].toString(),
            secondary: this._currencies[CurrencyType.Secondary].toString(),
        }
    }

    public load(data: WalletSaveData): void {
        this._currencies[CurrencyType.Money] = new Decimal(data.money);
        this._currencies[CurrencyType.Secondary] = new Decimal(data.secondary);
    }

    /**
     * Emitted whenever a currency is gained
     * @private
     */
    public get onCurrencyGain(): ISimpleEvent<Currency> {
        return this._onCurrencyGain.asEvent();
    }

    public get money(): Decimal {
        return this._currencies.Money;
    }

    public set money(value: Decimal) {
        this._currencies.Money = value;
    }


    getDeveloperPanelFields(): AbstractField[] {
        return [
            new NumberField('money', 'Money'),
            new FunctionField(() => {
                this.money = new Decimal(10);
            }, 'Set money to 10').setCssClass('btn-blue'),
            new RangeField('money', 0, 100, 2, 'Money Slider'),
        ]
    }
}
