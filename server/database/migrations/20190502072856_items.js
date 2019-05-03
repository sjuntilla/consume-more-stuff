exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", table => {
    table.increments("id").primary();
    table.integer("user_id").references("users.id");
    table.string("name", 25).notNull();
    table.string("price").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
