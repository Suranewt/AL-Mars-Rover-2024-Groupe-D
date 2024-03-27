// ES6 import or TypeScript
import { io } from 'socket.io-client';
import ReadLine from 'readline';
import { port } from '../conf/port';
import { IO_CLIENT_DISCONNECT } from './socket-reason';
import { HELP, QUIT } from './commands';
import {
    EVENT_COMMANDS,
    EVENT_INVALID_COMMAND,
    EVENT_LOGGED,
    EVENT_ROVER_POSITION
} from '../socket-event-names/event-names';

const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = io(`http://localhost:${port}`);

const envoyerCommandes = () => {
    rl.question('', (input) => {
        const inputUpperCased: string = input.trim().toUpperCase();

        if (!QUIT.includes(inputUpperCased)) {
            if (HELP.includes(inputUpperCased)) {
                afficherAide();
            } else {
                socket.emit(EVENT_COMMANDS, inputUpperCased);
            }
            envoyerCommandes();
        } else socket.disconnect();
    });
};

const afficherAide = (): void => {
    console.log(`\nCommandes :`);
    console.log(`A\tFait avancer le rover`);
    console.log(`R\tFait reculer le rover`);
    console.log(`D\tFait tourner le Rover de 90° dans le sens horaire`);
    console.log(`G\tFait tourner le Rover de 90° dans le sens anti-horaire`);
    console.log(`H\tAffiche la liste des commandes`);
    console.log(`Q\tDéconnecte ce terminal du serveur\n`);
};

socket.on('connect', () => {
    console.log(`Connexion au roveur sur le port ${port} réussie.`);
    console.log(
        `Entrez la commande 'h' ou 'help' pour voir la liste des commandes.`
    );

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
    console.log(error);
});
