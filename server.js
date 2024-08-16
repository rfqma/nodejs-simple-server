require("dotenv").config();

const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;

const createServerArgument = (request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  fs.createReadStream("index.html").pipe(response);
};

const server = http.createServer(createServerArgument);

server.listen(PORT);
console.log(`🚀 server running on port ${PORT}`);
