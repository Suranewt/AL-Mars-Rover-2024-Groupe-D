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
    /**
     * modulo
     */
       modulo(taille: number): Point {
        const x = (this.x + taille) % taille;
        const y = (this.y + taille) % taille;
        return new Point(x, y);
    }
}
