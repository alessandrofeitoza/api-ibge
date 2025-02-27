const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_CIDADE = document.getElementById('cidade');

function atualizarRegioes() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then(res => res.json())
        .then(regioes => {
            regioes = regioes.map(cada => `<option>${cada.nome}</option>`);

            SELECT_REGIAO.innerHTML += regioes;
        });
}

function atualizarEstados() {
    let estados = [
        'Ceará',
        'Maranhão',
        'Paraiba',
    ];

    estados = estados.map(cada => `<option>${cada}</option>`);

    SELECT_ESTADO.innerHTML += estados;
}

function atualizarCidades() {
    let cidades = [
        'Fortaleza',
        'Paracuru',
        'Madalena',
    ];

    cidades = cidades.map(cada => `<option>${cada}</option>`);

    SELECT_CIDADE.innerHTML += cidades;
}

atualizarRegioes(); 