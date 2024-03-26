import { RoverInterface } from "../domain/Rover.interface";
import { RoverInterpreter } from "../app/RoverInterpreter";
import { Rover } from "../domain/Rover";

export interface PassiveNetworkInterface {
    RegisterCallback(callback: (command: string) => string): void;
}

export class RoverListener {
    private _roverToMove: RoverInterface;

    private _roverInterpreter: RoverInterpreter;

    public constructor(roverToMove: RoverInterface, newtworkInterface: PassiveNetworkInterface) {
        this._roverToMove = roverToMove;

        this._roverInterpreter = new RoverInterpreter(roverToMove as Rover);
        
        newtworkInterface.RegisterCallback(this.ReceiveAndMoveRover);
    }

    ReceiveAndMoveRover(command: string): string {
        this._roverToMove = this._roverInterpreter.executer(command);
        return RoverInterpreter.serialize(this._roverToMove as Rover);
    }

}