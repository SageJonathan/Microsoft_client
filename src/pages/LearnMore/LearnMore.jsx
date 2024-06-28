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
     
    </div>
  );
};

export default LearnMore;


