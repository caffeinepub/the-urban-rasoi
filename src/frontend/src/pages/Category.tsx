import { useState, useEffect } from 'react';

interface Establishment {
  id: number;
  name: string;
  category: 'cafe' | 'dhaba' | 'restaurant' | 'street-food';
  image: string;
  description: string;
  specialty: string;
}

const Category = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredEstablishments, setFilteredEstablishments] = useState<Establishment[]>([]);

  const establishments: Establishment[] = [
    {
      id: 1,
      name: 'Urban Rasoi Dhaba',
      category: 'dhaba',
      image: '/assets/generated/dhaba-exterior.dim_1200x800.png',
      description: 'Authentic North Indian dhaba experience',
      specialty: 'Punjabi Thali, Butter Chicken',
    },
    {
      id: 2,
      name: 'Chai Corner Cafe',
      category: 'cafe',
      image: '/assets/generated/dhaba-chai.dim_800x600.png',
      description: 'Cozy cafe with traditional chai and snacks',
      specialty: 'Masala Chai, Samosas',
    },
    {
      id: 3,
      name: 'Spice Route Restaurant',
      category: 'restaurant',
      image: '/assets/generated/dhaba-curry.dim_800x600.png',
      description: 'Fine dining with regional Indian cuisines',
      specialty: 'Multi-cuisine Thalis',
    },
    {
      id: 4,
      name: 'Street Food Junction',
      category: 'street-food',
      image: '/assets/generated/dhaba-breakfast.dim_800x600.png',
      description: 'Popular street food favorites',
      specialty: 'Pani Puri, Pav Bhaji',
    },
    {
      id: 5,
      name: 'Highway Dhaba',
      category: 'dhaba',
      image: '/assets/generated/dhaba-thali.dim_800x600.png',
      description: 'Traditional highway dhaba style',
      specialty: 'Dal Makhani, Tandoori Roti',
    },
    {
      id: 6,
      name: 'Modern Bistro Cafe',
      category: 'cafe',
      image: '/assets/generated/dhaba-seating.dim_1200x800.png',
      description: 'Contemporary cafe with fusion menu',
      specialty: 'Coffee, Sandwiches',
    },
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredEstablishments(establishments);
    } else {
      setFilteredEstablishments(
        establishments.filter((est) => est.category === activeCategory)
      );
    }

    // jQuery animation for filtered items
    if (typeof window !== 'undefined' && (window as any).$) {
      (window as any).$('.establishment-card').hide().fadeIn(600);
    }
  }, [activeCategory]);

  const categories = [
    { id: 'all', label: 'All', icon: '🍽️' },
    { id: 'dhaba', label: 'Dhaba', icon: '🏪' },
    { id: 'cafe', label: 'Cafe', icon: '☕' },
    { id: 'restaurant', label: 'Restaurant', icon: '🍴' },
    { id: 'street-food', label: 'Street Food', icon: '🌮' },
  ];

  return (
    <div className="category-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="py-5 bg-dhaba-pattern">
        <div className="container">
          <div className="text-center">
            <h1 className="display-3 fw-bold">Explore Categories</h1>
            <div className="dhaba-divider"></div>
            <p className="lead text-dhaba-text-light">
              Discover different types of food establishments
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="h4 fw-bold mb-4">Filter by Category</h2>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="me-2">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Establishments Grid */}
      <section className="section-padding bg-dhaba-cream">
        <div className="container">
          <div className="row g-4">
            {filteredEstablishments.map((establishment) => (
              <div key={establishment.id} className="col-md-6 col-lg-4">
                <div className="dhaba-card establishment-card h-100">
                  <div className="image-overlay">
                    <img
                      src={establishment.image}
                      alt={establishment.name}
                      className="w-100"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="h5 fw-bold mb-0">{establishment.name}</h3>
                      <span className="badge bg-danger text-white">
                        {establishment.category.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-dhaba-text-light mb-2">
                      {establishment.description}
                    </p>
                    <div className="border-top pt-2 mt-2">
                      <p className="small mb-0">
                        <strong>Specialty:</strong> {establishment.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEstablishments.length === 0 && (
            <div className="text-center py-5">
              <p className="lead text-dhaba-text-light">
                No establishments found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Category;
