//2 3rd party module from np
const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id, "has connected");
  // in ws we use send method and in sockio.to we use the "emit" method
  socket.emit("messageFromServer", { data: "Welcome to the socket Server!" });
  socket.on("messageFromClient", (data) => {
    console.log("data:", data);
  });
});
