import {Wallet} from "@/ig-template/features/wallet/Wallet.ts";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {WalletSaveData} from "@/ig-template/features/wallet/WalletSaveData";


describe('Wallet', () => {

    let moneyWallet: Wallet;

    beforeEach(() => {
        moneyWallet = new Wallet([CurrencyType.Money]);
    });

    test('example usage', () => {
        const wallet = new Wallet([CurrencyType.Money, CurrencyType.Secondary]);

        wallet.gainCurrency(new Currency(10, CurrencyType.Money));

        expect(wallet.getAmount(CurrencyType.Money)).toBe(10);

        wallet.setCurrencyMultiplier(2, CurrencyType.Money);
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));
        expect(wallet.getAmount(CurrencyType.Money)).toBe(30);

        const couldAffordFalse = wallet.payIfPossible(new Currency(31, CurrencyType.Money));
        expect(couldAffordFalse).toBeFalsy();
        const couldAffordTrue = wallet.payIfPossible(new Currency(25, CurrencyType.Money));
        expect(couldAffordTrue).toBeTruthy();

        expect(wallet.getCurrencyMultiplier(CurrencyType.Secondary)).toBe(1);
        expect(wallet.getAmount(CurrencyType.Money)).toBe(5);

    });

    test('moneyWallet instantiates properly', () => {
        // Act

        // Assert
        expect(moneyWallet.getAmount(CurrencyType.Money)).toBe(0)
    });

    test('supported currencies', () => {
        // Act
        const supportsMoney = moneyWallet.supportsCurrencyType(CurrencyType.Money);
        const supportsSecondary = moneyWallet.supportsCurrencyType(CurrencyType.Secondary);

        // Assert
        expect(supportsMoney).toBeTruthy();
        expect(supportsSecondary).toBeFalsy();
    });


    test('gaining money', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(1, CurrencyType.Money));
        const money = moneyWallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(1);
    });

    test('gaining negative amount not possible', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(-1, CurrencyType.Money));
        const money = moneyWallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(0);
    });

    test('gaining NaN not possible', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(NaN, CurrencyType.Money));
        const money = moneyWallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(0);
    });

    test('multiplier', () => {
        // Act
        moneyWallet.setCurrencyMultiplier(2, CurrencyType.Money);
        moneyWallet.gainCurrency(new Currency(1, CurrencyType.Money));
        const money = moneyWallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(2);
    });

    test('negative multiplier not possible', () => {
        // Act
        moneyWallet.setCurrencyMultiplier(-1, CurrencyType.Money);
        moneyWallet.gainCurrency(new Currency(1, CurrencyType.Money));
        const money = moneyWallet.getAmount(CurrencyType.Money);

        // Assert
        expect(money).toBe(1);
    });

    test('has currency', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(10, CurrencyType.Money));

        // Assert
        expect(moneyWallet.hasCurrency(new Currency(10, CurrencyType.Money))).toBeTruthy();
        expect(moneyWallet.hasCurrency(new Currency(11, CurrencyType.Money))).toBeFalsy();
    });

    test('lose currency', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(10, CurrencyType.Money));
        moneyWallet.loseCurrency(new Currency(4, CurrencyType.Money))

        // Assert
        expect(moneyWallet.getAmount(CurrencyType.Money)).toBe(6);
    });

    test('cannot lose invalid currency', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(10, CurrencyType.Money));
        moneyWallet.loseCurrency(new Currency(-1, CurrencyType.Money))

        // Assert
        expect(moneyWallet.getAmount(CurrencyType.Money)).toBe(10);
    });

    test('pay if possible', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(10, CurrencyType.Money));
        const paid = moneyWallet.payIfPossible(new Currency(5, CurrencyType.Money))

        // Assert
        expect(moneyWallet.getAmount(CurrencyType.Money)).toBe(5);
        expect(paid).toBeTruthy();
    });

    test('pay if not possible', () => {
        // Act
        moneyWallet.gainCurrency(new Currency(10, CurrencyType.Money));
        const paid = moneyWallet.payIfPossible(new Currency(15, CurrencyType.Money))

        // Assert
        expect(moneyWallet.getAmount(CurrencyType.Money)).toBe(10);
        expect(paid).toBeFalsy();
    });

    test('get amount for unsupported currency', () => {
        // Assert
        expect(moneyWallet.getAmount(CurrencyType.Secondary)).toBe(0);
    });

    test('get currency multiplier for unsupported currency', () => {
        // Assert
        expect(moneyWallet.getCurrencyMultiplier(CurrencyType.Secondary)).toBe(1);
    });

    test('has currency for unsupported currency', () => {
        // Assert
        expect(moneyWallet.hasCurrency(new Currency(0, CurrencyType.Secondary))).toBeFalsy();
    });

    test('can access', () => {
        // Assert
        expect(moneyWallet.canAccess()).toBeTruthy();
    });

    test('save', () => {
        // Arrange
        const expectedSaveData: WalletSaveData = {
            money: 10,
            secondary: 8
        };
        const wallet = new Wallet([CurrencyType.Money, CurrencyType.Secondary]);

        // Act
        wallet.gainCurrency(new Currency(10, CurrencyType.Money));
        wallet.gainCurrency(new Currency(8, CurrencyType.Secondary));
        const actualSaveData = wallet.save();


        // Assert
        expect(actualSaveData).toEqual(expectedSaveData);
    });

    test('load', () => {
        // Arrange
        const saveData: WalletSaveData = {
            money: 10,
            secondary: 8
        };
        const wallet = new Wallet([CurrencyType.Money, CurrencyType.Secondary]);

        // Act
        wallet.load(saveData);

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toEqual(10);
        expect(wallet.getAmount(CurrencyType.Secondary)).toEqual(8);
    });

    test('load empty data', () => {
        // Arrange
        const wallet = new Wallet([CurrencyType.Money, CurrencyType.Secondary]);

        // Act
        wallet.load({} as WalletSaveData);

        // Assert
        expect(wallet.getAmount(CurrencyType.Money)).toEqual(0);
        expect(wallet.getAmount(CurrencyType.Secondary)).toEqual(0);
    });

    test('on currency gain', () => {
        // Arrange
        expect.assertions(2);

        moneyWallet.onCurrencyGain.subscribe(currency => {
            expect(currency.amount).toBe(10);
            expect(currency.type).toBe(CurrencyType.Money);
        });

        // Act
        moneyWallet.gainCurrency(new Currency(10, CurrencyType.Money));
    });

});
