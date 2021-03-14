import {RedeemableCodes} from "@/ig-template/features/codes/RedeemableCodes";
import RedeemableCode from "@/ig-template/features/codes/RedeemableCode";
import {RedeemableCodeId} from "@/ig-template/features/codes/RedeemableCodeId";


describe('Redeemable Codes', () => {
    const id = "example-code" as RedeemableCodeId
    const plainText = "DUMMY";
    let code: RedeemableCode;
    let repeatableCode: RedeemableCode;

    beforeEach(() => {
        code = new RedeemableCode(id, 'Example code', 65408136, () => {
            // Empty
        })
        repeatableCode = new RedeemableCode(id, 'Example code', 65408136, () => {
            // Empty
        }, true)
    })


    test('regular usage', () => {
        // Arrange
        const redeemableCodes = new RedeemableCodes();
        redeemableCodes.list.push(code)

        const redeemedCode = redeemableCodes.enterCode(plainText);

        expect(redeemedCode).toStrictEqual(code);
    });

    test('non existing code', () => {
        // Arrange
        const redeemableCodes = new RedeemableCodes();
        redeemableCodes.list.push(code)

        const redeemedCode = redeemableCodes.enterCode("non-existing");

        expect(redeemedCode).toBeUndefined();
    });

    test('redeeming code twice', () => {
        // Arrange
        const redeemableCodes = new RedeemableCodes();
        redeemableCodes.list.push(code)

        redeemableCodes.enterCode("DUMMY");

        const redeemedDirectly = code.redeem();
        const redeemedCode = redeemableCodes.enterCode("DUMMY");

        expect(redeemedCode).toBe(false);
        expect(redeemedDirectly).toBe(false);
    });


    test('save and load', () => {
        // Arrange
        const redeemableCodes = new RedeemableCodes();
        redeemableCodes.list.push(code);

        const saveDataEmpty = redeemableCodes.save();

        expect(saveDataEmpty.list).toHaveLength(0);
        redeemableCodes.enterCode("DUMMY");

        const saveData = redeemableCodes.save();

        expect(saveData.list).toHaveLength(1)

        const newRedeemableCodes = new RedeemableCodes();
        const newCode = new RedeemableCode(id, 'Example code', 65408136, () => {
            // Empty
        })
        newRedeemableCodes.list.push(newCode);
        newRedeemableCodes.load(saveData);
        expect(newCode.isRedeemed).toBe(true);
    });

    test('redeeming repeatable code twice', () => {
        // Arrange
        const redeemableCodes = new RedeemableCodes();
        redeemableCodes.list.push(repeatableCode)

        redeemableCodes.enterCode("DUMMY");

        const redeemedCode = redeemableCodes.enterCode("DUMMY");
        const redeemedSecondTime = redeemableCodes.enterCode("DUMMY");

        expect(redeemedCode).toBeTruthy();
        expect(redeemedSecondTime).toBeTruthy();
    });

});
