const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_CIDADE = document.getElementById('cidade');

function atualizarRegioes() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then(res => res.json())
        .then(regioes => {
            regioes = regioes.map(cada => `<option value="${cada.id}">${cada.nome}</option>`);

            SELECT_REGIAO.innerHTML += regioes;
        });
}

function atualizarEstados() {
    let id = SELECT_REGIAO.value;

    SELECT_ESTADO.innerHTML = '<option selected disabled> -- Selecione -- </option>';

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`)
        .then(res => res.json())
        .then(estados => {
            estados = estados.map(cada => `<option value="${cada.id}">${cada.nome}</option>`);

            SELECT_ESTADO.innerHTML += estados;
        });
}

function atualizarCidades() {
    let id = SELECT_ESTADO.value;

    SELECT_CIDADE.innerHTML = '<option selected disabled>   Carregando... </option>';

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`)
        .then(res => res.json())
        .then(cidades => {
            SELECT_CIDADE.innerHTML = '<option selected disabled> -- Selecione -- </option>';

            cidades = cidades.map(cada => `<option>${cada.nome}</option>`);

            SELECT_CIDADE.innerHTML += cidades;
        });
}

atualizarRegioes(); 