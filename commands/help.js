const Discord = require('discord.js')
const Pagination = require('discord.js-pagination')

module.export.run = async (Client, message, prefix, args) => {
  if(!message.content.startsWith(prefix)) return

  const panel = new discord.MessageEmbed()
  .setTitle('page 1')
  .setDescription('help page 1')
}