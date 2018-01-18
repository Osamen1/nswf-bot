const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js")
exports.run = (client, message, args) => {
    var topics = [
        'cum',
        'cumshot',
        'anal',
        'oral',
        'teen',
        'tits',
        "milf",
        "creampie"
    ]
    const Pornsearch = require('pornsearch').default.search(topics[Math.round(Math.random() * (topics.length - 1))]);
    
    Pornsearch.gifs(1)
    .then(gifs => {
        let gifrnd = gifs.map(gif => gif.url)
        if (message.mentions.users.first()) {
            let embed = new Discord.RichEmbed()
            .setTitle(`**${message.author.username}** fucked ${message.mentions.users.first().username}`)
        } else {
            let embed = new Discord.RichEmbed()
            .setTitle(`**${message.author.username}** wylosował bana :(**`)
            .setColor(0xFFA500)
            message.channel.send({
                embed: embed
            })
        }
    })
}
