 const fs = require("fs");
module.exports.config = {
	name: "npx39",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "SHOWROB KHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npx39",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("খুশি")==0 || event.body.indexOf("Khushi")==0 || event.body.indexOf("khushi")==0 || event.body.indexOf("🥹")==0) {
		var msg = {
				body: "খুশি সৌরভ এর জন্য চিলো নাহ💔😊",
				attachment: fs.createReadStream(__dirname + `/noprefix/npx39.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }