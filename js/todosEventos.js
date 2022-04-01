const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const optionEvents = {
    method:"GET",
    headers: {
        "Content-Type": "application/json"
    },
};


const cards = document.querySelector("#card")
const listarEventos = async () => {
    const resposta = await fetch (`${BASE_URL}/events`, optionEvents)
    const eventos = await resposta.json();
    const htmlEventos = eventos.map((evento, index) => {
        const dataEvento = new Date(evento.scheduled);
        const informaçoes = `
        <h2>${evento.name} - ${dataEvento.toLocaleDateString()} </h2>
        <h4>${evento.attractions}</h4>
        <p>${evento.description}</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
        `;
        return informaçoes;
    })
    return htmlEventos;
}

const eventos = listarEventos().then((resp) => {cards.innerHTML += resp.slice(0,6);});