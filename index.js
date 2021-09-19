const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const Discord = require('discord.js')
const client = new Discord.Client

client.on("ready", () => {
  console.log(`Bot is ready thanks to replit.it`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})

if (command === 'embed') {
  const embed = new Discord.MessageEmbed()
  .setTitle("HELLO")
  .setDescription("Description")
  .setColor("GREEN")
  .setImage("https://wallpaperaccess.com/full/526285.jpg")
  .setAuthor("Author", "https://wallpaperaccess.com/full/526285.jpg")
  .setFooter("footer")
  .setTimeStamp()

  message.channel.send(embed)
  
}

client.login(process.env.TOKEN)