// ES6 import or TypeScript
import { io } from 'socket.io-client';
import ReadLine from 'readline';
import { port } from '../env/port';

const socket = io();
const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your name ? ", (name) => {
    const socket = io(`http://localhost:${port}`);

    const sendMsg = () => {
        rl.question('> ', (reply) => {
            console.log(`Sending message: ${reply}`);
            socket.emit('Simple chat message', `${name} says ${reply}`);
            sendMsg();
        });
    };

    socket.on('connect', () => {
        console.log('Sucessfully connected to server.');
        sendMsg();
    });

    socket.on('simple chat message', (message) => {
        console.log(message);
    });

    socket.on('disconnect', () => {
        console.log('Connection lost...');
    });
});
