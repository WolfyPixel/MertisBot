const Discord = require('discord.js');
module.exports = {
	name: 'harvardpercent',
	description: 'harvardpercent',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('0x20dfaf')
            .setTitle('Harvard University')
            .setURL('http://college.harvard.edu/admissions/application-process/application-requirements')
            .setThumbnail('http://1000logos.net/wp-content/uploads/2017/02/Harvard-symbol.jpg')
            .addFields(
                { name: `ACT English 25%`, value: '33', inline: true },
                { name: `ACT English 75%`, value: '35', inline: false },
                { name: `ACT Math 25%`, value: '31', inline: true},
                { name: `ACT Math 75%`, value: '35', inline: false },
                { name: `ACT Cumulative 25%`, value: '32', inline: true },
                { name: `ACT Cumulative 75%`, value: '35', inline: false },
                { name: `SAT Math 25%`, value: '720', inline: true },
                { name: `SAT Math`, value: '800', inline: false },
                { name: `SAT Reading 25%`, value: '710', inline: true },
                { name: `SAT Reading 75%`, value: '800', inline: false },
                { name: `SAT Composite 25%`, value: '1430', inline: true },
                { name: `SAT Composite 75%`, value: '1600', inline: false }
            )

        message.channel.send(exampleEmbed);
    }
}
