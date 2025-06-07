const fs = require("fs");
module.exports.config = {
	name: "goodnight",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SHOWROB KHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxms2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good Night")==0 || event.body.indexOf("শুভ রাত্রি")==0 ||
event.body.indexOf("gd n8")==0 ||
event.body.indexOf("gd night")==0 ||
event.body.indexOf("Gd night")==0 ||
event.body.indexOf("Good n8")==0 ||
event.body.indexOf("good night")==0) {
		var msg = {
				body: "নিজের খেয়াল রেখো প্রিয় আমার এই সস্তা জীবন এ তুমি অনেক দামি একজন মানুষ-!❤️‍🩹\n\nOwner: Showrob Khan\nOwner: showrobkhan041@gmail.com",
				attachment: fs.createReadStream(__dirname + `/noprefix/gdn.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }