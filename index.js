// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
    console.log(client.user.tag +" is now online!");
});

client.on('message', async msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const args = msg.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'guide') {
        msg.channel.send('https://git.io/d.js-heroku');
    }
    if (command === 'invite') 
        msg.channel.send(process.env.INVITE);
    }
    if (command === 'ping') {
      const pingMessage = await msg.channel.send("Just a second...");
      pingMessage.edit(":ping_pong: | Pong! `"+ pingCommand.createdTimestamp - msg.createdTimestamp +"`ms.");
    }
    if (command === 'say') {
        const textToSay = args.join(' ');
        const replacePing = textToSay.replace("@", "`@`");
        textToSay = replacePing;
        msg.channel.send(`<@${msg.author.id> ${textToSay}`);
    }
        
});

client.login(process.env.TOKEN);

