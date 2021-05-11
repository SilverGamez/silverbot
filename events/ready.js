const colours = require('colors');
const servercount = require('../counters/server-count');

module.exports.run = async(client) => {
    var guildcount = client.guilds.cache.size
    client.user.setActivity(`${guildcount} servers!`, {type: 'WATCHING'})
    console.log(colours.red('┎━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'))
    console.log(colours.rainbow(`┣          Watching over ${guildcount} servers!          ┥`))
    console.log(colours.green('┣  Succesfully Loaded And deployed Bot!       ┥'))
    console.log(colours.magenta('┖━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'))
    servercount(client)
}