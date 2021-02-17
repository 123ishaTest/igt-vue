import {Feature} from "@/ig-template/features/Feature";

export class AbstractField {
    feature: Feature | undefined;
    componentName: string | undefined;

    propertyName: string;
    label: string | undefined;


    constructor(propertyName: string, label?: string) {
        this.propertyName = propertyName;
        this.label = label;
    }

    get displayLabel() {
        return this.label ?? this.propertyName;
    }

    setFeature(feature: Feature) {
        this.feature = feature;
    }

    setComponentName(name: string) {
        this.componentName = name;
    }
}