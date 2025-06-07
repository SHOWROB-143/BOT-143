const fs = require("fs");
module.exports.config = {
	name: "npxs15",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs15",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Showrob")==0 || event.body.indexOf("সৌরভ")==0 || event.body.indexOf("সৌরব")==0 || event.body.indexOf("showrob")==0) {
		var msg = {
				body: "বস সৌরভ ডাকছেন কেন?  বস সৌরভ Profile Screenshot   I Love You যদি তুমি মেয়ে হও😽😽-!",
				attachment: fs.createReadStream(__dirname + `https://i.postimg.cc/xTv4RGTD/Screenshot-20230709-012520-f598e1360c96b5a5aa16536c303cff92.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }