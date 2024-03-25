"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orientation = void 0;
// Objet valeur
class Orientation {
    constructor(estInverse, estLongitudinal) {
        this.estInverse = estInverse;
        this.estLongitudinal = estLongitudinal;
    }
    appliquerVecteur(position) {
        if (this.estLongitudinal) {
            return this.estInverse
                ? position.decrementerLongitude()
                : position.incrementerLongitude();
        }
        else {
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
exports.Orientation = Orientation;
Orientation.Nord = new Orientation(false, true);
Orientation.Est = new Orientation(false, false);
Orientation.Sud = new Orientation(true, true);
Orientation.Ouest = new Orientation(true, false);
