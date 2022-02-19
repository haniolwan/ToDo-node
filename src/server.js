const http = require("http");

const router = require("./router");

const server = http.createServer(router);

server.listen(3000, "localhost", () => {
    console.log("Server is running at http://localhost:3000");
});