module.exports = {
	name: 'myuni',
	description: 'myuni',
	guildOnly: true,
	execute(message, args) {
        const unis = ["ENU", "NU"];

        message.reply(`*The university of your dream* is **${unis[Math.floor(Math.random() * unis.length)]}**!`);
	}
};