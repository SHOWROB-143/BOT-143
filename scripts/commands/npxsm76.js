const fs = require("fs");
module.exports.config = {
	name: "npxsm76",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxsm76",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🐭")==0 || event.body.indexOf("🐍")==0 || event.body.indexOf("💉")==0 || event.body.indexOf("🙊")==0) {
		var msg = {
				body: "- স্বার্থের শহরে দু হাত ভর্তি অর্থের বিকল্প নেই💔 ★Thank you for. Auto Replied★Bot Developer Showrob Bhai  Emoji File Creator Showrob Bhai  ★Support Email:- Showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxsm76.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }