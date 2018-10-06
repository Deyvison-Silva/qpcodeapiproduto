const scope = require('./scope');
const repository = require('./repository');

module.exports = {
    inserir,
    selecionar,
    selecionarPorId,
    selecionarPorCodBarras,
    alterar,
    excluir
};

async function inserir(params) {
    await scope.inserir(params);

    return await repository.inserir(params);
}

async function selecionar(params) {
    let data = {};
    data.content = await repository.selecionar(params);

    data.totalLinhas = data.content.length ? data.content[0].totalLinhas : 0;

    data.content.forEach(item => {
        delete item.totalLinhas
    });

    return data;
}

async function selecionarPorId(params) {
    await scope.selecionarPorId(params);

    return await repository.selecionarPorId(params);
}

async function selecionarPorCodBarras(params) {
    await scope.selecionarPorCodBarras(params);

    return await repository.selecionarPorCodBarras(params);
}

async function alterar(params) {
    await scope.alterar(params);

    return await repository.alterar(params);
}

async function excluir(params) {
    await scope.excluir(params);

    return await repository.excluir(params);
}