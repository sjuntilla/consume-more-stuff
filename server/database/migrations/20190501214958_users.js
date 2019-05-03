exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("first_name", 50).notNull();
    table.string("last_name", 50).notNull();
    table
      .string("email")
      .unique()
      .notNull();
    table.string("hashedPassword");
    table
      .string("username", 25)
      .unique()
      .notNull();
    table.timestamp("created_at");
    table.timestamp("updated_at");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
