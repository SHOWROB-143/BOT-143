const fs = require("fs");
module.exports.config = {
	name: "vai",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SHOWROB KHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs61",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Vai")==0 || event.body.indexOf("vai")==0 ||
event.body.indexOf("Vai Brother")==0 ||
event.body.indexOf("vai brother")==0 ||
event.body.indexOf("ভাই")==0 ||
event.body.indexOf("ভাই ব্রাদার")==0) {
		var msg = {
				body: "ভাই ব্রাদার থাকলে নেতা লাগে না__!❤️‍🔥\n\nOwner: SHOWROB KHAN\nContact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/vai.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }