exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("presenca", (table) => {
        table.increments("idusuario");
        table.string("nomeusuario");
        table.string("episodio");
        table.date("datapresenca");
        table.string("repo");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("presenca");
};