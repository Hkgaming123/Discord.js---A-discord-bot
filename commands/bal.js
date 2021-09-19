const express = require("express")
const app = express()
const Database = require("@replit/database")
const db = new Database()

app.get("/", (req, res) => {
res.send("Hello hell.")
})

app.listen(3000, () => {
console.log("The project is ready")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "ping") {
    message.channel.send("pong!")
}
if (message.content.toLowerCase().startswith("$bal")) {
let balance = await db.get(`wallet_${message.author.id}`)
}
})

client.login(process.env.TOKEN)