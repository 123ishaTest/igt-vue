import {SaveData} from "./SaveData";

export interface Saveable {
    saveKey: string;

    save(): SaveData;

    load(data: SaveData): void;
}
