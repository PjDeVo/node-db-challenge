const express = require("express");
const helmet = require("helmet");
const db = require("./data/db-config.js");

const app = express();
app.use(helmet());
app.use(express.json());

app.get("/api/projects", (req, res) => {
  db("project")
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/api/resources", (req, res) => {
  db("resources")
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/api/resources", (req, res) => {
  db("resources")
    .insert(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    });
});

app.post("/api/projects", (req, res) => {
  db("project")
    .insert(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((error) => {
      console.log(error);
    });
});
// app.get("/api/tasks", (req, res) => {
//   db("task")
//     .leftJoin("project")
//     .orderBy("project_id")
//     .then((resources) => {
//       res.status(200).json(resources);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

app.get("/api/tasks", (req, res) => {
  db("task")
    .leftJoin("project as p")
    .select(
      "task.id",
      " task.description",
      "task.completed",
      "p.project_name",
      "p.description"
    )
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = app;
