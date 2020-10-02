module.exports = {
	name: 't20sat',
	description: 't20sat',
	execute(message) {
        message.channel.send( ` ** What score do I need in SAT/ACT for a T20? **

This question is hard to give an answer to. Admission to these universities/colleges is known to be highly holistic; this means your acceptance is decided by a multitude of things, one of which is your SAT score. Therefore, there is no one answer since for example, if your ECs are very strong, they tend to make up for weak SAT scores. If you’re applying to a T20 school, SAT scores are usually more important than if you’re applying to LACs since LACs as a whole have a more holistic process.
        
Although if you are an international needing aid, it is recommended to have a SAT score above 1500 just to be on the safe side of things.  However, having a SAT score above 1500 by no means guarantees acceptance just as having a SAT score below 1500 by no means guarantees a rejection. It is however not advisable to have an SAT score that’s very low (<1400). Make sure your SAT scores are at least above the 50th percentile from the college’s average SAT data of previous years, and 75th percentile to be safe.` );
	},
};

