module.exports = {
	name: 'concordance',
	description: 'concordance',
	execute(message) {
        message.channel.send(`\`How do I convert my SAT score to ACT score and vice versa?

This is the SAT-ACT concordance table which will allow you to covert scores.
https://www.docdroid.net/itSwM15/act-sat-concordance-tables-pdf\``);
	},
};