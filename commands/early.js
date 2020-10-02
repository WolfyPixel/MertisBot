module.exports = {
	name: 'early',
	description: 'early',
	execute(message) {
        message.channel.send( `
        ** What is EA/ED? What's the difference between them? **
https://professionals.collegeboard.org/guidance/applications/early 
        ` );
	},
};

