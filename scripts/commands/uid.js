module.exports.config = {
 name: "uid",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "Rup Kumar",
 description: "Get your user ID",
 commandCategory: "other",
 cooldowns: 5
};

module.exports.run = function({ api, event }) {
 if (Object.keys(event.mentions) == 0) return api.sendMessage(`🌐==== [ 𝗨𝗜𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐\n\n★彡[ʏᴏᴜʀ ᴜꜱᴇʀ ɪᴅ:]彡★\n${event.senderID}\n\n𓊈𒆜[🅼🅴🆂🆂🅴🅽🅶🅴🆁 🅲🅷🅰🆃 🅻🅸🅽🅺]𒆜𓊉\nm.me/${event.senderID}\n\n𓊈彡[🅵🅰🅲🅴🅱🅾🅾🅺 🅿🆁🅾🅵🅸🅻🅴 🅻🅸🅽🅺]彡𓊉\nwww.facebook.com/${event.senderID}\n\nOwner: SHOWROB KHAN\nContact me: showrobkhan041@gmail.com`,event.threadID, event.messageID);
 else {
  for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`★彡[ɪᴅ ɴᴀᴍᴇ]彡★${Object.values(event.mentions)[i].replace('@', '')}\n\n★彡[ᴜɪᴅ]彡★${Object.keys(event.mentions)[i]}:\n\n彡[ꜰᴀᴄᴇʙᴏᴏᴋ ᴘʀᴏꜰɪʟᴇ ʟɪɴᴋ]彡 \nwww.facebook.com/${Object.keys(event.mentions)[i]}`, event.threadID);
  return;
 }
  }
