import { Point } from './Point';
import { EncapsulationBoolean } from './EncapsulationBoolean'; 

// Objet valeur
export class Orientation {
    public static readonly Nord: Orientation = new Orientation(new EncapsulationBoolean(false), new EncapsulationBoolean(true));
    public static readonly Est: Orientation = new Orientation(new EncapsulationBoolean(false), new EncapsulationBoolean(false));
    public static readonly Sud: Orientation = new Orientation(new EncapsulationBoolean(true), new EncapsulationBoolean(true));
    public static readonly Ouest: Orientation = new Orientation(new EncapsulationBoolean(true), new EncapsulationBoolean(false));

    private readonly estInverse: EncapsulationBoolean;
    private readonly estLongitudinal: EncapsulationBoolean;

    private constructor(estInverse: EncapsulationBoolean, estLongitudinal: EncapsulationBoolean) {
        this.estInverse = estInverse;
        this.estLongitudinal = estLongitudinal;
    }

    appliquerVecteur(position: Point): Point {
        if (this.estLongitudinal.recupererValeur() && this.estInverse.recupererValeur()) {
            return position.decrementerLongitude();
        }

        if (this.estLongitudinal.recupererValeur() && !this.estInverse.recupererValeur()) {
            return position.incrementerLongitude();
        }

        if (!this.estLongitudinal.recupererValeur() && this.estInverse.recupererValeur()) {
            return position.decrementerLatitude();
        }

        if (!this.estLongitudinal.recupererValeur() && !this.estInverse.recupererValeur()) {
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
