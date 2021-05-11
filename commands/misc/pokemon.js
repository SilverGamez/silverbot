const Discord = require('discord.js');

module.exports = {
    name: 'pokemon',
    description: "Sends a random pokemon gif",
    usage: '?pokemon',
    aliases: ['pm'],
    category: 'misc',
    run: async(client, message, args) => {
        const pokemon = [
            "https://cdn.discordapp.com/attachments/804413104430776320/808505740472877056/bulbasauraww.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808505747834404874/happy.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808505749655388211/jigglypuffwow.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808505738552410172/64e2027739a3d075959471d0e82249ec.jpg",
            "https://cdn.discordapp.com/attachments/804413104430776320/808505754839547944/leafeonhype.png",
            "https://cdn.discordapp.com/attachments/806555243696881743/808762347677024326/1200px-Ash_Pikachu.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808505742717616158/bulbasaurfacepalm.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808762894476640266/crown_eevee.gif",
            "https://cdn.discordapp.com/attachments/804413104430776320/808762904488444034/eevee_hide_crown_cute.gif",
            "https://cdn.discordapp.com/attachments/804413104430776320/808762896322134016/eevee_crown_pet.jpg",
            "https://cdn.discordapp.com/attachments/804413104430776320/808510563826925588/dittoopenmouth.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808510727664435200/mewheart.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808510731942494215/vulpixuwu.png",
            "https://cdn.discordapp.com/attachments/804413104430776320/808505751395368980/jirachiwow.png",
            "https://cdn.discordapp.com/attachments/806555243696881743/808762342150111272/3bddb9fb-8417-42bd-ad68-483047679620.png",
            "https://static.fandomspot.com/images/07/544/38-psyduck-confused.jpg",
            "https://static.fandomspot.com/images/07/544/37-cubone-anime-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/36-chikorita-pokemon-anime.jpg",
            "https://static.fandomspot.com/images/07/544/35-furret-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/34-castform-weather-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/33-clefairy-metrenome.jpg",
            "https://static.fandomspot.com/images/07/544/32-wynaut-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/30-swablu-anime-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/29-sunkern-anime.jpg",
            "https://static.fandomspot.com/images/07/544/28-plusle-minun-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/27-deerling-anime-pokemon.jpg",
            "https://static.fandomspot.com/images/07/544/22-squirtle-pokemon.jpg"
        ]
        const number = Math.floor(Math.random() * (pokemon.length - 1) + 1);
        const embed = new Discord.MessageEmbed()
        .setImage(pokemon[number])
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}