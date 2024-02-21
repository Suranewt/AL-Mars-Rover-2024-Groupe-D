import { PlaneteToroidale } from './PlaneteToroidale';
import { Orientation } from './Orientation';
import { Point } from './Point';
import { PlaneteInterface } from './planet.interface';

export class Rover {
    public position: Point;
    public orientation: Orientation;
    private planete: PlaneteInterface; 

    constructor(position: Point, orientation: Orientation, planete: PlaneteInterface) {
        this.position = position;
        this.orientation = orientation;
        this.planete = planete; //init
    }

    /**
     * Avancer de 1 case
     */
    public avancer() {
        let nouvellePosition = this.orientation.vecteur(this.position);
        nouvellePosition = this.planete.ajusterPosition(nouvellePosition); // Ajustement selon la planète
        this.position = nouvellePosition; // Mise à jour de la position du rover
    }


    public reculer() {
        let nouvellePosition = this.orientation.inverser().vecteur(this.position);
        nouvellePosition = this.planete.ajusterPosition(nouvellePosition); // Ajustement selon la planète
        this.position = nouvellePosition; // Mise à jour de la position du rover
    }

    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    public tournerGauche() {
        this.orientation = this.orientation.rotationGauche(); // Mise à jour de l'orientation
    }


    public tournerDroite() {
        this.orientation = this.orientation.rotationDroite(); // Mise à jour de l'orientation
    }
}
