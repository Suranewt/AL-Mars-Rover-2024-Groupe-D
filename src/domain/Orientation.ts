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
        if (this.estLongitudinal && this.estInverse) {
            return position.decrementerLongitude();
        }

        if (this.estLongitudinal && !this.estInverse) {
            return position.incrementerLongitude();
        }

        if (!this.estLongitudinal && this.estInverse) {
            return position.decrementerLatitude();
        }

        if (!this.estLongitudinal && !this.estInverse) {
            return position.incrementerLatitude();
        }

        throw new Error(
            `Impossible d'appliquer le vecteur avec la position : (${position.x}, ${position.y})'`
        );
    }

    inverser() {
        let nouvelleOrientation: Orientation = this;

        for (let i = 0; i < 2; i++) {
            nouvelleOrientation = this.rotationHoraire(nouvelleOrientation);
        }

        return nouvelleOrientation;
    }

    rotationAntiHoraire() {
        let nouvelleOrientation: Orientation = this;

        for (let i = 0; i < 3; i++) {
            nouvelleOrientation = this.rotationHoraire(nouvelleOrientation);
        }

        return nouvelleOrientation;
    }

    rotationHoraire(orientationCourante: Orientation) {
        switch (orientationCourante) {
            case Orientation.Nord:
                return Orientation.Est;
            case Orientation.Est:
                return Orientation.Sud;
            case Orientation.Sud:
                return Orientation.Ouest;
            case Orientation.Ouest:
                return Orientation.Nord;
        }

        throw new Error(`Orientation invalide : ${this}`);
    }
}