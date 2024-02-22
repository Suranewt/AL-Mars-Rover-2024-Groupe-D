import { Point } from './Point';

export interface PlaneteInterface {
    normaliser(position: Point): Point;
    estLibre(position: Point): boolean;
}
