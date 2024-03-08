const http = require("node:http");
const querystring = require("node:querystring");
const url = require("node:url");
require("dotenv").config();


async function OpenAi_FunFact(InputValue) {
  const endpoint_ai = "https://api.openai.com/v1/chat/completions";
  console.log("Clave: " + process.env.API_KEY)
  const opciones = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_KEY,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "puedes darme un fun fact (manteniendo la respuesta breve y atractiva) sobre el drama de los artistas o sobre polemicas sobre el siguiente album: "}],
    }),
  };

  const res = await fetch(endpoint_ai, opciones);
  return await res.json().then((data) => data.choices[0].message.content);
}

//Spotify

async function getSpotifyToken(client_id, client_secret) {
    const endpoint = "https://accounts.spotify.com/api/token";
    const fetch_options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        body: 'grant_type=client_credentials',
    };
    const res = await fetch(endpoint, fetch_options);
    const data = await res.json();
    return data.access_token;
}

async function albumSearch(query) {
    const token = await getSpotifyToken(process.env.CLIENT_ID, process.env.CLIENT_SECTRET);
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });

    const data = await response.json();
    return data.albums.items;
}

funcionGiphy();

async function funcionGiphy(image) {
    const API_KEY = "uDc39s1aZ35nLJtv2S3TD16mLNrceKNS"
    const endpoint_giphy = "https://api.giphy.com/v1/gifs/search?"
    const options = {
        api_key: API_KEY,
        q: "perro"
    }
    const res = await fetch(endpoint_giphy + new URLSearchParams(options));
    const data = await res.json();
    let random = Math.floor(Math.random() * 10)
    console.log(random)
    console.log(data.data[random].images.original.url)
}



const server = http.createServer((funcionGiphy, respuesta) => {
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/plain');
    respuesta.end('Hola Mundo :)\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor web inicializado: http://localhost:${port}/`)
});

