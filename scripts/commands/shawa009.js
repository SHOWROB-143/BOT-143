 const fs = require("fs");
module.exports.config = {
	name: "shawa009",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "meye",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ashokto")==0 || event.body.indexOf("Ashokto")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("12")==0) {
		var msg = {
				body: "- এক পুরুষে আসক্ত থাকতে পারলেই আপনি মেয়ে নয়তো সানি লিওন 🙂\n\nOwner: SHOWROB KHAN\nContact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/showrob1/sunny2211.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }