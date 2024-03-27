import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("message", (message: string) => {
  console.log(message);
});

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


function askForCommand() {
  rl.question("Enter command: ", (command: string) => {
    if (command.trim().toLowerCase() !== "exit") {
      socket.emit("command", command);
      askForCommand(); 
    } else {
      rl.close(); 
    }
  });
}

askForCommand(); 
