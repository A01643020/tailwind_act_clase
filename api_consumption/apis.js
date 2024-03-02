const http = require("node:http");
const querystring = require("node:querystring");
const url = require("node:url");
const creds = require("./credentials.js")


async function miFuncionOpenAi(InputValue) {
    const endpoint_ai = "https://api.openai.com/v1/chat/completions";
    console.log("Clave: " + API_KEY)
    const opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "" + InputValue }],
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
  const token = await getSpotifyToken(creds.client_id, creds.client_secret);
  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`,
    {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
    });

  const data = await response.json();
  return data.albums.items;
}

const server = http.server((solicitud, respuesta) => {
    respuesta.statusCode = 200;
    respuesta.setHeader('Content-Type', 'text/plain');
    respuesta.end('Hola Mundo :)\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor web inicializado: http://localhost:${port}/`)
});

// console.log(await albumSearch("Redbone"));
