﻿module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100004696126784") {
    var aid = ["100004696126784"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস সৌরভ কে মেনশন দিলে তোমার নাকের মধ্যে একটা ঘুশি দিমু এ বাল  আমি সৌরভ বট বলতেছি মেয়ে হলে জামাই ডাক 😈👿 মেয়ে তোমাকে বলছি I Love You - !"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }