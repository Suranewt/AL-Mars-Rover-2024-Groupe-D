import { Orientation } from '../../app/Orientation';
import { Point } from '../../app/Point';
import { Rover } from '../../app/Rover';

export class RoverBuilder {
    public static default(): Rover {
        return new RoverBuilder().build();
    }

    private _startingPosition: Point = new Point(0, 0);
    private _orientation: Orientation = Orientation.Nord;

    public build(): Rover {
        return new Rover(this._startingPosition, this._orientation);
    }

    public withStartingPosition(position: Point): RoverBuilder {
        this._startingPosition = position;
        return this;
    }

    public withOrientation(orientation: Orientation): RoverBuilder {
        this._orientation = orientation;
        return this;
    }
}
