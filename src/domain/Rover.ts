import { PlaneteToroidale } from './PlaneteToroidale';
import { Orientation } from './Orientation';
import { Point } from './Point';
import { PlaneteInterface } from './Planete.interface';

// Objet valeur
export class Rover {
    readonly position: Point;
    readonly orientation: Orientation;
    readonly planete: PlaneteInterface;
    public aucunObstacleRencontre: boolean;

    constructor(
        position: Point,
        orientation: Orientation,
        planete: PlaneteInterface
    ) {
        this.position = position;
        this.orientation = orientation;
        this.planete = planete;
        this.aucunObstacleRencontre = true;
    }

    /**
     * Avancer de 1 case
     */
    public avancer(): Rover {
        let nouvellePosition = this.orientation.appliquerVecteur(this.position);

        const DEPLACEMENT_LIBRE: boolean =
            this.planete.estLibre(nouvellePosition);

        if (DEPLACEMENT_LIBRE) {
            nouvellePosition = this.planete.normaliser(nouvellePosition);
            return new Rover(nouvellePosition, this.orientation, this.planete);
        } else {
            this.aucunObstacleRencontre = false;
            return this;
        }
    }

    public reculer(): Rover {
        let nouvellePosition = this.orientation
            .inverser()
            .appliquerVecteur(this.position);

        const DEPLACEMENT_LIBRE: boolean =
            this.planete.estLibre(nouvellePosition);

        if (DEPLACEMENT_LIBRE) {
            nouvellePosition = this.planete.normaliser(nouvellePosition);
            return new Rover(nouvellePosition, this.orientation, this.planete);
        } else {
            this.aucunObstacleRencontre = false;
            return this;
        }
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
            this.orientation.rotationHoraire(),
            this.planete
        );
    }
}
