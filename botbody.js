const Discord = require(`discord.js`);
const Discord = new Discord.Client();
let config = require(`./botconfig.json`);
let token = config.token;
let prefix = config.prefix;

bot.on(`ready`,() => {
    console.log(`Logged here as ${bot.user.username}!`);
    });

bot.on(`message`, msg => {
        if (msg.content === `ping`) {
            msg.reply(`pong!`);
        }
    });
bot.login(token);
