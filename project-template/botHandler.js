// NOTE: This file is replaced with the user submitted code
function botHandler(bot) {
  bot.on('message', msg => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Received your message+++');
  });
}

module.exports = botHandler;
