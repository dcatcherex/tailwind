import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const AiCompletion = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const handleInputChange = (e) => {
    setInputPrompt(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: inputPrompt },
        ],
      });

      const generatedMessage =
        completion.data.choices[0].message.content;

      setGeneratedResponse(generatedMessage);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            value={inputPrompt}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Generate Response</button>
      </form>
      {generatedResponse && (
        <div>
          <h3>Generated Response:</h3>
          <p>{generatedResponse}</p>
        </div>
      )}
    </div>
  );
};

export default AiCompletion;