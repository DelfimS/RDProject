const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function (pedido, resposta) {
    const caminho = url.parse(pedido.url).pathname;
    let ficheiro;

    if (caminho==='/') {
        ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
    } else {
        ficheiro = path.join(__dirname, 'public', caminho);
    }

}).listen(80, 'localhost', function () {
    console.log('--- O servidor arrancou –--');
});
