module.exports = {
	name: 'css',
	description: 'css',
	execute(message) {
        message.channel.send( `
        ** What is CSS Profile? **
The CSS is an online application to determine eligibility for non-federal financial aid, which is administered by the College Board, creator of the SAT®. Not every college requires it, but nearly 400 colleges do, so be sure to first check the list of schools to determine whether your child needs to complete the application. It's also important to see if the school requires students of divorced parents to complete the additional Noncustodial PROFILE.

Unlike the FAFSA, there is a fee to apply. The first application is $25 and reports to additional schools are $16 each. Fee waivers are granted to high-need students, generally for household incomes of $40,000 or less per year.


** How should I fill in the CSS profile? **
No two people have the same finances so talk to your parents candidly and make sure to include every source of income and answer every question on the CSS profile, such as tax forms and debt, honestly.

Lying on the CSS profile will lead to your degree and financial aid being cancelled.
        ` );
	},
};

