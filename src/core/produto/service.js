const scope = require('.//scope');
const repository = require('.//repository');

module.exports = {
    inserir
};

async function inserir(params) {    
    try {
        await scope.inserir(params)
        
        return await repository.inserir(params);
    } catch (error) {
        return res.status(400).json(error)
    }    
}