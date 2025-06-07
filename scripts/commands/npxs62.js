const fs = require("fs");
module.exports.config = {
	name: "npxs62",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs62",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😭")==0 || event.body.indexOf("😿")==0 || event.body.indexOf("🥺")==0 || event.body.indexOf("😔")==0) {
		var msg = {
				body: "𝗗𝗼𝗻'𝘁 𝗴𝗶𝘃𝗲 𝗮𝗹𝗹 𝘁𝗵𝗲 𝘄𝗼𝗿𝗱𝘀, 𝘀𝗼𝗺𝗲 𝘁𝗵𝗶𝗻𝗴𝘀 𝗵𝗮𝘃𝗲 𝘁𝗼 𝗰𝗼𝘂𝗻𝘁!🦋💫\nBot Developer Showrob Bhai  \nEmoji File Creator Showrob Bhai  \n★Support Email:- SHowrob041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/62.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }