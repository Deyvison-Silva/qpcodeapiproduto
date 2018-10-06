const validate = require('../../helpers/validate');

module.exports = {
    inserir,
    selecionarPorId,
    selecionarPorCodBarras,
    alterar,
    excluir
};

async function inserir(params) {
    const validation = {
        nome: {
            required: true
        },
        preco: {
            required: true,
            number: 'integer'
        },
        codBarras: {
            required: true
        }
    };

    await validate(params, validation);
}

async function selecionarPorId(params) {
    const validation = {
        id: {
            required: true
        }
    };

    await validate(params, validation);
}

async function selecionarPorCodBarras(params) {
    const validation = {
        cod: {
            required: true
        }
    };

    await validate(params, validation);
}

async function alterar(params) {
    const validation = {
        id: {
            required: true
        },
        nome: {
            required: true
        },
        preco: {
            required: true,
            number: 'integer'
        },
        codBarras: {
            required: true
        }
    };

    await validate(params, validation);
}

async function excluir(params) {
    const validation = {
        id: {
            required: true
        }
    };

    await validate(params, validation);
}