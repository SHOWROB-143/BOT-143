 const fs = require("fs");
module.exports.config = {
	name: "sagel",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mimv3",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("sahel")==0 || event.body.indexOf("sagel")==0 || event.body.indexOf("Sahel")==0 || event.body.indexOf("Sagel")==0) {
		var msg = {
				body: "- আমি এমবি ভিক্ষুক সাহেল বলতেছি",
				attachment: fs.createReadStream(__dirname + `/noprefix/sagel.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }