import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';

const Home = () => {
  useEffect(() => {
    // jQuery fade-in animation
    if (typeof window !== 'undefined' && (window as any).$) {
      (window as any).$('.hero-content').hide().fadeIn(1000);
    }
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: '100vh',
          backgroundImage: 'url(/assets/generated/dhaba-exterior.dim_1200x800.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{
            background: 'linear-gradient(to bottom, rgba(62, 39, 35, 0.7), rgba(216, 67, 21, 0.6))'
          }}
        ></div>
        
        <div className="container position-relative hero-content" style={{ zIndex: 10 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="dhaba-icon-box mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '36px' }}>
                🍛
              </div>
              <h1 className="display-1 fw-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                URBAN RASOI DHABA
              </h1>
              <p className="lead text-white mb-3" style={{ fontSize: '1.8rem', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                जहाँ मिलता है असली स्वाद
              </p>
              <p className="fs-5 text-white mb-5" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                Experience authentic Indian dhaba flavors in a modern urban setting. 
                Traditional recipes, fresh ingredients, and the warmth of home-cooked meals.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/menu" className="btn btn-dhaba-primary btn-lg">
                  Explore Menu
                </Link>
                <Link to="/contact" className="btn btn-dhaba-outline btn-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  Visit Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ animation: 'bounce 2s infinite' }}>
          <div className="text-white" style={{ fontSize: '2rem' }}>↓</div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-dhaba-pattern">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="/assets/generated/dhaba-chai.dim_800x600.png" 
                alt="Dhaba Chai" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-3">Welcome to Our Dhaba</h2>
              <div className="dhaba-divider mb-4" style={{ margin: '20px 0' }}></div>
              <p className="fs-5 text-dhaba-text-light mb-4">
                Step into Urban Rasoi Dhaba, where the rustic charm of traditional Indian roadside eateries 
                meets contemporary comfort. Our dhaba brings you the authentic taste of Punjab, Gujarat, 
                and beyond, served with love and hospitality.
              </p>
              <p className="fs-5 text-dhaba-text-light mb-4">
                From piping hot parathas to aromatic curries, from refreshing lassi to masala chai, 
                every dish tells a story of tradition and passion.
              </p>
              <Link to="/about" className="btn btn-dhaba-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold">Why Choose Us</h2>
            <div className="dhaba-divider"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="dhaba-card text-center p-4 h-100">
                <div className="dhaba-icon-box mx-auto mb-3">🔥</div>
                <h3 className="h4 fw-bold mb-3">Authentic Flavors</h3>
                <p className="text-dhaba-text-light">
                  Traditional recipes passed down through generations, prepared with authentic spices and techniques.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dhaba-card text-center p-4 h-100">
                <div className="dhaba-icon-box mx-auto mb-3">👨‍🍳</div>
                <h3 className="h4 fw-bold mb-3">Expert Chefs</h3>
                <p className="text-dhaba-text-light">
                  Our experienced chefs bring decades of culinary expertise to every dish they create.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dhaba-card text-center p-4 h-100">
                <div className="dhaba-icon-box mx-auto mb-3">🏠</div>
                <h3 className="h4 fw-bold mb-3">Homely Atmosphere</h3>
                <p className="text-dhaba-text-light">
                  A warm, welcoming environment that makes you feel right at home with every visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
