import { RoverInterpreter } from '../domain/RoverInterpreter';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { port } from '../conf/port';
import {
    EVENT_COMMANDS,
    EVENT_INVALID_COMMAND,
    EVENT_LOGGED,
    EVENT_ROVER_POSITION
} from '../socket-event-names/event-names';
import { activeRover } from '../conf/mission.conf';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

let rover = activeRover;
let roverInterpreter: RoverInterpreter = new RoverInterpreter(rover);

io.on('connection', (socket) => {
    socket.on(EVENT_LOGGED, (idClient) => {
        console.log(`[ID_CLIENT=${idClient}] Le Client s'est connecté.`);
    });

    socket.on('disconnect', (reason) => {
        console.log(
            `[ID_CLIENT=${socket.id}] Le Client s'est déconnecté. Raison: ${reason}`
        );
    });

    socket.on(EVENT_COMMANDS, (commands) => {
        console.log(`Commandes reçues: ${commands}`);
        try {
            rover = roverInterpreter.executer(commands);
        } catch (error) {
            let messageErreur = 'Erreur inconnue';
            if (error instanceof Error) messageErreur = error.message;
            io.to(socket.id).emit(EVENT_INVALID_COMMAND, messageErreur);
        } finally {
            io.to(socket.id).emit(
                EVENT_ROVER_POSITION,
                RoverInterpreter.serialize(rover)
            );
        }
    });
});

httpServer.listen(port, () => {
    console.log(`Le rover écoute sur le port: ${port}`);
});
