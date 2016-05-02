'use strict';

const gpio = require('rpi-gpio');

const Led = {};
const portas = [7,11,12];

// Configuração

function abreGPIOS(){
  for(let i = 0; i < portas.length; i++)
    gpio.setup(portas[i], gpio.DIR_OUT, () => acendeLed(i));
}

process.on('exit', gpio.destroy);

// Módulo
Led.acendeLed = function(id){
  gpio.write(id, 1)
}

Led.apagaLed = function(id){
  gpio.write(id, 0)

}

abreGPIOS();
module.exports = Led;