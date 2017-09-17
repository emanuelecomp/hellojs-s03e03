const knexfile = require('./knexfile')['development']
const knex = require('knex')(knexfile)

if (!process.argv[2]) {
    console.log('usage: node cademeucatiro.js <nome>');
    process.exit(0);
}

knex('cachorro').select().where({
    nomecachorro: process.argv[2]
}).then((ret) => {
    console.log(ret[0].nomecachorro + " encontrado");
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
})