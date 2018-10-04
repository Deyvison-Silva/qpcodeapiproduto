const validate = require('../../helpers/validate');

module.exports = {
    inserir,
    selecionar,
    selecionarPorId,
    alterar,
    excluir
};

async function inserir(params) {
    await validate(params);
}

async function selecionar(params) {
    await validate(params);
}

async function selecionarPorId(params) {
    await validate(params);
}

async function alterar(params) {
    await validate(params);
}

async function excluir(params) {
    await validate(params);
}