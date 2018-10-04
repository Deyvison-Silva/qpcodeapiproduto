const config = require('./config');
const db = require('pg-promise')()(config);

module.exports = {
    json: async function (query, params) {
        let result = await db.proc(query, params);

        return result ? result[Object.keys(result)[0]] : null;
    },
    query: db.query,
    proc: db.proc,
    func: db.func
};