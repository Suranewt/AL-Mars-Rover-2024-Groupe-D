import * as express from "express";
import { Server as SocketIOServer, Socket } from "socket.io";


const app = express();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const io = new SocketIOServer(server);

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "src/client" });
});

io.on("connection", (socket: Socket) => {
  console.log("A user connected");
  
  socket.on("message", (message: string) => {
    console.log(message);

    socket.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});