exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          user_id: 1,
          name: "The mecha keyboard",
          description: "priceless beautiful key caps & theme",
          price: "200",
          category: "equipment",
          created_at: new Date()
        },
        {
          user_id: 2,
          name: "Fit Byte",
          description: "track your fitness, diet, & future well being",
          price: "250",
          category: "wellness",
          created_at: new Date()
        },
        {
          user_id: 3,
          name: "Sparkly Personal Desk Massager",
          description: "clinically proven & recommended to boost your productivity & mood by relieving stress",
          price: "300",
          category: "office",
          created_at: new Date()
        }
      ]);
    });
};
