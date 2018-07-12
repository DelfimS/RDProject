const http = require('http');
const url = require('url')
const fs = require('fs')
const path = require('path')

http.createServer(function (pedido, resposta) {

// Aqui vamos escrever o código do servidor que vai ser
// executado sempre que for feito um pedido

    const caminho = url.parse(pedido.url).pathname;

    var ficheiro

    if (caminho==='/') {
        ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
    } else {
        ficheiro = path.join(__dirname, 'public', caminho);
    }
    fs.readFile(ficheiro, function (erro, dados) {
        if (erro) {
            resposta.writeHead(404);
            resposta.end();
        } else {
            resposta.end(dados);
        }
    });

    }).listen(80, 'localhost', function () {
    console.log('--- O servidor arrancou –--');
});


