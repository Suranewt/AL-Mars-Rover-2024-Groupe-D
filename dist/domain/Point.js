"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Renvoie un nouveau point où x est incrémenté de 1
     * @returns Point (x+1, y)
     */
    incrementerLatitude() {
        return new Point(this.x + 1, this.y);
    }
    /**
     * Renvoie un nouveau point où x est décrémenté de 1
     * @returns Point (x-1, y)
     */
    decrementerLatitude() {
        return new Point(this.x - 1, this.y);
    }
    /**
     * Renvoie un nouveau point où y est incrémenté de 1
     * @returns Point (x, y+1)
     */
    incrementerLongitude() {
        return new Point(this.x, this.y + 1);
    }
    /**
     * Renvoie un nouveau point où y est décrémenté de 1
     * @returns Point (x, y-1)
     */
    decrementerLongitude() {
        return new Point(this.x, this.y - 1);
    }
    modulo(taille) {
        return new Point(this._calculerModulo(this.x, taille), this._calculerModulo(this.y, taille));
    }
    _calculerModulo(coord, mod) {
        const valeurReduiteSignee = (coord % mod) % -mod;
        const valeurNonSignee = valeurReduiteSignee + mod;
        return valeurNonSignee % mod;
    }
}
exports.Point = Point;
