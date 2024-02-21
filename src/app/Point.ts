export class Point {
    readonly posX: number;
    readonly posY: number;

    constructor(x: number, y: number) {
        this.posX = x;
        this.posY = y;
    }

    public getPosX(): number {
        return this.posX;
    }

    public getPosY(): number {
        return this.posY;
    }

    IncrementerLatitude() {
        return new Point(this.posX + 1, this.posY);
    }

    DecrementerLatitude() {
        return new Point(this.posX - 1, this.posY);
    }

    IncrementerLongitude() {
        return new Point(this.posX, this.posY + 1);
    }

    DecrementerLongitude() {
        return new Point(this.posX, this.posY - 1);
    }
}
