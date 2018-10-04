const validate = require('../../helpers/validate');

module.exports = {
    inserir
};

async function inserir(params) {
    await validate(params);
}