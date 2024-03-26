import {ActiveNetworkInterface} from "../mission-Control/roverProxy";

export class WebsocketImplementation implements  ActiveNetworkInterface {
    Transceive(str: string): string {
        throw new Error("Method not implemented.");
    }
}