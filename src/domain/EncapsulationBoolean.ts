export class EncapsulationBoolean {
    private _boolean: boolean;

    constructor(boolean: boolean) {
        this._boolean = boolean;
    }

     public remplacerValeur(boolean:boolean) {
        this._boolean=boolean
        return this;
    }
    public recupererValeur(){
        return this._boolean.valueOf();
    }
}
