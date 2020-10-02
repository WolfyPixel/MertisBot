module.exports = {
	name: 'finaid',
	description: 'finaid',
	execute(message) {
        message.channel.send( `
        ** What schools are generous with financial aid? Is financial aid the only way to afford a US education? **
This is by far the most frequent question intl2USA receives. Unless you can pay the average cost of education in the US (usually $60,000 to $80,000 per year for 4 years), you will most likely need to apply for financial aid.

Here in this document (all hail Ben Stern) you will find schools that will give you significant amount of financial aid if you do get admitted: https://www.dropbox.com/s/3ekflwbvimx75ro/2019IvyAchievementIntlGuide-15-October-2018.pdf?dl=0

If you are still unsure about a school meeting your demonstrated need check out its website. If they claim to meet full need they will, although the competition will be stiff.
        ` );
	},
};

