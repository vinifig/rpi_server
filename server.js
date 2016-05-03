// APENAS UM PIPE PARA O RASPBERRY
'use strict';

const Express = require('express');
const BodyParser = require('body-parser');
const io      = require('socket.io')();
const cors    = require('cors')

const app     = Express();
const requests = [];

function command(req, res){
  io.emit('command', {
    type : req.params.command,
    id   : req.params.id
  })
  res.end("Okay");
}

app.use(BodyParser.json());
app.use(cors())
app.get('/:command/:id', command)
app.listen(3079);

io.listen(3080);
