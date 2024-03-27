import * as express from "express";
import { Server as SocketIOServer, Socket } from "socket.io";


const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const io = new SocketIOServer(server);


io.on("connection", (socket: Socket) => {
  console.log("A user connected");

  const s = socket;
  
  s.on("command", (command: string) => {
    console.log(`Received command: ${command}`);
  });

  s.on("disconnect", () => {
    console.log("A user disconnected");
  });

});