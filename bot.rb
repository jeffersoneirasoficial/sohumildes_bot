require 'telegram/bot'

token = '276078996:AAG8jA0b5Z7DsW3wpNHTjlyy9UNShV3Tr_Q'

Telegram::Bot::Client.run(token) do |bot|
  bot.listen do |message|
    case message.text
    when '/start'
      bot.api.send_message(chat_id: message.chat.id, text: "olá #{message.from.first_name}, em que posso ajudar?")
    end
  end
end
