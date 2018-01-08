const Discord = require("discord.js");
const client = new Discord.Client();

//----------------------------------------------
var token = "Mzk5OTI3Nzg3NTc1NzA1NjEx.DTUNVw.ZkzQDN4EOslVPJexWD8p03Cx7Lo"
var prefix = "nsfw "
var discordbotsorgtoken = ""
var discordpwtoken = ""
//----------------------------------------------

client.on("ready", () => {
    client.user.setPresence({game: {name: "nsfw help", type: 0}});
    console.log("I am ready!");
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
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
