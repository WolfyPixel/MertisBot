const {prefix} = require('../config.json');

module.exports = {
	name: 'help',
        description: 'help',
	execute(message) {
                message.channel.send(`\`${prefix}gpa : Calculate your gpa
${prefix}act : What is ACT?
${prefix}actprep : How do I prepare for ACT?     
${prefix}satprep : How do I prepare for SAT?
${prefix}concordance : Convert ACT score to SAT and vice versa
${prefix}t20sat : What is a good standardized score for T20s?
${prefix}score : Is my score good enough for X university?
${prefix}ec : Everything related to extracurriculars!
${prefix}fee : Various kinds of fees that you'll encounter during the application process
${prefix}finaid : stuff about financial aid and the ivyachievement list
${prefix}fullride : a list of full rides and full-tuition scholarships aggregated by co24  and an A2C post
${prefix}css : What is a CSS profile?
${prefix}isfaa : What is ISFAA?
${prefix}cof : What is COF?
${prefix}findoc : Financial documents required for the application
${prefix}early : What is ED/EA? How are they different?
${prefix}needblind : What are need-blind and need-aware schools?
${prefix}masterpost : The a2c masterpost for everything from how to write essays to what things constitute as ECs
${prefix}howtolor : The MIT Guide To Writing LORs
${prefix}beyondwiki : beyondwiki materials
${prefix}interview : Interview 101
${prefix}(school name) : \``);
        }
};