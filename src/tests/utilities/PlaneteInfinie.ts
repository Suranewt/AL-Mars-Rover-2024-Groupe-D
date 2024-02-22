import { PlaneteInterface } from '../../domain/Planete.interface';
import { Point } from '../../domain/Point';

export class PlaneteInfinie implements PlaneteInterface {
    normaliser(position: Point): Point {
        return position;
    }

    estLibre(position: Point): boolean {
        return true;
    }
}
