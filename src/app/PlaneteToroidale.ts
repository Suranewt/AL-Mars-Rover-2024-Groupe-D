import { PlaneteInterface } from './Planete.interface';
import { Point } from './Point';

export class PlaneteToroidale implements PlaneteInterface {
    public taille: number;

    constructor(taille: number) {
        this.taille = taille;
    }

    /**
     * Calculer la nouvelle position en prenant en compte la nature toroïdale de la planète.
     * Si le rover sort, il réapparaît de l'autre côté.
     */
    normaliser(point: Point): Point {
        const x = (point.posX + this.taille) % this.taille;
        const y = (point.posY + this.taille) % this.taille;
        return new Point(x, y);
    }

    estLibre(position: Point): boolean {
        return true;
    }
}
