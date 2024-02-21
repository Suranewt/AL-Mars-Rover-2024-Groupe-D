import { Orientation } from './Orientation';
import { Point } from './Point';
import { Rover } from './Rover';

const POSITION = new Point(0, 0);
let ROVER = new Rover(POSITION, Orientation.Nord);

ROVER = ROVER.avancer();
ROVER = ROVER.tournerDroite();
ROVER = ROVER.reculer();

console.log(ROVER.getPosition());
