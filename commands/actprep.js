module.exports = {
	name: 'actprep',
	description: 'actprep',
	execute(message) {
        message.channel.send( ` ** How do I prepare for ACT? **

For Reading and Writing, Erica Meltzer’s books (“The Critical Reader”) are the gold standard whereas, for Maths, CollegePanda and UWorld (if you’re willing to dish out money) are very popular in the ACT community. 
         
If you want more resources for the ACT, the subreddit r/ACT is a great place to start. Tutoring is not necessary to get a good score; however, if self-learning is not your cup of tea, a tutor might help.` );
	},
};