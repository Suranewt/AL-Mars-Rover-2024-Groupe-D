import { PlaneteInterface } from './Planete.interface';
import { Point } from './Point';

export class PlaneteToroidale implements PlaneteInterface {
    public taille: number;

    constructor(taille: number) {
        this.taille = taille;
    }


    normaliser(point: Point): Point {
        return point.modulo(this.taille);
    }

    estLibre(position: Point): boolean {
        return true;
    }
}
