import './Landing.scss';
import Banner from '../../components/Banner/Banner';
import User1 from '../../assets/images/user1.png'
import User2 from '../../assets/images/user2.png'
import User3 from '../../assets/images/user3.png'
import User4 from '../../assets/images/user4.png'
import Office from '../../assets/images/office_prod.png'
import Learn from '../../assets/images/learn_prod.png'
import OpenAi from '../../assets/images/open_prod.jpg'
import Copilot from '../../assets/images/copilot_prod.png'

function Landing() {
 
  return (
    <>
      <Banner />
      <div className='landing'>
        <div className="landing__mission">
        {/* <div className="landing__mission--image-container">
            <img className='landing__mission--image' src={Mission} alt="man inspects blueprints"/>
          </div> */}
          <div className="landing__mission--text-container">
            <h2 className="landing__mission--header">Our Mission</h2>
            {/* <ul className="landing__mission--list">
              <li className="landing__mission--item">Empowering small and medium-sized construction firms with cutting-edge AI technologies.</li>
              <li className="landing__mission--item">Enhancing project efficiency, safety, and sustainability through AI-driven solutions.</li>
              <li className="landing__mission--item">Supporting growth by optimizing operations and mitigating risks with innovative AI tools.</li>
            </ul> */}
            <div className='landing__mission--message'>
              <p>Microsoft is dedicated to empowering small and medium-sized construction companies</p>
              <p>with AI innovations that enhance efficiency, safety, and sustainability throughout project lifecycles.</p>
              <p>Our goal is to support growth by optimizing operations, mitigating risks, </p>
              <p>and advancing infrastructure project management.</p>
              </div>
          </div>
          <div className="landing__mission--image-container">
            {/* <img className='landing__mission--image' src={Mission} alt="man inspects blueprints"/> */}
            <iframe
              className="landing__mission--video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hGb9UZ8DyDc"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
          </div>
        </div>

        <div className="landing__product">
          <h3 className="landing__product--header">Our Products</h3>
          <div className="landing__product--container">
            <div className="landing__product--card">
              <img className="landing__product--image" src={Copilot} alt="" />
              <h4>Increased Efficiency and Productivity</h4>
              <p>Prod1</p>
            </div>
            <div className="landing__product--card">
              <img className="landing__product--image landing__product--image-office" src={Office} alt="" />
              <h4>Cost Savings and Financial Optomization</h4>
              <p>Prod2</p>
            </div>
            <div className="landing__product--card">
              <img className="landing__product--image" src={Learn} alt="" />
              <h4>Enhanced Safety and Risk Management</h4>
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
<h2 className='landing__testimonials--header'>Testimonials</h2>
<div className="landing__testimonials">
  <div className="landing__testimonials--container">
    <div className="landing__testimonials--card">
      <div className='landing__testimonials--user-container'>
      <div className='landing__testimonials--image-container'>
      <img className='landing__testimonials--image' src={User1}alt="Testimonial Image" />
      </div>
      <div className='landing__testimonials--user'>
        <h4 className='landing__testimonials--user-info'>Richard Owen</h4>
        <h5 className='landing__testimonials--user-info'>Contractor</h5>
      </div>
      </div>
      <div className='landing__testimonials--text'>
        <h3 className='landing__testimonials--user-info'>Toronto, Ontario</h3>
        <p className='landing__testimonials--user-text'>"I've seen remarkable improvements in my business since integrating Microsoft's AI tools. These technologies have revolutionized how we manage projects, predict resource needs, and communicate with clients. By harnessing AI-powered analytics, we've achieved greater efficiency and client satisfaction, positioning us as leaders in our industry."</p>
        {/* <img className='landing__testimonials--graph' src='' alt="Testimonial Image" /> */}
      </div>
    </div>
    <div className="landing__testimonials--card">
      <div className='landing__testimonials--user-container'>
      <div className='landing__testimonials--image-container'>
      <img className='landing__testimonials--image' src={User2}alt="Testimonial Image" />
      </div>
      <div className='landing__testimonials--user'>
        <h4 className='landing__testimonials--user-info'>Virginie Leblanc</h4>
        <h5 className='landing__testimonials--user-info'>Home Design</h5>
      </div>
      </div>
      <div className='landing__testimonials--text'>
        <h3 className='landing__testimonials--user-info'>Sherbrooke, Quebec</h3>
        <p className='landing__testimonials--user-text'>"Integrating Microsoft's AI tools has been transformative for my work. These technologies have revolutionized how I conceptualize and present design ideas to clients, offering advanced 3D modeling and virtual reality simulations. By harnessing AI-powered design insights and automated project management, I've enhanced efficiency, creativity, and client satisfaction, establishing a reputation for innovative design solutions in my industry."</p>
        {/* <img className='landing__testimonials--graph' src='' alt="Testimonial Image" /> */}
      </div>
    </div>
  </div>
</div>

<div className="landing__testimonials">
  <div className="landing__testimonials--container">
    <div className="landing__testimonials--card">
      <div className='landing__testimonials--user-container'>
      <div className='landing__testimonials--image-container'>
      <img className='landing__testimonials--image' src={User3}alt="Testimonial Image" />
      </div>
      <div className='landing__testimonials--user'>
        <h4 className='landing__testimonials--user-info'>Jamie Campbell</h4>
        <h5 className='landing__testimonials--user-info'>Carpenter</h5>
      </div>
      </div>
      <div className='landing__testimonials--text'>
        <h3 className='landing__testimonials--user-info'>Squamish, British Colombia</h3>
        <p className='landing__testimonials--user-text'>"These tools have revolutionized how I plan projects, optimize material usage, and collaborate with clients. By leveraging AI-powered predictive analytics and project management solutions, I've improved efficiency, reduced waste, and delivered superior craftsmanship. This has elevated client satisfaction and positioned me as a trusted expert in the carpentry industry.</p>
        {/* <img className='landing__testimonials--graph' src='' alt="Testimonial Image" /> */}
      </div>
    </div>
    <div className="landing__testimonials--card">
      <div className='landing__testimonials--user-container'>
      <div className='landing__testimonials--image-container'>
      <img className='landing__testimonials--image' src={User4}alt="Testimonial Image" />
      </div>
      <div className='landing__testimonials--user'>
        <h4 className='landing__testimonials--user-info'>Robert Frost</h4>
        <h5 className='landing__testimonials--user-info'>Independent Welder</h5>
      </div>
      </div>
      <div className='landing__testimonials--text'>
        <h3 className='landing__testimonials--user-info'>Red Deer, Alberta</h3>
        <p className='landing__testimonials--user-text'>"As a welder in Alberta, Microsoft's AI tools have made a big difference in how I work. These tools have changed the game for me in planning and executing welding jobs, giving me better precision and cutting down on mistakes. With AI-powered welding analytics and quality checks, I'm turning out more consistent welds, fixing fewer issues, and getting jobs done faster. It's not just about impressing clients; it's about showing up every day and doing solid work that speaks for itself in Alberta's tough industry."</p>
        {/* <img className='landing__testimonials--graph' src='' alt="Testimonial Image" /> */}
      </div>
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
