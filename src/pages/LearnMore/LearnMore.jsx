
import "./LearnMore.scss";
import Chatlogo from "../../assets/images/AI-logo.jpeg";
import Price29 from "../../assets/images/pricetag-29.jpeg";
import Price49 from "../../assets/images/pricetag-49.jpeg";
import Price19 from "../../assets/images/pricetag-19.jpeg";
import Price_free from "../../assets/images/pricing-free.png";
import Price74 from "../../assets/images/pricing-74.png";
import Price40 from "../../assets/images/pricing-40.png";
import Price13 from "../../assets/images/pricing-13.png";
import Lower_pic from "../../assets/images/lower_pic.png";
import { useState } from "react";

function LearnMore() {
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
    <>
      <div className="top">
        <div className="top__content">
          <h1 className="top__content-title">
            Smart, Reliable, and Transparent <br></br>AI Solutions for Your <span className='highlight'>Business</span>
          </h1>
          <p className="top__content-para">
            <p className="text">Unlock the full potential of your construction projects with our AI</p>
            <p className="text">solutions. Designed to improve efficiency, reduce costs, and secure</p>
            <p className="text"> safety, our AI tools are the future of construction</p>
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="middle__logo">
          <img src={Chatlogo} />
        </div>
        <div class="middle__cards">
          <div class="middle__card">
            <p>Craft project progress email</p>
          </div>
          <div class="middle__card">
            <p>Generate construction project schedule</p>
          </div>
          <div class="middle__card">
            <p>Prepare renovation budget estimate</p>
          </div>
          <div class="middle__card">
            <p>Develop construction site safety plan</p>
          </div>
        </div>
      </div>
      <div className="chat">
      <textarea id="chat-textarea" placeholder="Message Chat GPT"></textarea>
      </div>
      <div className="pricing">
        <div className="pricing__title">
          <h2>Pricing plan</h2>
        </div>
        <div className="pricing__cards">
          <img src={Price_free} className="pricing__img" />
          <img src={Price13} className="pricing__img" />
          <img src={Price40} className="pricing__img" />
          <img src={Price74} className="pricing__img" />
        </div>
      </div>
      <div className="lower">
        <div className="lower__cont">
          <div className="lower__sec1">
            <h2 className="lower__sec1-title">
              Explore AI Solutions for Construction
            </h2>
            <ul className="">
              <li>
                AI opstimizes efficiency, reduces costs, and enhances safety in
                construction.
              </li>
              <li>You can demo AI tools tailored for your projects.</li>
              <li>
                Pricing is based on the scale of implementatiopn and usage.
              </li>
              <li>
                Learn AI through our platform to earn credits and lower your
                costs
              </li>
            </ul>
            <div className="lower__buttons">
              <button className="lower__buttons-left"></button>
              <button className="lower__buttons-right"></button>
            </div>
          </div>
          <div className="lower__sec2">
            <img src={Lower_pic} className="lower__sec2-img" />
          </div>
        </div>
      </div>
    </>
  );
}
export default LearnMore;


