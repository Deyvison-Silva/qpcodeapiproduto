const db = require('../../../settings/db');

module.exports = {
    inserir,
    selecionar,
    selecionarPorId,
    selecionarPorCodBarras,
    alterar,
    excluir
};

async function inserir(params) {
    return db.func('Administrativo.InserirProduto',[
        params.nome,
        params.preco,
        params.descricao,
        params.codBarras
    ]);
}

async function selecionar(params) {
    return db.func('Administrativo.ListarProduto',[
        params.pesquisa,
        params.pagina,
        params.linhas
    ]);
}

async function selecionarPorId(params) {
    return db.func('Administrativo.ListarProdutoPorId',[
        params.id,
    ]);
}

async function selecionarPorCodBarras(params) {
    return db.func('Administrativo.ListarProdutoPorCodBarras',[
        params.cod,
    ]);
}

async function alterar(params) {
    return db.func('Administrativo.AlterarProduto',[
        params.id,
        params.nome,
        params.preco,
        params.descricao,
        params.codBarras
    ]);
}

async function excluir(params) {
    return db.func('Administrativo.ExcluirProduto',[
        params.id
    ]);
}