"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Root route to serve your HTML file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/mission-Control/index.html'); // Adjust the path as necessary
});
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
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
