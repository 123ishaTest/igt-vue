import {Feature} from "@/ig-template/features/Feature";

export class AbstractField {
    feature: Feature | undefined;
    componentName: string | undefined;

    propertyName: string;
    label: string | undefined;

    cssClass: string;

    constructor(propertyName: string, label?: string) {
        this.propertyName = propertyName;
        this.label = label;
        this.cssClass = 'btn-green';
    }

    get displayLabel() {
        return this.label ?? this.propertyName;
    }

    setFeature(feature: Feature): this {
        this.feature = feature;
        return this;
    }

    setCssClass(cssClass: string): this {
        this.cssClass = cssClass;
        return this;
    }

    setComponentName(name: string): this {
        this.componentName = name;
        return this;
    }
}