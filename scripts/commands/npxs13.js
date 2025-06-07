const fs = require("fs");
module.exports.config = {
	name: "npxs13",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs13",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("NaYeem")==0 || event.body.indexOf("nayeem")==0 || event.body.indexOf("নাইম")==0 || event.body.indexOf("💋")==0) {
		var msg = {
				body: " নাইম তোর আর আমার! 😚😁💚",
				attachment: fs.createReadStream(__dirname + `/showrob1/nayeem.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }