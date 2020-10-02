
module.exports = {
	name: 'clear',
    description: 'clear',
    aliases: ['c'],
	execute(message, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) 
            return message.channel.send('Lack of sPerms!');
        
        let deleteAmount;
        if (args.length == 0)
            deleteAmount = 99;
        else if (isNaN(args[0]) || parseInt(args[0]) <= 0) 
            return message.reply('Please put a number only!');
        else if (parseInt(args[0]) > 99)
            return message.reply('You can only delete 99 messages at a time!');
        else
            deleteAmount = parseInt(args[0]);
        

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`);
	}
};
