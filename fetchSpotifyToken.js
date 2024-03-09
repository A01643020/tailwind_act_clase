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