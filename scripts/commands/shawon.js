 const fs = require("fs");
module.exports.config = {
	name: "shawon",
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
	if (event.body.indexOf("shawon")==0 || event.body.indexOf("Shawon")==0 || event.body.indexOf("শাওন")==0 || event.body.indexOf("Pinik")==0) {
		var msg = {
				body: "- আমি মাগিবাজ পিনিক শাওন",
				attachment: fs.createReadStream(__dirname + `/noprefix/pinik.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }