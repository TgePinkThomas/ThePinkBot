const Discord = require('discord.js');

const client = new Discord.Client();
 
const prefix = '*';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('ThePinkBot is online!');
});

 
client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'vonok'){

        client.commands.get('vonok').execute(message, args, Discord);
    } 
});

client.login("ODI3NDk3MTM2MTE4NTYyODI3.YGb4ww.FVuCd5RjqAf3VEp5QLs8Rpwrbog");
