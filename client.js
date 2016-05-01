'use strict';

const SocketIO = require('socket.io-client');
const Server = process.argv[2];
const socket = SocketIO(Server);

function connect(){
  console.log("Conectado com sucesso!");
}

function callback(data){
  console.dir(data);
}

function disconnect(){
  console.log("Hasta la vista, baby!");
}

socket.on('connect', connect);
socket.on('news', callback);
socket.on('disconnect', disconnect);
