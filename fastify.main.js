const fastify = require("fastify")({
    logger: false,
});

fastify.get("/", function (request, reply) {
    reply.send({hello: "world"});
});

let count = 0;

fastify.post("/", function (request, reply) {
    count += 1;
    if (count % 1000 == 0) {
        console.log(count);
    }

    reply.send({success: "world"});
});

let host = "0.0.0.0";
// host = '127.0.0.1'
fastify.listen(process.env.PORT || 3000, host, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
