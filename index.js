const Telegrambot = require('node-telegram-bot-api')



const bot = new Telegrambot('1027632494:AAF2gjlDmjtWBVdofCKK7FqBKfiqSuif5nQ', { polling: true })




bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, "${msg.from.first_name}"`)


})