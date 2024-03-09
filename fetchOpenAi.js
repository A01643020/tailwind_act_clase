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