import { RoverInterface } from "../domain/Rover.interface";
import { RoverInterpreter } from "../app/RoverInterpreter";

export interface PassiveNetworkInterface {
    RegisterCallback(callback: (command: string) => string)
}

export class RoverListener {
    private _roverToMove: RoverInterface;

    public constructor(roverToMove: RoverInterface, networkInterface: PassiveNetworkInterface) {
        this._roverToMove = roverToMove;

        networkInterface.RegisterCallback(this.receiveAndMoveRover);
    }

    private receiveAndMoveRover(command: string): string {
        this._roverToMove = RoverInterpreter.

}

}