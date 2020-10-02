const Discord = require('discord.js');
module.exports = {
	name: 'harvard',
	description: 'harvard',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('0x20dfaf')
            .setTitle('Harvard University')
            .setURL('http://college.harvard.edu/admissions/application-process/application-requirements')
            .setThumbnail('http://1000logos.net/wp-content/uploads/2017/02/Harvard-symbol.jpg')
            .addFields(
                { name: `Acceptance Rate`, value: '5%', inline: false },
                { name: `Application Deadline`, value: 'January 1', inline: true },
                { name: `SAT Range`, value: '1460-1580', inline: true},
                { name: `Application Fee`, value: '$75', inline: true },
                { name: `Application Website`, value: 'college.harvard.edu', inline: true },
                { name: `International student acceptence rate`, value: '24.8%', inline: true },
                { name: `Early action deadline`, value: '1-Nov', inline: true },
                { name: `Undergrad percent international students`, value: '2.00%', inline: true },
                { name: `Early decision deadline`, value: '-', inline: true },
                { name: `International students receiving aid`, value: '75', inline: true },
                { name: `Percent of int'l students receiving aid`, value: '54.0%', inline: true }
            )

        message.channel.send(exampleEmbed);
    }
}
