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
        this.planete = planete; 
    }

    /**
     * Avancer de 1 case
     */
    public avancer() {
        let nouvellePosition = this.orientation.vecteur(this.position);
        nouvellePosition = this.planete.ajusterPosition(nouvellePosition); 
        return new Rover(nouvellePosition,this.orientation,this.planete); 
    }


    public reculer() {
        let nouvellePosition = this.orientation.inverser().vecteur(this.position);
        nouvellePosition = this.planete.ajusterPosition(nouvellePosition); 
        return new Rover(nouvellePosition,this.orientation,this.planete);
    }

    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    public tournerGauche() {
        this.orientation = this.orientation.rotationGauche(); 
    }


    public tournerDroite() {
        this.orientation = this.orientation.rotationDroite(); 
    }
    /**
     * Récupérer la position du robot
     */
    public getPosition(): Point {
        return this.position;
    }
}
