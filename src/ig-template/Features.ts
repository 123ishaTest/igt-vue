import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {Settings} from "@/ig-template/features/settings/Settings";
import {Statistics} from "@/ig-template/features/statistics/Statistics";
import {Achievements} from "@/ig-template/features/achievements/Achievements";
import {RedeemableCodes} from "@/ig-template/features/codes/RedeemableCodes";
import {ExampleFeature} from "@/ig-template/features/example/ExampleFeature";
import {SpecialEvents} from "@/ig-template/features/special-events/SpecialEvents";
import {Inventory} from "@/ig-template/features/inventory/Inventory";
import {ItemList} from "@/ig-template/features/items/ItemList";

export interface Features {
    wallet: Wallet;
    settings: Settings;
    codes: RedeemableCodes;
    example: ExampleFeature;
    inventory: Inventory;
    itemList: ItemList;
    specialEvents: SpecialEvents;
    statistics: Statistics;
    achievements: Achievements;
}
