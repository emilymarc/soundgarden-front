const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'

const form = document.querySelector('form');

function getId(){
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    return id
}

async function getEvent(){
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const request = await fetch(`${BASE_URL}/events/` + getId(), options);
    const response = await request.json();
    
    return response
}


async function putEvent(data){
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const request = await fetch(`${BASE_URL}/events/` + getId(), options);
    const response = await request.json();
    
    return response
}


const formatMinutes = (numero) => {
    if ( numero < 10 ) {
        return "0"+numero
    }
    return numero
}



form.onsubmit = async function(){
    try {
        evento.preventDefault();

        const data = {
            name: document.querySelector('#nome').value,
            poster: document.querySelector('#banner').value,
            attractions: document.querySelector('#atracoes').value.split(','),
            description: document.querySelector('#descricao').value,
            scheduled: formatScheduled,
            number_tickets: Number(document.querySelector('#lotacao').value),
        }
        
        const newDate = new Date(document.querySelector('#data').value);
        const formatScheduled = `${newDate.getFullYear()}-${formatMinutes(newDate.getMonth())}-${newDate.getDate()}T${formatMinutes(newDate.getHours())}:${formatMinutes(newDate.getMinutes())}`;
   

        const response = await putEvent(data);

        alert('Dado atualizado com sucesso!');
        window.location.pathname = "/admin.html";
    } catch (error) {
         
        console.error(error);

    }
}

async function getDetails(){
    const response = await getEvent();
    const format = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    
    const newDate = new Date(response.scheduled);
    const formatScheduled = `${newDate.getFullYear()}-${formatMinutes(newDate.getMonth())}-${newDate.getDate()}T${formatMinutes(newDate.getHours())}:${formatMinutes(newDate.getMinutes())}`;
   

    document.querySelector('#nome').value = response.name;
    document.querySelector('#banner').value = response.poster;
    document.querySelector('#atracoes').value = response.attractions;
    document.querySelector('#descricao').value = response.description;
    document.querySelector('#data').value = formatScheduled;
    document.querySelector('#lotacao').value = response.number_tickets;

}

getDetails()