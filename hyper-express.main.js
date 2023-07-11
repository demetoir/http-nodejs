const HyperExpress = require("hyper-express");
const webserver = new HyperExpress.Server();

let count = 0;

webserver.get("/", (request, response) => {
    response.send("Hello World");

    count += 1;
    if (count % 1000 == 0) {
        console.log(count);
    }
});

webserver.post("/reset", (request, response) => {

    response.json({success: true});

    count = 0
});

webserver.post("/", (request, response) => {

    response.json({success: true});

    count += 1;
    if (count % 1000 == 0) {
        console.log(count);
    }

});

webserver
    .listen(process.env.PORT || 3000)
    .then((socket) => console.log("Webserver started on port 80"))
    .catch((error) => console.log("Failed to start webserver on port 80"));
