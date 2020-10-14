import {Currency} from "@/ig-template/features/wallet/Currency";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";


describe('Currency', () => {

    test('constructor', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act

        // Assert
        expect(currency.amount).toBe(2);
        expect(currency.type).toBe(CurrencyType.Money);
    });

    test('add', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act
        currency.add(10);

        // Assert
        expect(currency.amount).toBe(13);
        expect(currency.type).toBe(CurrencyType.Money);
    });

    test('subtract', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act
        currency.subtract(2);

        // Assert
        expect(currency.amount).toBe(1);
        expect(currency.type).toBe(CurrencyType.Money);
    });

    test('multiply', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act
        currency.multiply(2);

        // Assert
        expect(currency.amount).toBe(6);
        expect(currency.type).toBe(CurrencyType.Money);
    });

    test('divide', () => {
        // Arrange
        const currency = new Currency(3, CurrencyType.Money);

        // Act
        currency.divide(2);

        // Assert
        expect(currency.amount).toBeCloseTo(1.5);
        expect(currency.type).toBe(CurrencyType.Money);
    });

    test('divide by 0 not possible', () => {
        // Arrange
        const currency = new Currency(10, CurrencyType.Money);

        // Act
        currency.divide(0);

        // Assert
        expect(currency.amount).toBeCloseTo(10);
        expect(currency.type).toBe(CurrencyType.Money);
    });


});
