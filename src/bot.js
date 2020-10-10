// imports
if (process.env.NODE_ENV !== "production") {
  // - Checks if environment is profuction or development.
  require("dotenv").config();
}
const { Client } = require("discord.js");

// bot token from env variable
const BOT_TOKEN = process.env.BOT_TOKEN;

// new Client instance
const client = new Client();

client.login(BOT_TOKEN);
// ready event
client.on("ready", () => {
  console.log(`${client.user.tag} Started`);
});
