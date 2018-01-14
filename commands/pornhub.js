const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const query = args.join(' ')
    if (!query) return message.channel.send("Usage: nsfw.pornhub <search query>")
    const Pornsearch = require('pornsearch').default.search(query);
        Pornsearch.gifs(1)
            .then(url => {
                var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
                request.get(url).then(r => {               
                    fs.writeFile(`${randomname}.gif`)
                    message.channel.send(url).then(d => {
                    })
            })
        })
}
