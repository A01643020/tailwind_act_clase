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
