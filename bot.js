const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    client.user.setPresence({game: {name: "nsfw help", type: 0}});
    console.log("I am ready!");
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
