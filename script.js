const http = require("http");
const server = http.createServer((req, res) => {
  res.write("My Name Is Ogunsola Solomon");
  res.end();
});

server.listen("5000", null, null, () => {
  console.log("Server is running at port 5000");
});
