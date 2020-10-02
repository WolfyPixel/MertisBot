module.exports = {
	name: 'fee',
	description: 'fee',
	execute(message) {
        message.channel.send( ` ** How much money do we need to apply? Are there fee waivers? How to get them? **
For the Common Application, you can easily get fee waivers for all 20 schools you are applying to. All you need is a signature from your counselor stating that the application fees pose a financial burden. 
However, the Coalition App won’t give you fee waivers if you’re an international student. If you do want fee waivers for the schools you’re applying to through the Coalition App, you need to email these 
        schools directly and ask for a fee waiver.
        
** Do schools give out CSS fee waivers? **
 Yes but you have to email each school and ask and not all schools give out CSS fee waivers for international students (and most of these schools accept the ISFAA). Some schools like Middlebury only give out fee waivers to international students whom they find competitive enough to genuinely consider for admission.  
        
        ** I cannot afford the cost of sending official test scores to colleges, What do I do? **
 The vast majority of schools allow you to self report your test scores (meaning you can enter your SAT/TOEFL/AP/SAT-SUB scores in Common/Coalition App and they will take these to be your official test scores).

 Unfortunately, some schools like Colgate University require official SAT scores to be sent directly from the College Board itself so for schools like these, there is no way around paying the $12 required to send scores. Consider these factors when using your free score sends.
        ` );
	},
};
//