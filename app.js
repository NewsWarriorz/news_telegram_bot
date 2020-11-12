const TelegramBot = require("node-telegram-bot-api");
require('dotenv').config();


const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
//error handling
// dos attack , rate limiting
//logging

bot.onText(/\/start/, (msg) => {
  reply =
    `Hii <b>${msg.from.first_name}</b>,\n` +
    "Welcome to <b>NewsVerification Bot</b>\n" +
    "<i>We</i> are delighted to have you\n\n" +
    "<pre>How Does this Work?</pre>\n" +
    "<pre>Just start typing about things you want to find out and we will try to verify it from our database\nFYI: More words we have better the result will be\nTry Now!!!</pre>";

  bot.sendMessage(msg.chat.id, reply, { parse_mode: "HTML" });
});

//checking the message type
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  getResult(msg.text.toString())
    .then((reply) =>
      bot.sendMessage(chatId, reply))
    .catch((error) => bot.sendMessage(chatId, error));
});

//keyboard

// bot.onText(/\/end/, (msg) => {
//   bot.sendMessage(msg.chat.id, "Welcome", {
//     reply_markup: {
//       keyboard: [["Satisfied"], ["Not Satisfied"]],
//     },
//   });
// });



async function getResult(msg) {
  let reply = msg + " Received";
  return reply;
}


// {
//     reply_markup: {
//       inline_keyboard: [
//         [{ 
//             text: "Satisfied" ,
//             callback_data: "True"
//         }],
//         [{ 
//             text: "Not Satisfied" ,
//             callback_data: "False"
//         }],
//       ],
//     }