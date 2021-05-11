module.exports = async(client) => {
    const guild = client.guilds.cache.get('826735471764701225');
    const channel = guild.channels.cache.get('827056607677382686');

    setInterval(() => {
        channel.setName(`└Server Count: ${client.guilds.cache.size.toString()}`)
    }, 5000)
}