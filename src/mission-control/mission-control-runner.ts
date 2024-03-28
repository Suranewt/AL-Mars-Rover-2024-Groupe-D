// ES6 import or TypeScript
import { io } from 'socket.io-client';
import ReadLine from 'readline';
import { port } from '../conf/port';
import { IO_CLIENT_DISCONNECT } from './socket-reason';
import {
    EVENT_COMMANDS,
    EVENT_INVALID_COMMAND,
    EVENT_LOGGED,
    EVENT_ROVER_POSITION
} from '../network/web-socket/event-names';
import { RoverInterpreter } from '../domain/RoverInterpreter';

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = io(`http://localhost:${port}`);

const envoyerCommandes = () => {
    rl.question('', (input) => {
        const inputUpperCased = input.trim().toUpperCase();

        if (areCommandesValides(inputUpperCased)) {
            socket.emit(EVENT_COMMANDS, inputUpperCased);
        } else console.error('Commande invalide');

        envoyerCommandes();
    });
};

const areCommandesValides = (input: string): boolean => {
    const inputCommandes = input.split('');
    const listeCommandesValides: string[] =
        RoverInterpreter.recupererListeCommandesValides();

    let isCommandeValide = true;
    let i = 0;
    while (i < inputCommandes.length && isCommandeValide) {
        isCommandeValide = listeCommandesValides.includes(inputCommandes[i]);
        i++;
    }

    return isCommandeValide;
};

socket.on('connect', () => {
    console.log(`Connexion au roveur sur le port ${port} réussie.`);
    socket.emit(EVENT_LOGGED, socket.id);
    envoyerCommandes();
});

socket.on('disconnect', (reason) => {
    if (reason.toString() === IO_CLIENT_DISCONNECT) {
        console.log('Vous avez été déconnecté avec succès !');
    } else {
        console.log('Vous avez été déconnecté du serveur. Raison:', reason);
    }
});

socket.on(EVENT_ROVER_POSITION, (roverPosition) => {
    console.log(`Position du rover : [${roverPosition}]`);
});

socket.on(EVENT_INVALID_COMMAND, (error) => {
    console.error(error);
});
