module.exports = {
	name: 'findoc',
	description: 'findoc',
	execute(message) {
        message.channel.send( ` ** What documents do I need to submit when I apply for aid? **
        Schools will have a checklist that shows all the documents you need to submit to be considered for financial aid either in their portal or in IDOC (a platform to upload sensitive documents for college).` );
	},
};