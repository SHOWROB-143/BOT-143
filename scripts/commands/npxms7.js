const fs = require("fs");
module.exports.config = {
	name: "npxms7",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms7",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤕")==0 || event.body.indexOf("😨")==0 || event.body.indexOf("🤢")==0 || event.body.indexOf("☹️")==0) {
		var msg = {
				body: "-তুমি আমার সে প্রিয়,যে কিনা পূর্ণতা দেখিয়ে শূন্যতা দিয়ে গেছো..!!💔\n\n★Bot Developer Showrob Khan\n★Support Email:- Showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/n7.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }