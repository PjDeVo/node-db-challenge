const server = require("./server.js");

const port = 5000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
