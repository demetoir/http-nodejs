const HyperExpress = require("hyper-express");
const webserver = new HyperExpress.Server();

let count = 0;

webserver.get("/", (request, response) => {
    count += 1;
    if (count % 1000 == 0) {
        console.log(count);
    }

    response.send("Hello World");
});
webserver.post("/", (request, response) => {
    count += 1;
    if (count % 1000 == 0) {
        console.log(count);
    }

    response.json({ success: true });
});

webserver
    .listen(process.env.PORT || 3000)
    .then((socket) => console.log("Webserver started on port 80"))
    .catch((error) => console.log("Failed to start webserver on port 80"));
