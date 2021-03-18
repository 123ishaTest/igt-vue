import {ItemId} from "@/ig-template/features/items/ItemId";

export interface InventorySlotSaveData {
    id: ItemId;
    amount: number;
    data: object;
}
