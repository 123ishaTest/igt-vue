import {ImpossibleRequirement} from "@/ig-template/tools/requirements/ImpossibleRequirement";
import {KeyItemId} from "@/ig-template/features/key-items/KeyItemId";
import {KeyItems} from "@/ig-template/features/key-items/KeyItems";
import {KeyItem} from "@/ig-template/features/key-items/KeyItem";


describe('Key Items', () => {
    const id = "dummy" as KeyItemId;

    test('normal usage', () => {
        const keyItems = new KeyItems();
        const keyItem = keyItems.registerKeyItem(
            new KeyItem(
                id, 'title', '')
        );
        expect(keyItems.getKeyItem(id).isUnlocked).toBe(false);

        keyItems.gainKeyItem(id);

        expect(keyItem.isUnlocked).toBe(true);
    });

    test('dont unlock impossible', () => {
        const keyItems = new KeyItems();
        const keyItem = keyItems.registerKeyItem(
            new KeyItem(
                id, 'title', '', 'hint', 'image',
                new ImpossibleRequirement()
            )
        );

        keyItems.gainKeyItem(id);

        expect(keyItem.isUnlocked).toBeFalsy();

    });

    test('gain non existing', () => {
        expect(() => {
            const keyItems = new KeyItems();
            keyItems.gainKeyItem("non-existent" as KeyItemId);
        }).not.toThrow();
    });

    test('save', () => {
        const keyItems = new KeyItems();
        keyItems.registerKeyItem(
            new KeyItem(
                id, 'title', '')
        );
        keyItems.gainKeyItem(id);
        const saveData = keyItems.save();

        expect(saveData).toStrictEqual({list: ['dummy']})
    });

    test('load', () => {
        const keyItems = new KeyItems();
        const keyItem = keyItems.registerKeyItem(
            new KeyItem(
                id, 'title', '')
        );
        keyItems.load({list: [id]});

        expect(keyItem.isUnlocked).toBe(true);
    });
});
