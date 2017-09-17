"use strict"
const knex = require("./db");

if (!process.argv[3]) {
    console.log("usage: node hello-knex-8.js <descricao do evento> <data do inicio>");
    process.exit(0);
}

let q = "insert into eventos(descricaoevento,datainicio) values (:descricao,:data)";
let p = {
    descricao: process.argv[2],
    data: process.argv[3]
};

knex.raw(q, p).then(() => {
    console.log(`Evento: ${p.descricao}  Data:  ${p.data} adicionado.`)
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})