export class UpgradeListSaveData<UpgradeSaveDataType> {
    upgrades: UpgradeSaveDataType[]

    constructor() {
        this.upgrades = [];
    }

    addUpgrade(upgrade: UpgradeSaveDataType): void {
        this.upgrades.push(upgrade);
    }
}
