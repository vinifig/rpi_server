'use strict';

const gpio = require('rpi-gpio');

const Led = {};
const portas = [7,11,12];

// Módulo
Led.acendeLed = function(id){
  gpio.write(id, 1, (err) => {
    if(err)
      return console.log("Falha: " + err.toString());
    console.log(`Aceso led: ${id}`);
  })
}

Led.apagaLed = function(id){
  gpio.write(id, 0, (err) => {
    if(err)
      return console.log("Falha: " + err.toString());
    console.log(`Apagado led: ${id}`);
  })

}

// Configuração
function abreGPIOS(){
  for(let i = 0; i < portas.length; i++)
    gpio.setup(portas[i], gpio.DIR_OUT, () => Led.acendeLed(i));
}

process.on('exit', gpio.destroy);
abreGPIOS();

module.exports = Led;
