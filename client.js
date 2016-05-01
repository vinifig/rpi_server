'use strict';

const SocketIO = require('socket.io-client');
const Server = process.argv[2];
const socket = SocketIO(Server);

const methods = {}

methods.command = function(data){
  console.dir(data);
}

function connect(){
  console.log("Conectado com sucesso!");
}

function command(data){
  if(typeof(methods[data.type]) == "function")
    methods[data.type](data);
  else
    console.log("Comando não encontrado")
}

function disconnect(){
  console.log("Hasta la vista, baby!");
}

socket.on('connect', connect);
socket.on('command', command);
socket.on('disconnect', disconnect);
