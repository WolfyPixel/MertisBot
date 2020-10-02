const {prefix} = require('../config.json');

module.exports = {
	name: 'beyondwiki',
    description: 'beyondwiki',
	execute(message) {
                message.channel.send(`\`${prefix}admission - Обзор всего процесса поступления
${prefix}essay - Как правильно писать эссе?
${prefix}fin - Обзор системы финансовой помощи
${prefix}int - Проведение интервью
${prefix}schooldoc - Школьные документы
${prefix}stories - Истории поступления студентов
${prefix}tests - Стандартизированные тесты
\``)}
};