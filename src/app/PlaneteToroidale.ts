import { Point } from "./Point";

export class PlaneteToroidale {
    public taille: number; 

    constructor(taille: number) {
        this.taille = taille;
    }

    /*
     Calculer la nouvelle position en prenant en compte la nature toroïdale de la planète.
     Si le rover sort, il réaparaait de l'autre côté.
     */
    ajusterPosition(point: Point): Point {
        const x = (point.getPosX() + this.taille) % this.taille;
        const y = (point.getPosY() + this.taille) % this.taille;
        return new Point(x, y);
    }
}
