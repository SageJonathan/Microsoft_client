
import './Events.scss'; 

function Events() {
  return (
    <div className='events'>
    <div className="events-container">
      <header className="events-header">
        <h1>Upcoming Events</h1>
      </header>
      <main>
        <section className="event">
          <h2>Trade Show: Vancouver Construction Expo</h2>
          <p><strong>Date:</strong> August 15, 2024</p>
          <p><strong>Location:</strong> Vancouver, British Columbia</p>
          <p>The Vancouver Construction Expo is a premier event showcasing the latest advancements in AI technology for the construction industry.</p>
        </section>
        <section className="event">
          <h2>Trade Show: Toronto Smart Buildings Symposium</h2>
          <p><strong>Date:</strong> September 5, 2024</p>
          <p><strong>Location:</strong> Toronto, Ontario</p>
          <p>Join us in Toronto for the Smart Buildings Symposium, focusing on AI solutions for sustainable building management.</p>
        </section>
        <section className="event">
          <h2>Trade Show: Calgary Industrial Innovation Conference</h2>
          <p><strong>Date:</strong> October 20, 2024</p>
          <p><strong>Location:</strong> Calgary, Alberta</p>
          <p>Explore the future of industrial innovation with AI technologies at the Calgary Industrial Innovation Conference.</p>
        </section>
        <section className="event">
          <h2>Trade Show: Halifax Tech Expo</h2>
          <p><strong>Date:</strong> November 10, 2024</p>
          <p><strong>Location:</strong> Halifax, Nova Scotia</p>
          <p>Discover how AI is transforming the construction sector at the Halifax Tech Expo.</p>
        </section>
        <section className="event">
          <h2>Trade Show: Edmonton Construction Summit</h2>
          <p><strong>Date:</strong> December 1, 2024</p>
          <p><strong>Location:</strong> Edmonton, Alberta</p>
          <p>Join industry leaders at the Edmonton Construction Summit to learn about AI applications in construction project management.</p>
        </section>
      </main>
    </div>
    </div>
  );
}

export default Events;
