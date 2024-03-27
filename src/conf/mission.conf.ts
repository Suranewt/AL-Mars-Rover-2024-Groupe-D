import { Orientation } from '../domain/Orientation';
import { PlaneteAvecObstacle } from '../domain/PlaneteAvecObstacle';
import { PlaneteToroidale } from '../domain/PlaneteToroidale';
import { Point } from '../domain/Point';
import { Rover } from '../domain/Rover';

const planeteToroidale = new PlaneteToroidale(5);
const positionObstacle = new Point(2, 1);
const planeteAvecObstacle = new PlaneteAvecObstacle(
    planeteToroidale,
    positionObstacle
);

const positionInitRover: Point = new Point(0, 0);
const activeRover = new Rover(
    positionInitRover,
    Orientation.Nord,
    planeteAvecObstacle
);

export { activeRover };
