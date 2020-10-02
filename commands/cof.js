module.exports = {
	name: 'cof',
	description: 'cof',
	execute(message) {
        message.channel.send( `
        ** What is a Certificate of Finance or COF form? **
It’s the form required to issue your I-20, which is in turn needed to issue your student/F1 visa to study in the US. The form requires you to state that you have sufficient funds to study in the United States.

For the vast majority of schools, COF is only required after you get accepted so this is usually not a thing you have to worry about when you’re applying.
        ` );
	},
};

