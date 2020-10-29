const express = require("express");
const redis = require("redis");

const client = redis.createClient({
  host: "redis-server", //docker compose
  port: 6379,
});

const app = express();
client.set("number", 0);
app.get("/", async (req, res) => {
  client.get("number", (error, number) => {
    res.send(`${number} ++ `);
    client.set("number", parseInt(number) + 1);
  });
});

app.listen(5050, () => {
  console.log("learning server 5050");
});
