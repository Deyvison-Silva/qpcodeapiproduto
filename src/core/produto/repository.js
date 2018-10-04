module.exports = {
    inserir
};

async function inserir(params) {
    return db.func('Nome.Procedure',[
        params.teste
    ]);
}