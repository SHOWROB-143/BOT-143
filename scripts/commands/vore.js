const fs = require("fs");
module.exports.config = {
	name: "vore",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😍🥰😘",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘")==0 || event.body.indexOf("I love you")==0 || event.body.indexOf("😍")==0 || event.body.indexOf("🥰")==0) {
		var msg = {
				body: "ভালোবাসা তোমার পুক্কি দিয়ে ভরে দিব 🤣😹🥀\n\nOwner: SHOWROB KHAN\ncontact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/vore.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }