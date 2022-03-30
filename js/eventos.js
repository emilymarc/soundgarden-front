const inputNome = document.querySelector("#nome");
const inputAtracoes = document.querySelector("#atracoes");
const atracao = inputAtracoes.value.split(",")
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'




form.onsubmit = async (evento) => {
    evento.preventDefault();
   
    try{
        const newEvento = {
            name: inputNome.value,
            poster: "link da imagem",
            attractions: atracao,
            description: inputDescricao.value,
            scheduled: "2022-03-24T00:57:37.761Z",
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


