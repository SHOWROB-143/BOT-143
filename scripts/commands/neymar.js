 const fs = require("fs");
module.exports.config = {
	name: "neymar",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx31v",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("neymar")==0 || event.body.indexOf("Jr")==0 || event.body.indexOf("Naymar")==0 || event.body.indexOf("নেইমার")==0) {
		var msg = {
				body: "কিং নেইমার 💪",
				attachment: fs.createReadStream(__dirname + `/noprefix/neymar.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🇧🇷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }