exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          user_id: 1,
          name: "The mecha keyboard",
          price: "priceless"
        },
        {
          user_id: 1,
          name: "Fit Byte",
          price: "10 watermelons"
        },
        {
          user_id: 1,
          name: "sexy techie",
          price: "$1.00"
        }
      ]);
    });
};
