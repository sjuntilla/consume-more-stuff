exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          user_id: 1,
          url: "https://live.staticflickr.com/8094/29604019066_3b0bdf9e2f_b.jpg",
          name: "The mecha keyboard",
          description: "priceless beautiful key caps & theme",
          price: "200",
          category: "equipment",
          created_at: new Date()
        },
        {
          user_id: 2,
          url: "https://live.staticflickr.com/7286/28063245340_c470c3e285_b.jpg",
          name: "Fit Byte",
          description: "track your fitness, diet, & future well being",
          price: "250",
          category: "wellness",
          created_at: new Date()
        },
        {
          user_id: 3,
          url: "https://upload.wikimedia.org/wikipedia/commons/0/04/Kenya_Film_Classification_18.png",
          name: "Sparkly Personal Desk Massager",
          description: "clinically proven & recommended to boost your productivity & mood by relieving stress",
          price: "300",
          category: "office",
          created_at: new Date()
        }
      ]);
    });
};
