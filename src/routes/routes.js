const routeDefault = 'https://qp-code.herokuapp.com';
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
            url: `${routeDefault}/produto`
        },
        selecionarPorId: {
            method: 'GET',
            url: `${routeDefault}/produto/:id`
        },
        inserir: {
            method: 'POST',
            url: `${routeDefault}/produto`
        },
        alterar: {
            method: 'PUT',
            url: `${routeDefault}/produto/:id`
        },
        excluir: {
            method: 'DELETE',
            url: `${routeDefault}/produto/:id`
        }
    }
};
