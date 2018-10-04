const service = require('./service');

module.exports = {
    inserir,
    selecionar,
    selecionarPorId,
    alterar,
    excluir
};

async function inserir(req, res) {
    try {
        const params = {
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            codBarras: req.body.codBarras,
        };

        const data = await service.inserir(params);

        res.send({
            content: data
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
}

async function selecionar(req, res) {
    try {
        const params = {
            pesquisa: req.query.pesquisa,
            pagina: req.query.pagina,
            linhas: req.query.linhas,
        };

        const data = await service.selecionar(params);

        res.send({
            content: data
        });
    } catch (error) {
        return res.status(400).json(error);
    }
}

async function selecionarPorId(req, res) {
    try {
        const params = {
            id: req.params.id,
        };

        const data = await service.selecionarPorId(params);

        res.send({
            content: data
        });

    } catch (error) {
        return res.status(400).json(error);
    }
}

async function alterar(req, res) {
    try {
        const params = {
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            codBarras: req.body.codBarras,
        };

        const data = await service.alterar(params);

        res.send({
            content: data
        });

    } catch (error) {
        return res.status(400).json(error);
    }
}

async function excluir(req, res) {
    try {
        const params = {
            id: req.params.id,
        };

        const data = await service.excluir(params);

        res.send({
            content: data
        });

    } catch (error) {
        return res.status(400).json(error);
    }
}