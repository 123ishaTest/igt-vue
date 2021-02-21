import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {Settings} from "@/ig-template/features/settings/Settings";
import {Statistics} from "@/ig-template/features/statistics/Statistics";

export interface Features {
    wallet: Wallet;
    settings: Settings;
    statistics: Statistics;
}
