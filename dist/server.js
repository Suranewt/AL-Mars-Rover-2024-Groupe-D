"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socket_io_1 = require("socket.io");
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
const io = new socket_io_1.Server(server);
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "src/client" });
});
io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("message", (message) => {
        console.log(message);
        socket.emit("message", message);
    });
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});
//# sourceMappingURL=server.js.map