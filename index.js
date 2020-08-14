const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", async function (request, reply) {
  return "hello";
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
