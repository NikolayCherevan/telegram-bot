const Telegrambot = require('node-telegram-bot-api')
const request = require('request');

const bot = new Telegrambot('1027632494:AAF2gjlDmjtWBVdofCKK7FqBKfiqSuif5nQ', { polling: true })




bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, `Привет, "${msg.from.first_name}" я представляю компанию InventorKharkiv, здесь вы можете поинтересоваться наличием курсов для вашего ребенка или узнать стоимость `)


})
bot.onText(/\/courses/, (msg, match) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Сколько лет вашему ребенку? ', {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: '4-5 👼',
                        callback_data: `one`
                    },
                    {
                        text: '6-7 👶',
                        callback_data: 'two'
                    },
                    {
                        text: '8-9 👦👧',
                        callback_data: 'three'
                    },
                ]
            ]
        }


    })

});
bot.on('callback_query', function(msg) {

    if (msg.data === 'one') {

    } else if (msg.data === 'two') {

    } else if (msg.data === 'three') {

    } else {

    }
});