import { Point } from './Point';

// Objet valeur
export class Orientation {
    public static readonly Nord: Orientation = new Orientation(false, true);
    public static readonly Est: Orientation = new Orientation(false, false);
    public static readonly Sud: Orientation = new Orientation(true, true);
    public static readonly Ouest: Orientation = new Orientation(true, false);

    private readonly estInverse: boolean;
    private readonly estLongitudinal: boolean;

    private constructor(estInverse: boolean, estLongitudinal: boolean) {
        this.estInverse = estInverse;
        this.estLongitudinal = estLongitudinal;
    }

    appliquerVecteur(position: Point): Point {
        if (this.estLongitudinal) {
            return this.estInverse
                ? position.decrementerLongitude()
                : position.incrementerLongitude();
        } else {
            return this.estInverse
                ? position.decrementerLatitude()
                : position.incrementerLatitude();
        }
    }

    inverser() {
        switch (this) {
            case Orientation.Nord:
                return Orientation.Sud;
            case Orientation.Est:
                return Orientation.Ouest;
            case Orientation.Sud:
                return Orientation.Nord;
            case Orientation.Ouest:
                return Orientation.Est;
            default:
                throw new Error(`Orientation invalide : ${this}`);
        }
    }

    rotationAntiHoraire() {
        switch (this) {
            case Orientation.Nord:
                return Orientation.Ouest;
            case Orientation.Est:
                return Orientation.Nord;
            case Orientation.Sud:
                return Orientation.Est;
            case Orientation.Ouest:
                return Orientation.Sud;
            default:
                throw new Error(`Orientation invalide : ${this}`);
        }
    }

    rotationHoraire() {
        switch (this) {
            case Orientation.Nord:
                return Orientation.Est;
            case Orientation.Est:
                return Orientation.Sud;
            case Orientation.Sud:
                return Orientation.Ouest;
            case Orientation.Ouest:
                return Orientation.Nord;
            default:
                throw new Error(`Orientation invalide : ${this}`);
        }
    }
}
