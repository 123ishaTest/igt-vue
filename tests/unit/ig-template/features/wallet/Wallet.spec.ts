import {Wallet} from "@/ig-template/features/wallet/Wallet.ts";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";


describe('Wallet', () => {

    let wallet: Wallet;

    beforeEach(() => {
        wallet = new Wallet([CurrencyType.Money]);
    });

    test('wallet instantiates properly', () => {
        // Arrange

        // Act

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toBe(0)
    });

    test('supported currencies', () => {
        // Arrange

        // Act
        const supportsMoney = wallet.supportsCurrencyType(CurrencyType.Money);
        const supportsSecondary = wallet.supportsCurrencyType(CurrencyType.Secondary);

        // Assert
        expect(supportsMoney).toBeTruthy();
        expect(supportsSecondary).toBeFalsy();
    });


    test('gaining money', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(1, CurrencyType.Money));
        const money = wallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(1);
    });

    test('gaining negative amount not possible', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(-1, CurrencyType.Money));
        const money = wallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(0);
    });

    test('gaining NaN not possible', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(NaN, CurrencyType.Money));
        const money = wallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(0);
    });

    test('multiplier', () => {
        // Arrange

        // Act
        wallet.setCurrencyMultiplier(2, CurrencyType.Money);
        wallet.gainCurrency(new Currency(1, CurrencyType.Money));
        const money = wallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(2);
    });

    test('negative multiplier not possible', () => {
        // Arrange

        // Act
        wallet.setCurrencyMultiplier(-1, CurrencyType.Money);
        wallet.gainCurrency(new Currency(1, CurrencyType.Money));
        const money = wallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(1);
    });

    test('has currency', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));

        // Assert
        expect(wallet.hasCurrency(new Currency(10, CurrencyType.Money))).toBeTruthy();
        expect(wallet.hasCurrency(new Currency(11, CurrencyType.Money))).toBeFalsy();
    });

    test('lose currency', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));
        wallet.loseCurrency(new Currency(4, CurrencyType.Money))

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toBe(6);
    });

    test('cannot lose invalid currency', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));
        wallet.loseCurrency(new Currency(-1, CurrencyType.Money))

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toBe(10);
    });

    test('pay if possible', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));
        const paid = wallet.payIfPossible(new Currency(5, CurrencyType.Money))

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toBe(5);
        expect(paid).toBeTruthy();
    });

    test('pay if not possible', () => {
        // Arrange

        // Act
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));
        const paid = wallet.payIfPossible(new Currency(15, CurrencyType.Money))

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toBe(10);
        expect(paid).toBeFalsy();
    });

});
