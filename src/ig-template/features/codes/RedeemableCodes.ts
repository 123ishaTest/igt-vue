import RedeemableCode from "@/ig-template/features/codes/RedeemableCode";
import {Feature} from "@/ig-template/features/Feature";
import {RedeemableCodeId} from "@/ig-template/features/codes/RedeemableCodeId";
import {RedeemableCodesSaveData} from "@/ig-template/features/codes/RedeemableCodesSaveData";

export class RedeemableCodes extends Feature {

    codeList: RedeemableCode[];

    constructor() {
        super('redeemable-codes')
        this.codeList = [
            new RedeemableCode(RedeemableCodeId.exampleCode, 'Example code, the key is "DUMMY"', 65408136, () => {
                alert("Test")
            }),

        ];
    }

    /**
     * Returns true if the code was successfully redeemed.
     */
    enterCode(codeString: string) {
        const hash = this.hash(codeString);

        const redeemableCode = this.codeList.find(c => {
            return c.hash === hash;
        });

        if (!redeemableCode) {
            return false;
        }
        if (redeemableCode.isRedeemed) {
            return false;
        }

        redeemableCode.redeem();
        return true;
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
            const foundCode = this.codeList.find(code => {
                return code.id === id;
            });

            if (foundCode) {
                foundCode.isRedeemed = true;
            }
        });
    }

    save(): RedeemableCodesSaveData {
        const list = this.codeList.filter(code => {
            return code.isRedeemed;
        }).map(code => {
            return code.id;
        })
        return new RedeemableCodesSaveData(list)
    }

}