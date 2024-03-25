"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
// Objet valeur
class Rover {
    constructor(position, orientation, planete) {
        this.position = position;
        this.orientation = orientation;
        this.planete = planete;
        this.aucunObstacleRencontre = true;
    }
    /**
     * Avancer de 1 case
     */
    avancer() {
        let nouvellePosition = this.orientation.appliquerVecteur(this.position);
        const DEPLACEMENT_LIBRE = this.planete.estLibre(nouvellePosition);
        return this._deplacerRover(this, DEPLACEMENT_LIBRE, nouvellePosition);
    }
    reculer() {
        let nouvellePosition = this.orientation
            .inverser()
            .appliquerVecteur(this.position);
        const DEPLACEMENT_LIBRE = this.planete.estLibre(nouvellePosition);
        return this._deplacerRover(this, DEPLACEMENT_LIBRE, nouvellePosition);
    }
    /**
     * Gère le comportement du Rover par rapport à son déplacement
     * @param rover Le rover à déplacer
     * @param estLibreDeDeplacement Le booléan permettant de savoir si le Rover n'a pas rencontré d'obstacle
     * @param nouvellePosition La nouvelle position qu'aura le Rover
     * @returns Le Rover déplacé (ou non si obstacle)
     */
    _deplacerRover(rover, estLibreDeDeplacement, nouvellePosition) {
        if (estLibreDeDeplacement) {
            nouvellePosition = rover.planete.normaliser(nouvellePosition);
            return new Rover(nouvellePosition, rover.orientation, rover.planete);
        }
        else {
            rover.aucunObstacleRencontre = false;
            return rover;
        }
    }
    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    tournerGauche() {
        return new Rover(this.position, this.orientation.rotationAntiHoraire(), this.planete);
    }
    /**
     * Tourner l'orientation du robot de 90° vers la droite
     */
    tournerDroite() {
        return new Rover(this.position, this.orientation.rotationHoraire(), this.planete);
    }
}
exports.Rover = Rover;
