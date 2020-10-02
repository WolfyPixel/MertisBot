const Discord = require('discord.js');
module.exports = {
	name: 'stanfordpercent',
	description: 'stanfordpercent',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('0x20dfaf')
            .setTitle('Stanford University')
            .setURL('https://apply.commonapp.org/login?ma=327&tref=niche')
            .setThumbnail('https://web.stanford.edu/group/webdev/identity/public/img/block-s-2color.png')
            .addFields(
                { name: `ACT English 25%`, value: '32', inline: true },
                { name: `ACT English 75%`, value: '35', inline: false },
                { name: `ACT Math 25%`, value: '30', inline: true},
                { name: `ACT Math 75%`, value: '35', inline: false },
                { name: `ACT Cumulative 25%`, value: '31', inline: true },
                { name: `ACT Cumulative 75%`, value: '35', inline: false },
                { name: `SAT Math 25%`, value: '700', inline: true },
                { name: `SAT Math`, value: '800', inline: false },
                { name: `SAT Reading 25%`, value: '680', inline: true },
                { name: `SAT Reading 75%`, value: '780', inline: false },
                { name: `SAT Composite 25%`, value: '1380', inline: true },
                { name: `SAT Composite 75%`, value: '1580', inline: false }
            )

        message.channel.send(exampleEmbed);
    }
}
