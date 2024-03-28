import { Orientation } from '../domain/Orientation';
import { PlaneteAvecObstacle } from '../domain/PlaneteAvecObstacle';
import { PlaneteToroidale } from '../domain/PlaneteToroidale';
import { Point } from '../domain/Point';
import { Rover } from '../domain/Rover';

/* Début de la configuration de la mission */

const TAILLE_PLANETE_TOROIDALE = 5;

const POSITION_OBSTACLE_X = 2;
const POSITION_OBSTACLE_Y = 1;

const POSITION_INIT_ROVER_X = 0;
const POSITION_INIT_ROVER_Y = 0;
const ORIENTATION_INIT_ROVER = Orientation.Est;

/* Fin de la configuration de la mission  */

const planeteToroidale = new PlaneteToroidale(TAILLE_PLANETE_TOROIDALE);
const positionObstacle = new Point(POSITION_OBSTACLE_X, POSITION_OBSTACLE_Y);
const planeteAvecObstacle = new PlaneteAvecObstacle(
    planeteToroidale,
    positionObstacle
);

const positionInitRover: Point = new Point(
    POSITION_INIT_ROVER_X,
    POSITION_INIT_ROVER_Y
);
const activeRover = new Rover(
    positionInitRover,
    ORIENTATION_INIT_ROVER,
    planeteAvecObstacle
);

export { activeRover };
