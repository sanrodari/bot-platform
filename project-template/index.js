const TelegramBot = require('node-telegram-bot-api');
const botHandler = require('./botHandler');

const { BOT_AUTH_TOKEN } = process.env;
if (!BOT_AUTH_TOKEN) throw new Error('No BOT_AUTH_TOKEN provided');
botHandler(new TelegramBot(BOT_AUTH_TOKEN, { polling: true }));
