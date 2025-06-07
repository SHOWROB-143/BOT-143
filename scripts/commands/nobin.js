const fs = require("fs");
module.exports.config = {
	name: "npxms4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mohammad SHiblu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms4",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nobin")==0 || event.body.indexOf("Nobin")==0 || event.body.indexOf("নবিন")==0 || event.body.indexOf("নবীন")==0) {
		var msg = {
				body: "-নতুন নতুন গালি শিক্ষা আবাল পুলাপান গুলা লাফায় বেশি★Thank you for. Auto Replied★Bot Developer  Showrob Bhai  Emoji File Creator Showrob Bhai  ★Support Email:- Showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/nobin.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }