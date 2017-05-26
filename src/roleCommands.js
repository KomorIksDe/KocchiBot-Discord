exports.createOption = function(arg, msg) {
    if(msg.guild.roles.find("name", arg)) {
        msg.channel.sendMessage("Role with that name already exists");
    } 
    else {
        msg.guild.createRole({
            name: arg
        });
        
        msg.channel.sendMessage("Successfully created a new \"" + arg + "\" role!");
    }
}

exports.deleteOption = function(arg, msg) {
    let role = msg.guild.roles.find("name", arg);
            
    if(!role) {
        msg.channel.sendMessage("There's no such a role!");
    }
    else {
        role.delete();
        msg.channel.sendMessage("Successfully deleted \"" + arg + "\" role!");
    }
}

exports.setColorOption = function(args, msg) {
    let role = msg.guild.roles.find("name", args[0]);
    
    if(!role) {
        msg.channel.sendMessage("There's no such a role!");
    }
    else {
        role.setColor(args[1]);
        msg.channel.sendMessage("Successfully changed role's color!");
    }
}

exports.setNameOption = function(args, msg) {
    if(msg.guild.roles.find("name", args[1])) {
        msg.channel.sendMessage("Role with that name already exists");
    }
    else {
        msg.guild.roles.find("name", args[0]).setName(args[1]);
        msg.channel.sendMessage("Successfully changed role's name!");
    }
}

exports.setVisibleOption = function(arg, msg) {
    let role = msg.guild.roles.find("name", arg);
    
    if(!role) {
        msg.channel.sendMessage("There's no such a role!");
    }
    else {
        role.setHoist(!role.hoist);
        msg.channel.sendMessage("Channel's visibility has been changed!");
    }
}

exports.addOption = function(arg, msg) {
    let role   = msg.guild.roles.find("name", arg);
    let member = msg.guild.member(msg.mentions.users.first());
    
    if(!role) {
        msg.channel.sendMessage("There's no such a role!");
    }
    else if(!member) {
        msg.channel.sendMessage("This user isn't in this guild!");
    }
    else {
        member.addRole(role);
        msg.channel.sendMessage("User has been added to the role!");
    }
}

exports.removeOption = function(arg, msg) {
    let role   = msg.guild.roles.find("name", arg);
    let member = msg.guild.member(msg.mentions.users.first());
    
    if(!role) {
        msg.channel.sendMessage("There's no such a role!");
    }
    else {
        member.removeRole(role);
        msg.channel.sendMessage("User has been removed from the role!");
    }
}

exports.helpOption = function(prefix, msg) {
    msg.channel.sendMessage("Usage of " + prefix + "role: \r\n\n`" + prefix + "role [name] [option] <argument>` \r\n\nRole management. [name] is the role's name. Options with arguments: \r\n`create` - creates a new role \r\n`delete` - deletes a role \r\n`visible` - switches role's visibility \r\n`setcolor <color>` - changes role's color, which must be given in #RGB format \r\n`setname <name>` - changes role's name \r\n`add <user mention>` - adds a user to the role by MENTIONING him (@) \r\n`remove <user mention>` - removes a user from the role by MENTIONING him(@) \r\n\nFor example: `" + prefix + "role foo setcolor #FF0000` will change foo's color to red");
}












