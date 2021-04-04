import {ItemId} from "@/ig-template/features/items/ItemId";
import Decimal from "@/lib/break_eternity.min";

export interface InventorySlotSaveData {
    id: ItemId;
    amount: Decimal;
    data: object;
}
