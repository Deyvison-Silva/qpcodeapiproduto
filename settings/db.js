const databaseConfig = {
    'host': 'ec2-75-101-153-56.compute-1.amazonaws.com',
    'port': 5432,
    'database': 'd8s15m82qkqcvu',
    'user': 'tfubmeriyckmes',
    'password': '886326f49aa0b300fa4444ead8e9f6e2e938c4228ef5011505d4b755e1c4594f',
    'ssl': true,
    'sslfactory': 'org.postgresql.ssl.NonValidatingFactory'
};

const db = require('pg-promise')()(databaseConfig);
// process.env.DATABASE_URL

global.db = {
    json: async function (query, params) {
        let result = await db.proc(query, params);

        return result ? result[Object.keys(result)[0]] : null;
    },
    query: db.query,
    proc: db.proc,
    func: db.func
};