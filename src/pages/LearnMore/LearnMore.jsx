import './LearnMore.scss';
import React, { useState } from 'react';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const LearnMore = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [error, setError] = useState('');

  const generateText = async () => {
    try {
      const response = await axios.post(`${baseUrl}/learnmore/prompt`, {
        prompt: prompt
      });

      const data = response.data;
      setGeneratedText(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
      setError('Error generating response');
    }
  };

  return (
    <div>
      <h1>OpenAI API Demo</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <button onClick={generateText}>Generate</button>
      {generatedText && (
        <div>
          <h3>Generated Text:</h3>
          <p>{generatedText}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default LearnMore;


