exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("task")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {
          project_id: 1,
          description: "Notify Alfred Of Danger",
          completed: false,
        },
        { project_id: 1, description: "Get To The Bat Cave", completed: false },
        { project_id: 1, description: "take Off Tux", completed: false },
        {
          project_id: 1,
          description: "Put on Bat Suit",
          notes: "Remember your pants",
          completed: false,
        },
        { project_id: 1, description: "Hide Lambo", completed: false },
        { project_id: 1, description: "Get In Batmobile", completed: false },
        { project_id: 1, description: "Defeat The Joker", completed: false },
        { project_id: 2, description: "Put On Tux", completed: false },
        { project_id: 2, description: "Get Lambo", completed: false },
        { project_id: 2, description: "Pick Up Rachel", completed: false },
      ]);
    });
};
