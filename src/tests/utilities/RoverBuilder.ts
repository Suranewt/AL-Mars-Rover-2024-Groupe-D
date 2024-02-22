import { Orientation } from '../../app/Orientation';
import { PlaneteInterface } from '../../app/Planete.interface';
import { Point } from '../../app/Point';
import { Rover } from '../../app/Rover';
import { PlaneteInfinie } from './PlaneteInfinie';

export class RoverBuilder {
    /**
     * Retourne un Rover de position (0, 0), d'orientation Nord et sur une planète infinie
     * @returns Rover
     */
    public static default(): Rover {
        return new RoverBuilder().build();
    }

    private _startingPosition: Point = new Point(0, 0);
    private _orientation: Orientation = Orientation.Nord;
    private _planete: PlaneteInterface = new PlaneteInfinie();

    public build(): Rover {
        return new Rover(
            this._startingPosition,
            this._orientation,
            this._planete
        );
    }

    public withStartingPosition(position: Point): RoverBuilder {
        this._startingPosition = position;
        return this;
    }

    public withOrientation(orientation: Orientation): RoverBuilder {
        this._orientation = orientation;
        return this;
    }

    public withPlanete(planete: PlaneteInterface): RoverBuilder {
        this._planete = planete;
        return this;
    }
}
