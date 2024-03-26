import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { port } from '../env/port';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log(`User with id = "${socket.id}" disconnected`);
    });

    const eventName = 'Simple chat message';
    socket.on(eventName, (msg, ackFn) => {
        console.log('message: ' + msg);
    });
});

httpServer.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
