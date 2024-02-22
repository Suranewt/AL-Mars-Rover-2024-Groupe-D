export class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    IncrementerLatitude() {
        return new Point(this.x + 1, this.y);
    }

    DecrementerLatitude() {
        return new Point(this.x - 1, this.y);
    }

    IncrementerLongitude() {
        return new Point(this.x, this.y + 1);
    }

    DecrementerLongitude() {
        return new Point(this.x, this.y - 1);
    }
    public modulo(taille : number) : Point {

        return new Point (this._calculerModulo(this.x,taille),this._calculerModulo(this.y,taille))
    }
    private _calculerModulo(coord : number,mod: number) : number{
        const valeurReduiteSignee = (coord% mod) % -mod;
        const valeurNonSignee = valeurReduiteSignee + mod;
        return valeurNonSignee % mod;
    }
}