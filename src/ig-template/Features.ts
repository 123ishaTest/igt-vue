import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {Settings} from "@/ig-template/features/settings/Settings";
import {Statistics} from "@/ig-template/features/statistics/Statistics";
import {Achievements} from "@/ig-template/features/achievements/Achievements";

export interface Features {
    wallet: Wallet;
    settings: Settings;
    statistics: Statistics;
    achievements: Achievements;
}
