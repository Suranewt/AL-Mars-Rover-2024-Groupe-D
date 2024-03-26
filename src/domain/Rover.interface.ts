import {Point} from "./Point";
import {Orientation} from "./Orientation";

export interface RoverInterface {
    avancer(): RoverInterface;
    reculer(): RoverInterface;
}