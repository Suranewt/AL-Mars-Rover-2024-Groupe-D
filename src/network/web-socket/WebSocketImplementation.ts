import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { Rover } from '../../domain/Rover';
import { NetworkInterface } from '../Network.interface';
import { port } from '../../conf/port';
import {
    EVENT_COMMANDS,
    EVENT_LOGGED,
    EVENT_ROVER_POSITION
} from './event-names';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

httpServer.listen(port, () => {
    console.log(`Le Rover écoute sur le port: ${port}`);
});

export class WebSocketImplementation implements NetworkInterface {
    private rover: Rover;
    private callback: (commande: string) => string = (_) => {
        return _;
    };

    constructor(rover: Rover) {
        this.rover = rover;
    }
    // transmission(commande: string): string {
    //     return '';
    // }

    registerCallBack(callback: (commande: string) => string): void {
        this.callback = callback;
    }

    demarrerServeur() {
        io.on('connection', (socket) => {
            socket.on(EVENT_LOGGED, (idClient) => {
                console.log(
                    `[ID_CLIENT=${idClient}] Le Client s'est connecté.`
                );
            });

            socket.on('disconnect', (reason) => {
                console.log(
                    `[ID_CLIENT=${socket.id}] Le Client s'est déconnecté. Raison: ${reason}`
                );
            });

            socket.on(EVENT_COMMANDS, (commands) => {
                console.log(`Commandes reçues: ${commands}`);

                io.to(socket.id).emit(
                    EVENT_ROVER_POSITION,
                    this.callback(commands)
                );
            });
        });
    }
}
