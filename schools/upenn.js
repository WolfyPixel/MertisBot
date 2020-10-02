const Discord = require('discord.js');
module.exports = {
	name: 'upenn',
	description: 'upenn',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('0x20dfaf')
            .setTitle('University of Pennsylvania')
            .setURL('http://www.admissions.upenn.edu/apply/')
            .setThumbnail('https://branding.web-resources.upenn.edu/sites/default/files/UniversityofPennsylvania_FullLogo_RGB_0.png')
            .addFields(
                { name: `Acceptance Rate`, value: '8%', inline: false },
                { name: `Application Deadline`, value: 'January 1', inline: true },
                { name: `SAT Range`, value: '1420-1550', inline: true},
                { name: `Application Fee`, value: '$75', inline: true },
                { name: `Application Website`, value: 'upenn.edu', inline: true },
                { name: `International student acceptence rate`, value: '-', inline: true },
                { name: `Early action deadline`, value: '-', inline: true },
                { name: `Undergrad percent international students`, value: '12.60%', inline: true },
                { name: `Early decision deadline`, value: '1-Nov', inline: true },
                { name: `International students receiving aid`, value: '329', inline: true },
                { name: `Percent of int'l students receiving aid`, value: '26.1%', inline: true }
            )

        message.channel.send(exampleEmbed);
    }
}
