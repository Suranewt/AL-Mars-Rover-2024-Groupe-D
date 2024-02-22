import { RoverBuilder } from '../tests/utilities/RoverBuilder';
import { Orientation } from './Orientation';
import { Point } from './Point';
import { Rover } from './Rover';

let ROVER = RoverBuilder.default();

ROVER = ROVER.avancer();
ROVER = ROVER.tournerDroite();
ROVER = ROVER.reculer();
