const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="py-5 bg-dhaba-pattern">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold">About Our Dhaba</h1>
            <div className="dhaba-divider"></div>
            <p className="lead text-dhaba-text-light">
              A journey of flavors, tradition, and hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="/assets/generated/dhaba-kitchen.dim_1200x800.png" 
                alt="Dhaba Kitchen" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="fs-5 text-dhaba-text-light mb-3">
                Urban Rasoi Dhaba was born from a simple dream: to bring the authentic taste of Indian 
                roadside dhabas to the heart of the city. Our founders, inspired by childhood memories 
                of highway dhabas and family kitchens, wanted to create a space where tradition meets modernity.
              </p>
              <p className="fs-5 text-dhaba-text-light mb-3">
                "Rasoi" means kitchen in Hindi, and that's exactly what we are—a kitchen that serves 
                food with the same love and care as your grandmother's cooking. Every recipe has been 
                perfected over years, using traditional methods and the finest ingredients.
              </p>
              <p className="fs-5 text-dhaba-text-light">
                From our tandoor-fresh naans to our slow-cooked curries, from our refreshing lassi to 
                our aromatic masala chai, we bring you the true essence of Indian dhaba culture.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
                src="/assets/generated/dhaba-seating.dim_1200x800.png" 
                alt="Dhaba Seating" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="fs-5 text-dhaba-text-light mb-3">
                We believe that food is more than just sustenance—it's a connection to our roots, 
                our culture, and our community. Our mission is to preserve and celebrate the rich 
                culinary heritage of India while making it accessible to everyone.
              </p>
              <p className="fs-5 text-dhaba-text-light">
                Whether you're craving a hearty breakfast, a satisfying lunch, or a comforting dinner, 
                Urban Rasoi Dhaba welcomes you with open arms and plates full of delicious, authentic food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dhaba-cream">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Our Values</h2>
            <div className="dhaba-divider"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="dhaba-icon-box mx-auto mb-3">🌾</div>
                <h3 className="h5 fw-bold mb-3">Fresh Ingredients</h3>
                <p className="text-dhaba-text-light">
                  We source the freshest vegetables, meats, and spices daily to ensure quality.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="dhaba-icon-box mx-auto mb-3">👪</div>
                <h3 className="h5 fw-bold mb-3">Family First</h3>
                <p className="text-dhaba-text-light">
                  We treat every customer like family, serving food with love and care.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="dhaba-icon-box mx-auto mb-3">🎯</div>
                <h3 className="h5 fw-bold mb-3">Authenticity</h3>
                <p className="text-dhaba-text-light">
                  Traditional recipes and cooking methods that honor our culinary heritage.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center p-4">
                <div className="dhaba-icon-box mx-auto mb-3">💚</div>
                <h3 className="h5 fw-bold mb-3">Sustainability</h3>
                <p className="text-dhaba-text-light">
                  Committed to eco-friendly practices and supporting local farmers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
