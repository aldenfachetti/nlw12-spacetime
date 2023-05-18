import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "hello world";
});

app
  .listen({
    port: 3030,
  })
  .then(() => {
    console.log("🚀 HTTP server running on http://localhost:3030");
  });
