const Discord = require('discord.js');
module.exports = {
	name: 'upennpercent',
	description: 'upennpercent',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('0x20dfaf')
            .setTitle('University of Pennsylvania')
            .setURL('http://www.admissions.upenn.edu/apply/')
            .setThumbnail('https://branding.web-resources.upenn.edu/sites/default/files/UniversityofPennsylvania_FullLogo_RGB_0.png')
            .addFields(
                { name: `ACT English 25%`, value: '32', inline: true },
                { name: `ACT English 75%`, value: '35', inline: false },
                { name: `ACT Math 25%`, value: '30', inline: true},
                { name: `ACT Math 75%`, value: '35', inline: false },
                { name: `ACT Cumulative 25%`, value: '32', inline: true },
                { name: `ACT Cumulative 75%`, value: '35', inline: false },
                { name: `SAT Math 25%`, value: '700', inline: true },
                { name: `SAT Math`, value: '800', inline: false },
                { name: `SAT Reading 25%`, value: '680', inline: true },
                { name: `SAT Reading 75%`, value: '770', inline: false },
                { name: `SAT Composite 25%`, value: '1380', inline: true },
                { name: `SAT Composite 75%`, value: '1570', inline: false }
                
            )

        message.channel.send(exampleEmbed);
    }
}
