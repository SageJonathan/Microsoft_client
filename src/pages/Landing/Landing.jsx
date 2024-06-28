import './Landing.scss';
import Banner from '../../components/Banner/Banner';


function Landing() {
  return (
    <>
      <Banner />
      <div className='landing'>
        <div className="landing__mission">
          <div className="landing__mission--text-container">
            <h2 className="landing__mission--header">Our Mission</h2>
            {/* <ul className="landing__mission--list">
              <li className="landing__mission--item">Empowering small and medium-sized construction firms with cutting-edge AI technologies.</li>
              <li className="landing__mission--item">Enhancing project efficiency, safety, and sustainability through AI-driven solutions.</li>
              <li className="landing__mission--item">Supporting growth by optimizing operations and mitigating risks with innovative AI tools.</li>
            </ul> */}
            <p className='landing__mission--message'>Microsoft is dedicated to empowering small and medium-sized construction companies <br></br> with AI innovations that enhance efficiency, safety, and sustainability throughout project lifecycles. <br></br> Our goal is to support growth by optimizing operations, mitigating risks, <br></br> and advancing infrastructure project management.</p>
          </div>
          <div className="landing__mission--image-container">
            <img className='landing__mission--image' src="path-to-your-image.jpg" alt="Avalanche Safety"/>
          </div>
        </div>

        <div className="landing__product">
          <h3 className="landing__product--header">Our Products</h3>
          <div className="landing__product--container">
            <div className="landing__product--card">
              <img className="landing__product--image" src="" alt="" />
              <p>Prod1</p>
            </div>
            <div className="landing__product--card">
              <img className="landing__product--image" src="" alt="" />
              <p>Prod2</p>
            </div>
            <div className="landing__product--card">
              <img className="landing__product--image" src="" alt="" />
              <p>Prod3</p>
            </div>
          </div>
        </div>

        <div className="landing__visuals">
          <h3 className="landing__visuals--header">Why these products</h3>
          <div className="landing__visuals--container">
            <div className="landing__visuals--card">
              <p>Office</p>
              <img className='landing__visuals--image' src="" alt="" />
            </div>
            <div className="landing__visuals--card">
              <p>Azure</p>
              <img className='landing__visuals--image' src="" alt="" />
            </div>
          </div>
        </div>

        <div className="landing__testimonials">
          <h3 className="landing__testimonials--header">Testimonials</h3>
          <div className="landing__testimonials--container">
            <div className="landing__testimonials--card">
              <h4>Richard</h4>
              <h5>Contrator</h5>
              <p>Lorem ipsum dolor sit amet consectetillo tempore velit delerum eos saepe officia!</p>
              <img className='landing__testimonials--image' src="" alt="" />
            </div>
            <div className="landing__testimonials--card">
              <h4>Bernadette</h4>
              <h5>Plumber</h5>
              <p>Lorem ipsum dolor sit amet consectetillo tempore velit delerum eos saepe officia!</p>
              <img className='landing__testimonials--image' src="" alt="" />
            </div>
          </div>
        </div>

        <div className="landing__learnmore">
          <h3 className="landing__learnmore--header">Learn more</h3>
          <div className="landing__learnmore--buttons">
            <button className="landing__learnmore--button">How is AI Used?</button>
            <button className="landing__learnmore--button">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
}


export default Landing
