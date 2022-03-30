const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const atracao = inputAtracoes.value.split(",")
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'


const form = document.querySelector("form");

const formatMinutes = (numero) => {
    if ( numero < 10 ) {
        return "0"+numero
    }
    return numero
}


form.onsubmit = async (evento) => {
    evento.preventDefault();

    // const atracao = inputAtracoes.value.split(',');
    // const fullDateTime = convertDateTime(inputData.value);

    const newDate = new Date(inputData.value)
    const formatScheduled = `${newDate.getFullYear()}-${formatMinutes(newDate.getMonth())}-${newDate.getDate()}T${formatMinutes(newDate.getHours())}:${formatMinutes(newDate.getMinutes())}`
   
    try{
        const newEvento = {
            name: inputNome.value,
            poster: "link da imagem",
            attractions: atracao,
            description: inputDescricao.value,
            scheduled: formatScheduled,
            number_tickets: inputLotacao.value
        }

        const options = {
            method: "POST",
            body: JSON.stringify(newEvento),
            headers: {
              "Content-Type": "application/json"
            }
        }

        const resposta = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events`, options)
        const conteudoResposta = await resposta.json()
        console.log(conteudoResposta);
        
        
        
        form.reset();
        
    }
    
    catch (error) {
        alert('error!');
        }
    
}
