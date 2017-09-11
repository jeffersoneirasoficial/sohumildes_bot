const TelegramBot = require('node-telegram-bot-api');
const token = '276078996:AAG8jA0b5Z7DsW3wpNHTjlyy9UNShV3Tr_Q';
const bot = new TelegramBot(token, {polling: true});

bot.on("new_chat_members", (msg) => {
  
});
//boas-vindas no bot.
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Olá bem-vindo(a) ao Bot do grupo So Humildes ❤️💙\n\nPara ver as regras digite /regras");
});

//regras
bot.onText(/\/regras/, (msg) => {
  bot.sendMessage(msg.chat.id, "REGRAS DO GRUPO\n\n🚫Proibido🚫\n🚫Proibido pornografia, fotos nudes.\n🚫Proibido divulgar grupo sem autorização do adm\n🚫Proibido brigas e discussões sobre religião, futebol e politica\n🚫Proibido desrespeitar as mulheres do grupo\n🚫Proibido xingar os membros do grupo e proibido xingar o adm do grupo\n🚫Proibido spam\n🚫Proibido chamar no pv sem autorização\n🚫Proibido divulgar links do youtube sem autorização\n🚫Proibido qualquer tipo de pirataria\n✅Permitido✅\n✅Permitido fotos engraçadas\n✅Permitido piadas\n✅Permitido músicas\n✅Permitido chamar no pv com autorização\n✅Permitido divulgar videos engraçados e videos cassetadas\n✅Permitido frases do facebook e twitter\n\nRespeitem as regras e respeitem as mulheres.");
});
