const Discord  = require("discord.js");
const Message  = require("./messageEventCommands.js");
const Guild    = require("./guildEventCommands.js");
const Config   = require("./config.json");
const Bot      = new Discord.Client();

var servers = {};

Bot.on('ready', message => {
    console.log("Ready!");
    Bot.user.setGame("Say " + Config.prefix + "help");
})

Bot.on('message', message => {
    var args = message.content.split(/[ ]+/);
    
    if(Message.isCommand("ping", message)) {
        message.channel.sendMessage("pong");
    }
    else if(Message.isCommand("help", message)) {
        Message.helpCommand(args, message);
    }
    else if(Message.isCommand("say", message)) {
        if(message.author.id !== Config.adminid)
            message.channel.sendMessage("Only my creator can use this command.")
        else
            Message.sayCommand(args, message);
    }
    else if(Message.isCommand("prefix", message)) {
        Message.changePrefix(args, message);
    }
    else if(Message.isCommand("opgg", message)) {
        Message.opgg(args, message);
    }
    else if(Message.isCommand("lolskill", message)) {
        Message.lolskill(args, message);
    }
    else if(Message.isCommand("hentai", message)) {
        Message.hentai(args, message);
    }
    else if(Message.isCommand("gbay99", message)) {
        Message.gbay99(args, message);
    }
    else if(Message.isCommand("8ball", message)) {
        Message.eball(args, message);
    }
    else if(Message.isCommand("role", message)) {
        Message.role(args, message);
    }
})

Bot.on('guildMemberAdd', member => {
    console.log("1");
    Guild.greetNewMember(member, Config.prefix);
})

Bot.on('guildBanAdd', (guild, user) => {
    Guild.gotBanned(guild, user);
})

Bot.on('guildBanRemove', (guild, user) => {
    Guild.gotUnbanned(guild, user);
})

Bot.login(Config.token);





























