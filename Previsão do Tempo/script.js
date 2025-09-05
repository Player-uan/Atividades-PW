let chave = "9269f5af89716500f45f1993a91a1e37";

function clique() {
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade);

}

//https://api.openweathermap.org/data/2.5/weather?q=   {city name}&appid={API key}

async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade +
        "&appid=" +
        chave +
        "&lang={pt-br}" +
        "&units=metric")
    .then(res => res.json())
    console.log(dados)

}