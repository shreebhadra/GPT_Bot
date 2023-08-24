const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
/**
 *
 * model: String(Model Code)
 * prompt: String(Question)
 * maxWords: Integer(Amount of results)
 * apiKey: String(Api key given by an user) // Temporary
 */

async function chatGPT(prompt) {
	const configuration = new Configuration({
		apiKey: process.env.OPENAI_API_KEY,
	});
	const openai = new OpenAIApi(configuration);

	const completion = await openai.createCompletion({
		model: 'text-davinci-003',
		prompt: prompt,
		max_tokens: 1500,
	});
	// console.log(completion.data.choices[0].text);

	return completion.data;
}

module.exports = chatGPT;