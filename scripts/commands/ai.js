  
module.exports.config = {
  name: "ai",
    version: "1.0.1",
    permission: 0,
    credits: "Nayan",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api, event, args }) {
 

const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
                  apiKey: "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",
                            });
                            const openai = new OpenAIApi(configuration);
  let data = args.join(" ");
                            if (data.length < 2) {
                                api.sendMessage(`${global.config.PREFIX}ai<⚠️ask anything👑> credits by  SHOWROB KHAN`, event.threadID);
                            } else {
                                try {
                                    const completion = await openai.createCompletion({
                                        model: "text-davinci-003",
                                        prompt: args.join(" "),
                                        temperature: 0.5,
                                        max_tokens: 2048,
                                        top_p: 0.3,
                                        frequency_penalty: 0.5,
                                        presence_penalty: 0.0,
                                    });
                                    api.sendMessage(completion.data.choices[0].text, event.threadID, event.messageID);
                                }
                                catch (error) {
                                    if (error.response) {
                                        console.log(error.response.status);
                                        console.log(error.response.data);
                                    } else {
                                        console.log(error.message);
                                        api.sendMessage(error.message, event.threadID);
                                    }
                                }
                            }
                                  }