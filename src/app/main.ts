import { RoverBuilder } from '../tests/utilities/RoverBuilder';
import { Orientation } from '../domain/Orientation';
import { Point } from '../domain/Point';
import { Rover } from '../domain/Rover';

let ROVER = RoverBuilder.default();

ROVER = ROVER.avancer();
ROVER = ROVER.tournerDroite();
ROVER = ROVER.reculer();
