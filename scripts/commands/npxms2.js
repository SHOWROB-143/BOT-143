const fs = require("fs");
module.exports.config = {
	name: "npxms2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Girlfriend")==0 || event.body.indexOf("Gf")==0 ||
event.body.indexOf("gf")==0) {
		var msg = {
				body: "ফেক লাভ চুদি না 🖕💔😂\n\nOwner: Showrob Khan\nOwner: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/gf2.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }