import { PlaneteToroidale } from './PlaneteToroidale';
import { Orientation } from './Orientation';
import { Point } from './Point';
import { PlaneteInterface } from './Planete.interface';

export class Rover {
    readonly position: Point;
    readonly orientation: Orientation;
    private readonly planete: PlaneteInterface;

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
        let nouvellePosition = this.orientation.vecteur(this.position);
        nouvellePosition = this.planete.normaliser(nouvellePosition);
        return new Rover(nouvellePosition, this.orientation, this.planete);
    }

    public reculer(): Rover {
        let nouvellePosition = this.orientation
            .inverser()
            .vecteur(this.position);
        nouvellePosition = this.planete.normaliser(nouvellePosition);
        return new Rover(nouvellePosition, this.orientation, this.planete);
    }

    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    public tournerGauche(): Rover {
        return new Rover(
            this.position,
            this.orientation.rotationGauche(),
            this.planete
        );
    }

    /**
     * Tourner l'orientation du robot de 90° vers la droite
     */
    public tournerDroite(): Rover {
        return new Rover(
            this.position,
            this.orientation.rotationDroite(),
            this.planete
        );
    }
}
