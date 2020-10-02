const Discord = require('discord.js');
module.exports = {
	name: 'stanford',
	description: 'stanford',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('0x20dfaf')
            .setTitle('Stanford University')
            .setURL('https://apply.commonapp.org/login?ma=327&tref=niche')
        .setThumbnail('https://web.stanford.edu/group/webdev/identity/public/img/block-s-2color.png')
            .addFields(
                { name: `Acceptance Rate`, value: '4%', inline: false },
                { name: `Application Deadline`, value: 'January 3', inline: true },
                { name: `SAT Range`, value: '1420-1570', inline: true},
                { name: `Application Fee`, value: '$90', inline: true },
                { name: `Application Website`, value: 'stanford.edu', inline: true },
                { name: `International student acceptence rate`, value: '3.6%', inline: true },
                { name: `Early action deadline`, value: '1-Nov', inline: true },
                { name: `Undergrad percent international students`, value: '9.20%', inline: true },
                { name: `Early decision deadline`, value: '-', inline: true },
                { name: `International students receiving aid`, value: '188', inline: true },
                { name: `Percent of int'l students receiving aid`, value: '29.1%', inline: true }
            )

        message.channel.send(exampleEmbed);
    }
}
