const server = http.createServer((funcionGiphy, respuesta) => {
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/plain');
    respuesta.end('Hola Mundo :)\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor web inicializado: http://localhost:${port}/`)
});
