class OpenAIAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        const apiKey = process.env.OPENAI_API_KEY;
        const endpoint = 'https://api.openai.com/v1/chat/completions';
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo-1106",
                messages: conversationHistory.concat([{ role: 'user', content: userMessage }]),
                max_tokens: 150
            }),
        });
        const responseData = await response.json();
        // Log the entire API response for debugging
        console.log('Response from OpenAI API:', responseData.choices[0].message);
        // Check if choices array is defined and not empty
        if (responseData.choices && responseData.choices.length > 0 && responseData.choices[0].message) {
            return responseData.choices[0].message.content;
        } else {
            // Handle the case where choices array is undefined or empty
            console.error('Error: No valid response from OpenAI API');
            return 'Sorry, I couldn\'t understand that.';
        }
    }
}
module.exports = { OpenAIAPI };


const { OpenAIAPIKey } = require('./config'); // Create config.js with your API key

/*
In case you want to use your own API Key instead of the lab enviornment’s free access then you need to make a few changes to the configuration and openai.js file. Also, to. run the code outside of Skills network labs you will need to add your own API key.
Create a file named config.js within the project directory.

    To prioritize security, it is recommended to store your API key in this separate config.js file.

• Subsequently, replace YOUR_API_KEY in the provided code with your specific API key.


class OpenAIAPI {
    static async generateResponse(userMessage) {
        const apiKey = OpenAIAPIKey;
        const endpoint = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 150,
            }),
        });
        const responseData = await response.json();
        // Log the entire API response for debugging
        console.log('Response from OpenAI API:', responseData);
        // Check if choices array is defined and not empty
        if (responseData.choices && responseData.choices.length > 0) {
            return responseData.choices[0].text.trim();
        } else {
            // Handle the case where choices array is undefined or empty
            console.error('Error: No valid response from OpenAI API');
            return 'Sorry, I couldn\'t understand that.';
        }
    }
}
module.exports = { OpenAIAPI };
*/

