const service = require('./service');

module.exports = {
    inserir,
    selecionar,
    selecionarPorId,
    alterar,
    excluir
};

async function inserir(req, res) {
    const params = {
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao,
        codBarras: req.body.codBarras,
    };
    try {
        await service.inserir(params);

    } catch (error) {
        return res.status(400).json(error);
    }
}

async function selecionar(req, res) {
    const params = {
        pesquisa: req.query.pesquisa,
        pagina: req.query.pagina,
        linhas: req.query.linhas,
    };

    try {
        await service.selecionar(params);

    } catch (error) {
        return res.status(400).json(error);
    }
}

async function selecionarPorId(req, res) {
    const params = {
        id: req.params.id,
    };

    try {
        await service.selecionarPorId(params);

    } catch (error) {
        return res.status(400).json(error);
    }
}

async function alterar(req, res) {
    const params = {
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao,
        codBarras: req.body.codBarras,
    };

    try {
        await service.alterar(params);

    } catch (error) {
        return res.status(400).json(error);
    }
}

async function excluir(req, res) {
    const params = {
        id: req.params.id,
    };

    try {
        await service.excluir(params);

    } catch (error) {
        return res.status(400).json(error);
    }
}