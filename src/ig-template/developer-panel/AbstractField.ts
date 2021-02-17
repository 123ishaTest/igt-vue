export class AbstractField {
    object: object | undefined;
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

    get value() {
        if (this.object == undefined) {
            console.warn(`Cannot get warning as object is undefined for AbstractField ${this.propertyName}`)
            return '';
        }
        return (this.object as any)[this.propertyName];
    }

    set value(value: any) {
        (this.object as any)[this.propertyName] = value;
    }

    setObject(object: object): this {
        this.object = object;
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