"use strict"
const knex = require("./db");

knex.schema.createTable("eventos", (table) => {
    table.increments("ideventos").primary();
    table.string("descricaoevento").notNullable();
    table.date("datainicio").notNullable();
}).then(() => {
    console.log("tabela criada");
    process.exit(0);
}).catch((err) => {
    console.log(err);
    process.exit(1);
});