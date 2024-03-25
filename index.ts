import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the `public` directory
app.use(express.static('public'));

// Root route to serve your HTML file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/AL-Mars-Rover-2024-Groupe-D/public/index.html'); // Adjust the path as necessary
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
