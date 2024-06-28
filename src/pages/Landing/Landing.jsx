import './Landing.scss';
import Banner from '../../components/Banner/Banner';
import User1 from '../../assets/images/user1.png'
import User2 from '../../assets/images/user2.png'
import User3 from '../../assets/images/user3.png'
import User4 from '../../assets/images/user4.png'
import Office from '../../assets/images/office_prod.png'
import Learn from '../../assets/images/learn_prod.png'
import Copilot from '../../assets/images/copilot_prod.png'
import { Link } from 'react-router-dom';

function Landing() {
 
  return (
    <>
      <Banner />
      <div className='landing'>
        <div className="landing__mission">
          <div className="landing__mission--text-container">
            <h2 className="landing__mission--header">Enhance productivity <br></br> with AI for efficiency</h2>
            <div className='landing__mission--message'>
              <p className='landing__mission--text'> Discover how integrating artificial intelligence can significantly</p>
              <p className='landing__mission--text'>enhance your ability to get things done, streamlining processes</p>
              <p className='landing__mission--text'> and optimizing workflows to achieve more in <span className='highlight'>less time.</span></p>
              </div>
          </div>
          <div className="landing__mission--image-container">
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
              <h4 className='landing__product--text-header'>Increased Efficiency and Productivity</h4>
              <p className='landing__product--text'>Copilot optimizes project schedules and automates routine tasks, boosting overall efficiency and productivity.</p>
            </div>
            <div className="landing__product--card">
              <img className="landing__product--image landing__product--image-office" src={Office} alt="" />
              <h4 className='landing__product--text-header'>Cost Savings and Financial Optomization</h4>
              <p className='landing__product--text'>Microsoft 365 provides accurate cost estimates and resource optimization, reducing waste and saving money.</p>
            </div>
            <div className="landing__product--card">
              <img className="landing__product--image" src={Learn} alt="" />
              <h4 className='landing__product--text-header gap'>Build AI to Benifit Your Needs</h4>
              <p className='landing__product--text'>AI identifies safety hazards and assesses risks, helping prevent accidents and project issues.</p>
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
      </div>
    </div>
  </div>
</div>

        <div className="landing__learnmore">
          <div className="landing__learnmore--buttons">
          <Link to="/information">
            <button className=" landing__learnmore--button landing__learnmore--button-left">
              <p className='landing-bttn'>
              Keep learning
              </p>
              </button>
           </Link>
           <Link to="/information">
            <button className="landing__learnmore--button landing__learnmore--button-middle">
              <p className='landing-bttn'> 
                Ready for AI
                </p>
              </button>
            </Link>
    
          </div>
        </div>
      </div>
    </>
  );
}


export default Landing
