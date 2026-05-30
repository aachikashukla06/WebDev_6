async function GetJoke()
{

    const API_URL = "https://v2.jokeapi.dev/joke/Programming,Punchline?type=single";
    // const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const response = await fetch(API_URL);

    const data = await response.json();


    document.getElementById("setup").innerText = data.joke || data.setup;
    document.getElementById("delivery").innerText = data.delivery || "";
     
    console.log(data);
}