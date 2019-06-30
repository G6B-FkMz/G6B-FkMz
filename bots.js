const config = require('./config')
const fs = require('fs')

const Discord = require('discord.js')
const bot = new Discord.Client()

let rules = fs.readFileSync('./rules.md', 'utf8')

bot.on('message', ({ author, guild, content }) => {
  if (guild || author.id !== config.adminId) return
  fs.writeFile('./rules.md', rules = content, err => author.send(err
    ? `Erreur en changeant les regles: \`${err.message}\``
    : `regles mises a jour !`))
})

bot.on('guildMemberAdd', ({ user, guild }) => {
  guild.defaultChannel.sendMessage(`:dragon: Bienvenue à toi sur le Discord de **__L'Ordre des Schlags__** <@${user.id}>! Je t'invite à lire les **règles** du serveur ainsi que le **mode d'emploi de Discord** dans le chan ***__#infos__***, à te présenter dans le salon ***__#general___*** et faire connaissance avec tout le monde ! :dragon:`)
  user.send(rules).catch(console.error)
})

bot.login(config.botToken)