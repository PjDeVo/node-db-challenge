exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        { project_name: "Save The City", completed: "false" },
        { project_name: "Go To Dinner", completed: true },
        { project_name: "Marry Rachel", completed: "false" },
      ]);
    });
};
