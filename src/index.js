const Discord  = require("discord.js");
const Commands = require("./commands.js");
const Config   = require("./config.json");
const Bot      = new Discord.Client();

Bot.on('ready', message => {
    console.log("Dila xd");
})

Bot.on('message', message => {
    var args = message.content.split(/[ ]+/);
    
    if(Commands.isCommand("ping", message)) {
        message.channel.sendMessage("pong");
    }
    else if(Commands.isCommand("help", message)) {
        Commands.helpCommand(args, message);
    }
    else if(Commands.isCommand("say", message)) {
        Commands.sayCommand(args, message);
    }
    else if(Commands.isCommand("prefix", message)) {
        Commands.changePrefix(args, message);
    }
    else if(Commands.isCommand("opgg", message)) {
        Commands.opGG(args, message);
    }
    else if(Commands.isCommand("lolskill", message)) {
        Commands.lolskill(args, message);
    }
})

Bot.login(Config.token);