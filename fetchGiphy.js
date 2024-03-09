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