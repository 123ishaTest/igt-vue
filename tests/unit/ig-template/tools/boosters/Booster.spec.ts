import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {Booster} from "@/ig-template/tools/boosters/Booster";
import {BoosterTier} from "@/ig-template/tools/boosters/BoosterTier";
import {Currency} from "@/ig-template/features/wallet/Currency";
import {ImpossibleRequirement} from "@/ig-template/tools/requirements/ImpossibleRequirement";

describe('Booster', () => {
    const wallet = new Wallet([CurrencyType.Money])
    let booster: Booster;
    beforeEach(() => {
        wallet.money = 10000;
        booster = new Booster("Example", [
            new BoosterTier([new Currency(10, CurrencyType.Money)], 1.5),
            new BoosterTier([new Currency(100, CurrencyType.Money)], 2, "2x"),
            new BoosterTier([new Currency(1000, CurrencyType.Money)], 3, "3x"),
        ], wallet, 1);
    })

    test('Normal usage', () => {
        booster.selectTier(2);
        const bonus = booster.perform(3);

        expect(wallet.money).toBe(7000);
        expect(booster.currentTierIndex).toBe(2);
        expect(bonus).toBe(3);
        expect(booster.bonus).toBe(3);
    });

    test('Normal usage, no money', () => {
        wallet.money = 0;
        booster.selectTier(2);
        booster.perform(1);
        booster.perform(1);
        booster.perform(1);

        expect(booster.currentTierIndex).toBe(-1);
        expect(booster.bonus).toBe(1);
    });


    test('Requirement', () => {
        const booster = new Booster("Example", [
            new BoosterTier([new Currency(10, CurrencyType.Money)], 1.5, "1.5x"),
            new BoosterTier([new Currency(100, CurrencyType.Money)], 2, "2x", new ImpossibleRequirement()),
            new BoosterTier([new Currency(1000, CurrencyType.Money)], 3, "3x"),
        ], wallet, 1);

        booster.selectTier(1);

        expect(booster.currentTierIndex).toBe(-1);
    });

    test('No wallet throws error', () => {
        const booster = new Booster("", [], null as unknown as Wallet, 1);
        expect(() => {
            booster.perform(1);
        }).toThrow();
    });

});
