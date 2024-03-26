import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', function(req, res) {
  res.sendFile("index.html", { root :"src/mission-Control"}); // Adjust the path as necessary
});

const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });

  // Add custom socket events here (if needed)
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
