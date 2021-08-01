
exports.up = function(knex) {
    return knex.schema.createTable("member",(table)=>{
        table.increments("id");
        table.string("fname");
        table.string("lname");
        table.string("tel");
        table.string("email");
        table.string("password")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("member");
};
