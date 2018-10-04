const service = require('./service');

module.exports = {
    inserir
};

async function inserir(req, res) {
    const params = {
        teste: req.body.teste
    };
    try {
        await service.inserir(params);

    } catch (error) {
        return res.status(400).json(error)
    }
}