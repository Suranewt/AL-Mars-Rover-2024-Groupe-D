import { NetworkInterface } from '../network/Network.interface';
import { Rover } from '../domain/Rover';
import { RoverInterpreter } from '../domain/RoverInterpreter';

export class RoverListener {
    private rover: Rover;

    constructor(rover: Rover, nface: NetworkInterface) {
        this.rover = rover;

        nface.registerCallBack(this.deplacerEtRecupererPosition);
    }

    private deplacerEtRecupererPosition(commandes: string): string {
        const roverInterpreter: RoverInterpreter = new RoverInterpreter(
            this.rover
        );

        this.rover = roverInterpreter.executer(commandes);

        return RoverInterpreter.serialize(this.rover);
    }
}
