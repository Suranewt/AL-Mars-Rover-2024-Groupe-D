import {ActiveNetworkInterface} from "../missionControl/roverProxy";

export class WebsocketImplementation implements ActiveNetworkInterface {
    Transceive(str: string): string {
        throw new Error("Method not implemented.");
    }
    RegisterCallback(callback: (command: string) => string) {
        throw new Error("Method not implemented.");
    }

}