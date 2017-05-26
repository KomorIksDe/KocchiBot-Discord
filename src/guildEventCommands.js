exports.greetNewMember = function(member, prefix) {
    console.log("2");
    member.guild.defaultChannel.sendMessage("Welcome to our guild, " + member.username + "! Type " + prefix + "help to know what ");
}

exports.gotBanned = function(guild, user) {
    guild.defaultChannel.sendMessage(user.username + " just got banned!");
    user.send("Sorry, I had to");
}

exports.gotUnbanned = function(guild, user) {
    guild.defaultChannel.sendMessage(user.username + " just got unbanned!");
}