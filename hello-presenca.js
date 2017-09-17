const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile);

if (!process.argv[3]) {
    console.log("usage: node hello-presenca.js <nome> <episodio> <data> <repo>");
    process.exit(0);
}

let q = "insert into presenca(nomeusuario,episodio,datapresenca,repo) values (:nome,:episodio,:data,:repo)";
let p = {
    nome: process.argv[2],
    episodio: process.argv[3],
    data: process.argv[4],
    repo: process.argv[5]
};

knex.raw(q, p).then(() => {
    console.log(`Presenca do ${p.nome} contabilizada.`);
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
})