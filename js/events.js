const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_CIDADE = document.getElementById('cidade');

function atualizarRegioes() {
    let regioes = [
        'Norte',
        'Nordeste',
        'Sul',
        'Sudeste',
        'Centro Oeste',
    ];

    regioes.forEach(cadaRegiao => {
        SELECT_REGIAO.innerHTML += `<option>${cadaRegiao}</option>`;
    });
}

atualizarRegioes();