

const HomePage = () => {
  return (
    <div className="container">
      <header className="jumbotron text-center my-5">
        <h1 className="display-4">Welcome to MyWebsite</h1>
        <p className="lead">We provide top-notch services to meet your needs.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn More
        </a>
      </header>

      <section className="row text-center">
        <div className="col-lg-4">
          <i className="fas fa-laptop-code fa-3x mb-3"></i>
          <h3>Development</h3>
          <p>High-quality web and mobile development services.</p>
        </div>
        <div className="col-lg-4">
          <i className="fas fa-chart-line fa-3x mb-3"></i>
          <h3>Marketing</h3>
          <p>Effective marketing strategies to grow your business.</p>
        </div>
        <div className="col-lg-4">
          <i className="fas fa-users fa-3x mb-3"></i>
          <h3>Support</h3>
          <p>24/7 support to assist with any of your needs.</p>
        </div>
      </section>

      <footer className="text-center mt-5">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
