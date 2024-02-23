import { PlaneteToroidale } from './PlaneteToroidale';
import { Orientation } from './Orientation';
import { Point } from './Point';
import { PlaneteInterface } from './Planete.interface';

// Objet valeur
export class Rover {
    readonly position: Point;
    readonly orientation: Orientation;
    readonly planete: PlaneteInterface;

    constructor(
        position: Point,
        orientation: Orientation,
        planete: PlaneteInterface
    ) {
        this.position = position;
        this.orientation = orientation;
        this.planete = planete;
    }

    /**
     * Avancer de 1 case
     */
    public avancer(): Rover {
        let nouvellePosition = this.orientation.appliquerVecteur(this.position);

        const DEPLACEMENT_LIBRE: boolean =
            this.planete.estLibre(nouvellePosition);

        return this._deplacerRover(this, DEPLACEMENT_LIBRE, nouvellePosition);
    }

    public reculer(): Rover {
        let nouvellePosition = this.orientation
            .inverser()
            .appliquerVecteur(this.position);

        const DEPLACEMENT_LIBRE: boolean =
            this.planete.estLibre(nouvellePosition);

        return this._deplacerRover(this, DEPLACEMENT_LIBRE, nouvellePosition);
    }

    /**
     * Gère le comportement du Rover par rapport à son déplacement
     * @param rover Le rover à déplacer
     * @param estLibreDeDeplacement Le booléan permettant de savoir si le Rover n'a pas rencontré d'obstacle
     * @param nouvellePosition La nouvelle position qu'aura le Rover
     * @returns Le Rover déplacé (ou non si obstacle)
     */
    private _deplacerRover(
        rover: Rover,
        estLibreDeDeplacement: boolean,
        nouvellePosition: Point
    ): Rover {
        if (estLibreDeDeplacement) {
            nouvellePosition = rover.planete.normaliser(nouvellePosition);
            return new Rover(
                nouvellePosition,
                rover.orientation,
                rover.planete
            );
        }

        return rover;
    }

    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    public tournerGauche(): Rover {
        return new Rover(
            this.position,
            this.orientation.rotationAntiHoraire(),
            this.planete
        );
    }

    /**
     * Tourner l'orientation du robot de 90° vers la droite
     */
    public tournerDroite(): Rover {
        return new Rover(
            this.position,
            this.orientation.rotationHoraire(this.orientation),
            this.planete
        );
    }
}
