const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()


module.exports = class openai {
    
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        return new OpenAIApi(configuration)
    }

    static textCompletation({prompt}){
        return{
            model: "test-davinci-003",
            prompt: `${prompt}`,
            temperature: 0.7,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }

    }
}
