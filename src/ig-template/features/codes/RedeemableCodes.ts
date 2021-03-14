import RedeemableCode from "@/ig-template/features/codes/RedeemableCode";
import {Feature} from "@/ig-template/features/Feature";
import {RedeemableCodeId} from "@/ig-template/features/codes/RedeemableCodeId";
import {RedeemableCodesSaveData} from "@/ig-template/features/codes/RedeemableCodesSaveData";
import {Features} from "@/ig-template/Features";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Currency} from "@/ig-template/features/wallet/Currency";

export class RedeemableCodes extends Feature {

    list: RedeemableCode[];

    constructor() {
        super('redeemable-codes')
        this.list = [];
    }


    initialize(features: Features) {
        this.list.push(
            new RedeemableCode(RedeemableCodeId.exampleCode, 'Example code that gives 100 money, the key is "DUMMY"', 65408136, () => {
                features.wallet.gainCurrency(new Currency(100, CurrencyType.Money));
            })
        );
    }

    /**
     * Returns the code if it was successfully redeemed, false if it was already redeemed, undefined otherwise.
     */
    enterCode(codeString: string): boolean | RedeemableCode | undefined {
        const hash = this.hash(codeString);

        const redeemableCode = this.list.find(c => {
            return c.hash === hash;
        });

        if (!redeemableCode) {
            return undefined;
        }
        if (redeemableCode.isRedeemed) {
            return false;
        }

        redeemableCode.redeem();
        return redeemableCode;
    }

    /**
     * Insecure hash, but should keep some of the nosy people out.
     * @param text
     */
    hash(text: string): number {
        let hash = 0, i, chr;
        if (text.length === 0) {
            return hash;
        }

        for (i = 0; i < text.length; i++) {
            chr = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }


    load(data: RedeemableCodesSaveData): void {
        if (!data?.list) {
            return;
        }

        data.list.forEach(id => {
            const foundCode = this.list.find(code => {
                return code.id === id;
            });

            if (foundCode) {
                foundCode.isRedeemed = true;
            }
        });
    }

    save(): RedeemableCodesSaveData {
        const list = this.list.filter(code => {
            return code.isRedeemed;
        }).map(code => {
            return code.id;
        })
        return new RedeemableCodesSaveData(list)
    }

}