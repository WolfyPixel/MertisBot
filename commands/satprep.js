module.exports = {
	name: 'satprep',
	description: 'satprep',
	execute(message) {
        message.channel.send( ` ** How do I prepare for SAT? **
	For Reading and Writing, Erica Meltzer’s books (“The Critical Reader”) are the gold standard whereas for Maths, CollegePanda and UWorld (if you’re willing to dish out money) are very popular in the SAT community. 

	If you want more resources for the SAT, the subreddit r/SAT is a great place to start. Tutoring is not necessary to get a good score; however, if self-learning is not your cup of tea, a tutor might help.` );
	},
};
