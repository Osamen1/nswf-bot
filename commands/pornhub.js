const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const query = args.join(' ')
    if (!query) return message.channel.send("Usage: nsfw.pornhub <search query>")
    const Pornsearch = require('pornsearch').default.search(query);
        Pornsearch.url(1)
            .then(url => {
                let gifrnd = gifs.map(gif => gif.url)
                let embed = new Discord.RichEmbed()
                    .setImage(gifrnd[Math.floor(Math.random() * gifrnd.length)])
                message.channel.send({
                    embed: embed
                })
            })
}
