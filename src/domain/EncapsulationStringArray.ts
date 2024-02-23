export class EncapsulationStringArray {
    private _stringArray: string[];

    constructor(stringArray: string[]) {
        this._stringArray = stringArray;
    }

    public length() {
        return this._stringArray.length;
    }

    public getCharAtIndex(index: number) {
        return this._stringArray[index];
    }
}
