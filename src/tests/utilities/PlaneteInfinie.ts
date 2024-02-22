import { PlaneteInterface } from '../../app/Planete.interface';
import { Point } from '../../app/Point';

export class PlaneteInfinie implements PlaneteInterface {
    normaliser(position: Point): Point {
        return position;
    }

    estLibre(position: Point): boolean {
        return true;
    }
}
