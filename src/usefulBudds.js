exports.isServer = function(str) {
    var servers = ["eune", "euw", "na", "kr"];
    
    for(var i = 0; i < servers.length; i++) {
        if(str.toLowerCase() === servers[i])
            return true;
    }
    
    return false;
}