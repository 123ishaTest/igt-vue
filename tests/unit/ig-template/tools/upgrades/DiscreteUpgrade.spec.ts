import {DiscreteUpgrade} from "@/ig-template/tools/upgrades/DiscreteUpgrade";
import {UpgradeId} from "@/ig-template/tools/upgrades/UpgradeId";
import {UpgradeType} from "@/ig-template/tools/upgrades/UpgradeType";
import {CurrencyBuilder} from "@/ig-template/features/wallet/CurrencyBuilder";
import {ArrayBuilder} from "@/ig-template/util/ArrayBuilder";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {Currency} from "@/ig-template/features/wallet/Currency";


describe('Discrete Upgrade', () => {

    const id = "example-upgrade" as UpgradeId;
    const type = -1 as UpgradeType
    const currencyType = 'dummy' as CurrencyType;
    let discreteUpgrade: DiscreteUpgrade
    const wallet = new Wallet([currencyType]);

    beforeEach(() => {
        wallet.loseCurrency(new Currency(wallet.getAmount(currencyType), currencyType));
        wallet.gainCurrency(new Currency(1000, currencyType));
        discreteUpgrade = new DiscreteUpgrade(
            id,
            type,
            'Example upgrade',
            5,
            CurrencyBuilder.createArray(ArrayBuilder.fromStartAndStepAdditive(10, 10, 20), currencyType),
            ArrayBuilder.fromStartAndStepAdditive(1, 1, 21));
    });


    test('Normal usage', () => {
        expect(discreteUpgrade.getBonusForLevel(0)).toEqual(1);
        expect(discreteUpgrade.level).toEqual(0);

        const bought = discreteUpgrade.buy(wallet);
        expect(bought).toBe(true);

        expect(discreteUpgrade.getBonus()).toEqual(2);
        expect(discreteUpgrade.getCost()).toStrictEqual(new Currency(20, currencyType));
        expect(discreteUpgrade.getUpgradeBonus()).toStrictEqual(1);

    });


    test('save and load', () => {
        discreteUpgrade.buy(wallet);
        const saveData = discreteUpgrade.save();
        discreteUpgrade.buy(wallet);
        expect(discreteUpgrade.level).toBe(2);

        discreteUpgrade.load(saveData);
        expect(discreteUpgrade.level).toBe(1);


    });

});
