import telebot

bot = telebot.TeleBot('276078996:AAG8jA0b5Z7DsW3wpNHTjlyy9UNShV3Tr_Q')

@bot.message_hanler(commands=['start'])
def send_wecolme(message):
   bot.reply_to(message, "Olá bem-vindo ao Bot!")
bot.polling()
