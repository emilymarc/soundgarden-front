const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'

const form = document.querySelector('form');

function getId(){
    const url = new URL(window.location.href).searchParams;
    const id = url.get('id');
    return id
}


function formatMinutes (numero) {
    if ( numero < 10 ) {
        return "0"+numero
    }
    return numero
}

async function getEvent(){
    const options = {
        method: "GET",
        redirect: "follow",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const request = await fetch(`${BASE_URL}/events/` + getId(), options);
    const response = await request.json();
    const {name, attractions, poster, description, scheduled, number_tickets} = response;
    const newDate = new Date(scheduled)
    const formattedDate = `${newDate.getFullYear()}-${formatMinutes(newDate.getMonth())}-${newDate.getDate()}T${formatMinutes(newDate.getHours())}:${formatMinutes(newDate.getMinutes())}`
    inputNome.value=name;
    inputBanner.value=poster;
    inputAtracoes.value=attractions;
    inputDescricao.value=description;
    inputData.value=formattedDate;
    inputLotacao.value=number_tickets;
    
    return response
}

form.addEventListener("submit" , async event => {
    event.preventDefault();
    const deleteEvent = {
        name:inputNome.value,
        poster:inputBanner.value,
        attractions:[inputAtracoes.value],
        description:inputDescricao.value,
        scheduled:inputData.value,
        number_tickets:inputLotacao.value,
    }

    const exclude = {
        method:"DELETE",
        redirect: "follow",
        body: JSON.stringify(deleteEvent),
        headers: {
            "Content-Type":"application/json",
        },
        
    }
    const request = await fetch (`${BASE_URL}/${id}`, exclude)
    alert ("Evento excluido")

    window.location.href = 'admin.html'
}); 
