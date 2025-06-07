 const fs = require("fs");
module.exports.config = {
	name: "ma1",
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
	if (event.body.indexOf("ma")==0 || 
event.body.indexOf("Ammu")==0 || event.body.indexOf("Ma")==0) {
		var msg = {
				body: "- অনেক মিস করি আম্মু তোমাকে।🙂😥\n\nOwner: SHOWROB KHAN\nContact me: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/showrob1/ma1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }