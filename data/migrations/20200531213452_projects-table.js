exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments("id");
      tbl.string("project_name").notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable();
    })
    .createTable("task", (tbl) => {
      tbl.increments("id");
      tbl.integer("project_id").references("id").inTable("project");
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable();
    })
    .createTable("resources", (tbl) => {
      tbl.increments("id");
      tbl.string("name").notNullable();
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("id"),
        tbl
          .integer("project_id")
          .notNullable()
          .references("id")
          .inTable("project");

      tbl
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources");
    });
};

exports.down = function (knex) {
  return knex.schema

    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};
