const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const schoolFiles = fs.readdirSync('./schools').filter(file => file.endsWith('.js'));
const beyondWikiFiles = fs.readdirSync('./beyondwiki').filter(file => file.endsWith('.js'));
const funFiles = fs.readdirSync('./fun').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
for (const file of schoolFiles) {
	const command = require(`./schools/${file}`);
	client.commands.set(command.name, command);
}
for (const file of beyondWikiFiles) {
	const command = require(`./beyondwiki/${file}`);
	client.commands.set(command.name, command);
}
for (const file of funFiles) {
	const command = require(`./fun/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Nice Bot!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) 
        return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) 
        return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}


	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);