const app = require('../../app.js');

let routes;

module.exports = (app) => {
    app.route('/api').get((req, res) =>{
        return res.status(200).send(routes);
    });
};

routes = {
    produto: {
        selecionar: {
            method: 'GET',
            url: `${app.config.host}:${app.config.port}/produto`
        },
        selecionarPorId: {
            method: 'GET',
            url: `${app.config.host}:${app.config.port}/produto/:id`
        },
        inserir: {
            method: 'POST',
            url: `${app.config.host}:${app.config.port}/produto`
        },
        alterar: {
            method: 'PUT',
            url: `${app.config.host}:${app.config.port}/produto/:id`
        },
        excluir: {
            method: 'DELETE',
            url: `${app.config.host}:${app.config.port}/produto/:id`
        }
    }
};
