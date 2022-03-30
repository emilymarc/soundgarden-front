const inputNome = document.querySelector("#rsvName");
const inputEmail = document.querySelector("#rsvEmail");
const inputEvento = document.querySelector("#rsvEvento");
const inputQuantidade = document.querySelector("#rsvQuantidade");
const form = document.querySelector("#modalForm")

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'


form.onsubmit = async (evento) => {
    evento.preventDefault();

    try{
        const newReserva = {
            owner_name: inputNome.value,
            owner_email: inputEmail.value,
            number_tickets: inputQuantidade.value,
            event_id: "62438eec98610447190d8212"
            
        }

        const options = {
            method: "POST",
            body: JSON.stringify(newReserva),
            headers: {
              "Content-Type": "application/json"
            }
        }

        const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, options)
        const conteudoResposta = await resposta.json()
        console.log(conteudoResposta);
        form.reset();
    }
    
    catch (error) {
        alert('error!');
        }
    
}


