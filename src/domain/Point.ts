export class Point {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Renvoie un nouveau point où x est incrémenté de 1
     * @returns Point (x+1, y)
     */
    incrementerLatitude(): Point {
        return new Point(this.x + 1, this.y);
    }

    /**
     * Renvoie un nouveau point où x est décrémenté de 1
     * @returns Point (x-1, y)
     */
    decrementerLatitude(): Point {
        return new Point(this.x - 1, this.y);
    }

    /**
     * Renvoie un nouveau point où y est incrémenté de 1
     * @returns Point (x, y+1)
     */
    incrementerLongitude(): Point {
        return new Point(this.x, this.y + 1);
    }

    /**
     * Renvoie un nouveau point où y est décrémenté de 1
     * @returns Point (x, y-1)
     */
    decrementerLongitude(): Point {
        return new Point(this.x, this.y - 1);
    }

    modulo(taille: number): Point {
        return new Point(
            this._calculerModulo(this.x, taille),
            this._calculerModulo(this.y, taille)
        );
    }

    private _calculerModulo(coord: number, mod: number): number {
        const valeurReduiteSignee = (coord % mod) % -mod;
        const valeurNonSignee = valeurReduiteSignee + mod;
        return valeurNonSignee % mod;
    }
}
