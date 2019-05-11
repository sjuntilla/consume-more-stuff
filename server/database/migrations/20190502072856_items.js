exports.up = function (knex, Promise) {
  return knex.schema.createTable("items", table => {
    table.increments("id").primary();
    table.integer("user_id").references("users.id");
    table.text('url').nullable();
    table.string("name", 50).notNull();
    table.string("description", 100).notNull();
    table.string("price").notNull();
    table.string("category").notNull();
    table.timestamp("created_at");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("items");
};
