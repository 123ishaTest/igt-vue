import {ItemId} from "./ItemId";
import {ItemType} from "./ItemType";

export abstract class AbstractItem {
    name: string;
    id: ItemId;
    type: ItemType;
    description: string;
    maxStack: number

    protected constructor(name: string, description: string, id: ItemId, type: ItemType, maxStack: number = Infinity) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.type = type;
        this.maxStack = maxStack;
    }
}
