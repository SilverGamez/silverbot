const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    description: "Tells the weather for a location",
    usage: '?weather <location>',
    aliases: ['w'],
    category: 'info',
    run: async(client, message, args) => {
        if(!args) return message.channel.send(noResults)
        
        weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
            if(error) return message.channel.send(error)

            if(result === undefined || result.length === 0) return message.channel.send(noResults)

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x111111)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', 'Celsius', true)
            .addField('Temperature', `${current.temperature}C°`, true)
            .addField('Wind', current.winddisplay, true)
            .addField('Feels like', `${current.feelslike}C°`, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .setFooter('Want degrees to be in fahrenheit? Type ?convert <celecuis degrees>')
    
            message.channel.send(weatherinfo)
        })
    }
}