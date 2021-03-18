import {SaveData} from "@/ig-template/tools/saving/SaveData";
import {InventorySlotSaveData} from "@/ig-template/features/inventory/InventorySlotSaveData";

export interface InventorySaveData extends SaveData {
    slots: InventorySlotSaveData[];
}
