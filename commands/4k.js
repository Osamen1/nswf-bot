const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
exports.run = (client, message, args) => {
    if (message.channel.porno) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'NSFW4k',
        '4kPorn',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
                request.get(url).then(r => {               
                    fs.writeFile(`${randomname}.jpg`)
                    message.channel.send(url).then(d => {
                    })
            })
        })
}
