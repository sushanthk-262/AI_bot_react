import axios from 'axios';

async function generateReply(inputText, apiKey) {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: inputText,
      max_tokens: 50,  // Adjust the number of tokens for the desired response length
      temperature: 0.7,
      model:"text-davinci-003"  // Adjust the temperature for the desired randomness
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating reply:', error.response.data);
    throw error;
  }
}

export default generateReply;
