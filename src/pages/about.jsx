

const AboutPage = () => {
  return (
    <div className="container">
      <header className="jumbotron text-center my-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">Learn more about our mission, vision, and the team behind MyWebsite.</p>
      </header>

      <section className="row my-5">
        <div className="col-lg-6">
          <h2>Our Mission</h2>
          <p>
            At MyWebsite, our mission is to deliver high-quality services that help our clients succeed in their
            respective industries. We strive to innovate and lead with integrity, offering solutions that make a
            positive impact on businesses and communities.
          </p>
        </div>
        <div className="col-lg-6">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in our field, recognized for our commitment to excellence and
            customer satisfaction. We aim to create a legacy of trust and reliability by continuously evolving
            and adapting to the needs of our clients.
          </p>
        </div>
      </section>

      <section className="row my-5">
        <div className="col-lg-12 text-center">
          <h2>Meet the Team</h2>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 1"
            className="rounded-circle mb-3"
          />
          <h4>John Doe</h4>
          <p>CEO & Founder</p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 2"
            className="rounded-circle mb-3"
          />
          <h4>Jane Smith</h4>
          <p>Chief Marketing Officer</p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member 3"
            className="rounded-circle mb-3"
          />
          <h4>Mike Johnson</h4>
          <p>Lead Developer</p>
        </div>
      </section>

      <footer className="text-center mt-5">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
