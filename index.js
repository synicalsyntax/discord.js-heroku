// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'guide') {
        msg.channel.send('https://git.io/d.js-heroku');
    }
    if (command === 'invite') 
        msg.channel.send(process.env.INVITE);
    }
    if (command === 'ping') {
      const pingMessage = await message.channel.send("Just a second...");
      pingMessage.edit(":ping_pong: | Pong! `"+ pingCommand.createdTimestamp - message.createdTimestamp +"`ms.");
    }
});

client.login(process.env.TOKEN);
