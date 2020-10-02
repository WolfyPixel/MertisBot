
module.exports = {
	name: 'gpa',
    description: 'gpa',
    execute(message, args){
        
        var gpaOverall = 0.0;
        var gpaForTheYear = 0.0;
        var gpaSum = 0.0;
        var counter = 0;

        var tempNumArgs;
        var tempSum;

        message.channel.send(`Enter your grades for the ${counter++ + 9}th year:`);
        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { time: 70000, max: 5});

        collector.on('collect', m => {
            if(m.content.toLowerCase() === 'stop'){
                collector.stop();
            }else{
                message.channel.send(`Enter your grades for the ${counter++ + 9}th year:
(Send "stop" to exit)`);
        
            tempNumArgs = m.content.split(` `).map(x => parseFloat(x));
            tempSum = tempNumArgs.reduce((counter, x) => counter += x);
            gpaForTheYear = tempSum / tempNumArgs.length;
            gpaSum += gpaForTheYear;
            //console.log(`Collected ${m.content}`);
            }
        });

        collector.on('end', collected => {
            if(counter != 0){
                gpaOverall = gpaSum /  (counter - 1);
                message.channel.send(`\`GPA = ${gpaOverall.toFixed(3)}\``);
            }
        });
    }
}