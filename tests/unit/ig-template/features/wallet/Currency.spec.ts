import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import Decimal from "@/lib/break_eternity.min";


describe('Currency', () => {

    test('constructor', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act

        // Assert
        expect(currency.amount).toEqual(new Decimal(3));
        expect(currency.type).toBe(CurrencyType.Money);
    });

});
