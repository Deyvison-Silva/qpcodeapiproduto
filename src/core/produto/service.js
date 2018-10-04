const scope = require('./scope');
const repository = require('./repository');

module.exports = {
    inserir,
    selecionar,
    selecionarPorId,
    alterar,
    excluir
};

async function inserir(params) {    
    try {
        await scope.inserir(params);
        
        return await repository.inserir(params);
    } catch (error) {
        return res.status(400).json(error)
    }    
}

async function selecionar(params) {
    try {
        await scope.selecionar(params);

        return await repository.selecionar(params);
    } catch (error) {
        return res.status(400).json(error)
    }
}

async function selecionarPorId(params) {
    try {
        await scope.selecionarPorId(params);

        return await repository.selecionarPorId(params);
    } catch (error) {
        return res.status(400).json(error)
    }
}

async function alterar(params) {
    try {
        await scope.alterar(params);

        return await repository.alterar(params);
    } catch (error) {
        return res.status(400).json(error)
    }
}

async function excluir(params) {
    try {
        await scope.excluir(params);

        return await repository.excluir(params);
    } catch (error) {
        return res.status(400).json(error)
    }
}