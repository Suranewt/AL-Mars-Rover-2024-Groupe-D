export class EncapsulationString {
    private _string: string;

    constructor(value: string) {
        this._string = value;
    }

    public recupererString(): string {
        return this._string;
    }
    
}