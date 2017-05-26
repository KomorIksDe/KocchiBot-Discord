const Budds  = require("./usefulBudds.js");
const Config = require("./config.json");
const fs     = require("fs");

var prefix = Config.prefix;

exports.isCommand = function(str, msg) {
    return msg.content.toLowerCase().startsWith(prefix + str);
}

exports.sayCommand = function(args, msg) {
    if(args.length === 1) {
         msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
     }
     else {
         if(args[1] === "/?") {
             msg.channel.sendMessage("Usage of " + prefix +"say:\r\n\n`" + prefix +"say [text to show]`\r\nUse it to make the bot repeat something after you.\r\nFor example: `" + prefix + "say papiesz xd` will print out \"papiesz xd\"");
         }
         else {
             var answer = "";

             for(var i = 1; i < args.length; i++)
                 answer += args[i] + " ";

             msg.channel.sendMessage(answer);
         }
     }    
}

exports.helpCommand = function(args, msg) {
    if(args.length !== 1) {
        if(args.length === 2) {
            if(args[1] === "/?") {
                msg.channel.sendMessage("Usage of " + prefix + "help: \r\n\n`" + prefix + "help` \r\nPrints out the info about bot's usage.");
            }
            else {
                msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
            }
        }
        else {
            msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
        }
    }
    else {
        msg.channel.sendMessage("Later, there'll be some sort of instruction");
    }
}

exports.changePrefix = function(args, msg) {
    if(args.length !== 2) {
        msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.")
    }
    else {
        if(args[1] === "/?") {
            msg.channel.sendMessage("Usage of " + prefix + "prefix: \r\n\n`" + prefix + "prefix [new prefix]` \r\nUse it to change the character that you put at the start of every command \r\nFor example: `" + prefix + "prefix -` will change the prefix to '-'");
        }
        else {
            var jFile = JSON.parse(fs.readFileSync("config.json").toString());

            jFile.prefix = args[1];
            fs.writeFile("config.json", JSON.stringify(jFile));

            msg.channel.sendMessage("You've successfully changed my prefix! Now to use commands, you gotta use \"" + args[1] + "\" instead of \"" + prefix + "\".");
            prefix = args[1];
        }
    }
}

exports.opgg = function(args, msg) {
    if(args.length === 1 || args.length > 3) {
        msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
    }
    else if(args[1] === "/?") {
        msg.channel.sendMessage("Usage of " + prefix + "opgg: \r\n\n`" + prefix + "opgg [server] [nickname]` \r\nUse it to check someone's op.gg profile. Avaliable servers: \r\n`-EUNE \r\n-EUW \r\n-NA \r\n-KR` \r\nRest doesn't matter. \r\nFor example: `" + prefix + "opgg eune xd` will give you the link to xd's profile on EUNE. I don't care if it doesn't exists.");
    }
    else if(args.length === 3){
        if(!Budds.isServer(args[1])) {
            msg.channel.sendMessage("Wrong syntax: second piece must be a server from the list (/?)!");
        }
        else {
            var server   = args[1];
            var nickname = args[2];
            
            msg.channel.sendMessage("https://" + server + ".op.gg/summoner/userName=" + nickname);
        }
    }
    else {
        msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
    }
}

exports.lolskill = function(args, msg) {
    if(args.length === 1 || args.length > 4) {
        msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
    }
    else if(args.length === 2) {
        if(args[1] === "/?") {
            msg.channel.sendMessage("Usage of " + prefix + "lolskill: \r\n\n`" + prefix + "lolskill [server] [nickname] [option]` \r\nUse it to to check someone's LolSkill profile or game. Avaliable servers: \r\n`-EUNE \r\n-EUW \r\n-NA \r\n-KR` \r\nRest doesn't matter. \r\nAvaliable options: \r\n`-game` - game info \r\n`-summoner` - profile info \r\nFor example: `" + prefix + "lolskill eune xd game` will give you a link to xd's current game on EUNE. I don't care if it doesn't exists.");
        }
        else {
            msg.channel.sendMessage("Invalid usage of command! Use /? for info of how to use it.");
        }
    }
    else if(args.length === 4) {
        if(!Budds.isServer(args[1])) {
            msg.channel.sendMessage("Wrong syntax: second piece must be a server from the list (/?)!");
        }
        else if(args[3].toLowerCase() !== "game" && args[3].toLowerCase() !== "summoner") {
            msg.channel.sendMessage("Wrong syntax: forth piece must be either \"game\" or \"profile\" (/?)!");
        }
        else {
            var server   = args[1];
            var nickname = args[2];
            var option   = args[3];
            
            msg.channel.sendMessage("http://www.lolskill.net/" + option + "/" + server + "/" + nickname);
        }
    }
}

exports.hentai = function(args, msg) {
    if(args.length > 1) {
        if(args[1] === "/?")
            msg.channel.sendMessage("Usage of " + prefix + "hentai: \r\n\n`" + prefix + "hentai` \r\nReturns random hentai image");
    }
    else {
        var path = 'D:\\KocchiBot\\imgs';
        
        switch(Math.floor(Math.random() * 5) + 1) {
            case 1:
                path += "\\kanna1.png";
                break;
            case 2:
                path += "\\houtarou1.png";
                break;
            case 3:
                path += "\\emilia1.png";
                break;
            case 4:
                path += "\\felix1.png";
                break;
            case 5:
                path += "\\seba.png";
                break;
        }
        
        msg.channel.sendMessage(" ", {
            file: path
        });
    }
}

exports.gbay99 = function(args, msg) {
    if(args.length > 1) {
        if(args[1] === "/?")
            msg.channel.sendMessage("Usage of " + prefix + "gbay99: \r\n\n`" + prefix + "gbay99` \r\nReturns daily gbay99");
    }
    else {
        var path = 'D:\\KocchiBot\\imgs';
        
        switch(Math.floor(Math.random() * 4) + 1) {
            case 1:
                path += "\\gbay91.png";
                break;
            case 2:
                path += "\\gbay92.png";
                break;
            case 3:
                path += "\\gbay93.png";
                break;
            case 4:
                path += "\\gbay94.png";
                break;
        }
        
        msg.channel.sendMessage(" ", {
            file: path
        });
    }
}

exports.eball = function(args, msg) {
    if(args.length === 1) {
        msg.channel.sendMessage("You could've asked me something at least...");
    }
    else if(args[1] === "/?") {
        msg.channel.sendMessage("Usage of " + prefix + "8ball: \r\n\n`" + prefix + "8ball` \r\nReturns an answer to your question");
    }
    else {
        var answers = [
            "Yes",
            "No",
            "Maybe",
            "xdddDXdxddd"
        ];
        
        msg.channel.sendMessage(answers[Math.floor(Math.random() * answers.length)]);
    }
}















