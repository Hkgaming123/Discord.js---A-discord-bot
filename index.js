const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('make your bot 24/7 good innit!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const Discord = require('discord.js')
const client = new Discord.Client
const { Prefix, Token, Color } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = require("quick.db");

client.on("ready", () => {
  console.log(`${client.user.tag} is ready coded by Hkgaming btw`)
  client.user
      .setActivity(`Hkgaming`, { type: "LISTENING" })
    .catch(error => console.log(error));
});

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

    let modules = ["fun", "info", "moderation"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js"
      );
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} Command Has Been Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});


  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`Bot Prefix : ${Prefix}`);
  }
});

//(simple messages)

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})


client.login(process.env.TOKEN)