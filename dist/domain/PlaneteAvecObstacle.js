"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneteAvecObstacle = void 0;
class PlaneteAvecObstacle {
    constructor(planete, obstacle) {
        this.planete = planete;
        this.obstacle = obstacle;
    }
    normaliser(point) {
        return this.planete.normaliser(point);
    }
    estLibre(positionRover) {
        if (positionRover.x != this.obstacle.x ||
            positionRover.y != this.obstacle.y) {
            return true;
        }
        return false;
    }
}
exports.PlaneteAvecObstacle = PlaneteAvecObstacle;
