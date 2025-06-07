module.exports.config = {
  name: "showrob",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Joshua Sy", //don't change the credits please
  description: "Admin and Bot info.",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/FHP2DSDF/1709650299773.jpg", 

            "https://i.postimg.cc/L8sWYXRc/1709650303181.jpg", 
             "https://i.postimg.cc/mgqmPym9/1709650306209.jpg",

            "https://i.postimg.cc/MHWDCPpC/1709650312837.jpg"];

var callback = () => api.sendMessage({body:`জ্বী বলুন শুনতেছি......
ADMIN AND BOT INFORMATION 
BOT NAME : 🤖SHOWROB ＢｏＴ- 69🤖 

*My Owner info & Any Problem Contact :-

- নাম।         : সৌরভ খান

- বর্তমান ঠিকানা  : ঢাকা 

- স্থায়ী ঠিকানা    : ঢাকা

- বয়স          : ২১+

- GENDER       : MALE

- উচ্চতা         : ৫ ফুট ৬ইঞ্চি

- জন্ম তারিখ     : ২৩ সেপ্টেম্বর ২০০১

- পেশা          : স্টুডেন্ট 

- যোগ্যতা        : অনার্স ২য় বর্ষ 

- রিলেশন শিপ    : সিঙ্গেল 

- প্রিয় রং        : কালো ⚫😇

- প্রিয় খাবার      : বিরিয়ানি❤️❤️

- শখ            : নাই

- ইচ্ছা           : নাই

- আসল পরিচয়     : ইসলাম🌸🌺

Profile 1 Link :- https://www.facebook.com/YOUR.TOM.009

Profile 2 Link :- https://www.facebook.com/Opps.not.found.this.link.sir

★Facebook Page Link:-https://www.facebook.com/ex.boyfriend.009

WhatsApp       :- Personal

★Support Email:- Showrobkhan041@gmail.com

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };