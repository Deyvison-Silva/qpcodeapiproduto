const produto = require('../core/produto/controller');

module.exports = (app) => {
    app.route('/produto')
        .post(produto.inserir)
        .get(produto.selecionar);

    app.route('/produto/:id')
        .get(produto.selecionarPorId)
        .put(produto.alterar)
        .delete(produto.excluir);
};
