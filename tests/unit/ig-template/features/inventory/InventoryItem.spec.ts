import {AbstractItem} from "@/ig-template/features/items/AbstractItem";
import {ItemId} from "@/ig-template/features/items/ItemId";
import {ItemType} from "@/ig-template/features/items/ItemType";
import {InventorySlot} from "@/ig-template/features/inventory/InventorySlot";


export class ExampleItem extends AbstractItem {
    constructor(id: ItemId, maxStack: number) {
        super('', '', id, '' as ItemType, maxStack);
    }
}


describe('Inventory Item', () => {
    const item1 = new ExampleItem('item-1' as ItemId, 5);

    test('Inventory Item does not overflow', () => {
        // Arrange
        const inventoryItem = new InventorySlot(item1, 0);

        // Act
        inventoryItem.gainItems(10);

        // Assert
        expect(inventoryItem.amount).toBe(item1.maxStack);
    });

    test('Inventory Item does go negative', () => {
        // Arrange
        const inventoryItem = new InventorySlot(item1, 5);

        // Act
        inventoryItem.loseItems(10);

        // Assert
        expect(inventoryItem.amount).toBe(0);
    });

})
