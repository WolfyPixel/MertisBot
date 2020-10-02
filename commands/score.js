module.exports = {
	name: 'score',
	description: 'score',
	execute(message) {
        message.channel.send( ` ** I got an X score— am I good for these colleges? **
    A good way to gauge how competitive you are for X university is to check what percentile your standardized scores fall into. However, admission is not assured even if you’re in a university’s 99th percentile since US admissions are “holistic”.` );
	},
};