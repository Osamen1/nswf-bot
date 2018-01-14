const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const fs = require("fs")
const subreddits = [
    "nsfw",
    "porn",
    "BonerMaterial",
    "adorableporn",
    "nsfw2",
    "Sexy",
    "NSFW_nospam"
]
        var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(sub)
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`${randSubreddit}`)
                    .setDescription(`[Image URL](${url})`)   
                    .setImage(url)
                    .setColor('#CEA0A6');
                return message.channel.send({ embed });
            })
    }
}
