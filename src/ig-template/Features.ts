import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {Settings} from "@/ig-template/features/settings/Settings";
import {Statistics} from "@/ig-template/features/statistics/Statistics";
import {Achievements} from "@/ig-template/features/achievements/Achievements";
import {RedeemableCodes} from "@/ig-template/features/codes/RedeemableCodes";
import {ExampleFeature} from "@/ig-template/features/example/ExampleFeature";

export interface Features {
    wallet: Wallet;
    settings: Settings;
    codes: RedeemableCodes;
    example: ExampleFeature;
    statistics: Statistics;
    achievements: Achievements;
}
