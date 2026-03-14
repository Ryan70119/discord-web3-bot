const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const TOKEN = "YOUR_DISCORD_BOT_TOKEN";

client.on("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.content === "!price") {

    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";
    const response = await fetch(url);
    const data = await response.json();

    message.reply(
      `BTC: $${data.bitcoin.usd}\nETH: $${data.ethereum.usd}`
    );
  }
});

client.login(TOKEN);
