import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";


describe('Currency', () => {

    test('constructor', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act

        // Assert
        expect(currency.amount).toBe(3);
        expect(currency.type).toBe(CurrencyType.Money);
    });

});
