const fs = require("fs");
module.exports.config = {
	name: "showrob009",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs61",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vatar")==0 || event.body.indexOf("Vatar")==0 || event.body.indexOf("12")==0 || event.body.indexOf("vatari")==0) {
		var msg = {
				body: "-ক্যারেক্টারলেস মেয়েদের বড় ভাই নামক ভাতার গুলা একটু বেশি থাকে🙂 Bot Developer Mohammad Showrob Bhai  Emoji File Creator Showrob Bhai  ★Support Email:- Showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/vatar.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }