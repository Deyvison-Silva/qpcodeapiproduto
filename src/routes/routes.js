const produto = require('../core/produto/controller');

module.exports = (app) => {
    app.route('/exemplo')
        .post(produto.inserir)
};
