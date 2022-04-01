

const configuracao = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
     },
    redirect: 'follow'
}  


const table = document.querySelector(".table")
const listarEventos = async () => {
    const resposta = await fetch (`https://xp41-soundgarden-api.herokuapp.com/events`, configuracao)
    const eventos = await resposta.json();
    const htmlEventos = eventos.map((dados, index) => {
        const dataEvento = new Date(dados.scheduled);
        const linhaEvento =  
        `<tr>
        <th scope="row">${eventos.indexOf(dados)+1}</th>
        <td>${dataEvento.toLocaleDateString()} ${dataEvento.toLocaleTimeString().slice(0, -3)}</td>
        <td>${dados.name}</td>
        <td>${dados.attractions}</td>
        <td>
            <a href="reservas.html?id=${dados._id}&eventName=${dados.name}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${dados._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${dados._id}" class="btn btn-danger">excluir</a>
        </td>
        </tr>`;
        return linhaEvento;
    })
    return htmlEventos;
}

const eventos = listarEventos().then((lista) => {table.innerHTML += lista.slice(0,2)})