import { RoverInterface } from "../domain/Rover.interface";
import { RoverInterpreter } from "../app/RoverInterpreter";
import { PlaneteInterface } from "../domain/Planete.interface";

export interface ActiveNetworkInterface {
    Transceive(str: string): string;
}

export class RoverProxy implements RoverInterface {
    private readonly planèteCommune: PlaneteInterface;
    private _commandChannel: ActiveNetworkInterface;
    
    public constructor(planèteCommune: PlaneteInterface, 
                       commandChannel: ActiveNetworkInterface) {
        this.planèteCommune = planèteCommune;
        this._commandChannel = commandChannel;
    }

    Avancer(): RoverInterface {
        let request = "A";
        let response = this._commandChannel.Transceive(request);
        return RoverInterpreter.deserialize(response, this.planèteCommune);
    }

    Reculer(): RoverInterface {
        let request = "R";
        let response = this._commandChannel.Transceive(request);
        return RoverInterpreter.deserialize(response, this.planèteCommune);
    }
}