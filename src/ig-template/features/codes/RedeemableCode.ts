import {RedeemableCodeId} from "@/ig-template/features/codes/RedeemableCodeId";

export default class RedeemableCode {
    id: RedeemableCodeId;
    description: string;
    hash: number;
    isRedeemed: boolean;
    private readonly rewardFunction: Function;

    constructor(id: RedeemableCodeId, description: string, hash: number, rewardFunction: Function) {
        this.id = id;
        this.description = description;
        this.hash = hash;
        this.rewardFunction = rewardFunction;
        this.isRedeemed = false;
    }

    /**
     * Returns true if the code was successfully redeemed, false otherwise.
     */
    redeem(): boolean {
        if (this.isRedeemed) {
            return false;
        }

        this.isRedeemed = true;
        this.rewardFunction();
        return true;
    }
}