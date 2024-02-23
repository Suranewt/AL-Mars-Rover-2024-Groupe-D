import { PlaneteInterface } from './Planete.interface';
import { Point } from './Point';

export class PlaneteAvecObstacle implements PlaneteInterface {
    private readonly planete: PlaneteInterface;
    private readonly obstacle: Point;

    constructor(planete: PlaneteInterface, obstacle: Point) {
        this.planete = planete;
        this.obstacle = obstacle;
    }

    normaliser(point: Point): Point {
        return this.planete.normaliser(point);
    }

    estLibre(positionRover: Point): boolean {
        if (
            positionRover.x != this.obstacle.x ||
            positionRover.y != this.obstacle.y
        ) {
            return true;
        }

        return false;
    }
}
