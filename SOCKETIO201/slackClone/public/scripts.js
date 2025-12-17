// const userName = prompt("What is your Username?");
// const password = prompt("What is your Password?");

const userName = "Mark";
const password = "x";

const socket = io("http://localhost:9000");

socket.on("connect", () => {
  console.log("Connected");
  socket.emit("clientConnect");
});

//listen for the nslist event from the server that gives us the namespaces
socket.on("nsList", (nsData) => {
  console.log(nsData);
  const nameSpacesDiv = document.querySelector(".namespaces");
  nsData.forEach((ns) => {
    // update the html with each namespace
    nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"> </div>`;
  });
});
