# Raspberry Pi Server

Cliente e Servidor para gerenciamento de recursos de um Raspberry Pi à distância.

## Requisitos
NodeJS

Python

## Modo de uso

### Servidor
O servidor recebe requisições com metodo GET na porta `3279` e possui um socket na porta 3280. Toda requisição recebida é distribuída a todos os dispositivos conectados em seu socket.

Inicialização: `node /pasta/do/projeto/server.js`

Endpoint: `http://<<dominio>>:3279/<<comando>>/<<parametro>>`

### Cliente
A partir do momento que o cliente for iniciado, tentará sempre manter uma conexão com o servidor passado como parametro. O cliente recebe comandos do servidor e processa conforme programado cada comando.
Para a manipulação das portas GPIO é necessário permissão de administrador

Inicialização: `[sudo] node /pasta/do/projeto/client.js <server>:3280`

## Exemplo do LED
Para o devido funcionamento é esperado que os três LEDs estejam ligados, respectivamente, nas portas GPIO 7, 11 e 12.

Endpoint ligaLed: `http://<<dominio>>:3279/liga/<<led_index>>`

Endpoint desligaLed: `http://<<dominio>>:3279/desliga/<<led_index>>`

Aplicativo para manipulação de dispositivos ligados ao servidor `http://vinifig.me`: [Raspberry PI Server App](https://github.com/vinifig/rpi_server_app)
