const Menu = () => {
  const menuCategories = [
    {
      id: 'breakfast',
      title: 'Breakfast Specials',
      icon: '🌅',
      image: '/assets/generated/dhaba-breakfast.dim_800x600.png',
      items: [
        { name: 'Aloo Paratha', price: '₹80', description: 'Stuffed potato flatbread with butter and pickle' },
        { name: 'Chole Bhature', price: '₹120', description: 'Spicy chickpeas with fluffy fried bread' },
        { name: 'Poha', price: '₹60', description: 'Flattened rice with peanuts and spices' },
        { name: 'Upma', price: '₹70', description: 'Semolina porridge with vegetables' },
        { name: 'Masala Dosa', price: '₹90', description: 'Crispy rice crepe with potato filling' },
        { name: 'Idli Sambar', price: '₹80', description: 'Steamed rice cakes with lentil soup' },
      ],
    },
    {
      id: 'thali',
      title: 'Thali (Complete Meals)',
      icon: '🍽️',
      image: '/assets/generated/dhaba-thali.dim_800x600.png',
      items: [
        { name: 'Punjabi Thali', price: '₹250', description: 'Dal makhani, paneer curry, roti, rice, raita, salad' },
        { name: 'Gujarati Thali', price: '₹220', description: 'Dal, sabzi, kadhi, roti, rice, sweet dish' },
        { name: 'South Indian Thali', price: '₹230', description: 'Sambar, rasam, curry, rice, papad, pickle' },
        { name: 'Rajasthani Thali', price: '₹260', description: 'Dal baati churma, gatte ki sabzi, roti, rice' },
        { name: 'Non-Veg Thali', price: '₹300', description: 'Chicken curry, dal, roti, rice, raita, salad' },
        { name: 'Mini Thali', price: '₹150', description: 'Perfect for light appetite - dal, sabzi, roti, rice' },
      ],
    },
    {
      id: 'curries',
      title: 'Curries & Gravies',
      icon: '🍛',
      image: '/assets/generated/dhaba-curry.dim_800x600.png',
      items: [
        { name: 'Butter Chicken', price: '₹280', description: 'Creamy tomato-based chicken curry' },
        { name: 'Paneer Butter Masala', price: '₹220', description: 'Cottage cheese in rich tomato gravy' },
        { name: 'Dal Makhani', price: '₹180', description: 'Black lentils cooked overnight with butter' },
        { name: 'Kadai Paneer', price: '₹200', description: 'Cottage cheese with bell peppers in spicy gravy' },
        { name: 'Chicken Tikka Masala', price: '₹290', description: 'Grilled chicken in spiced tomato sauce' },
        { name: 'Palak Paneer', price: '₹190', description: 'Cottage cheese in spinach gravy' },
      ],
    },
    {
      id: 'beverages',
      title: 'Beverages',
      icon: '☕',
      image: '/assets/generated/dhaba-chai.dim_800x600.png',
      items: [
        { name: 'Masala Chai', price: '₹30', description: 'Traditional Indian spiced tea' },
        { name: 'Sweet Lassi', price: '₹60', description: 'Refreshing yogurt drink' },
        { name: 'Salted Lassi', price: '₹60', description: 'Savory yogurt drink with spices' },
        { name: 'Mango Lassi', price: '₹80', description: 'Yogurt drink with fresh mango' },
        { name: 'Nimbu Pani', price: '₹40', description: 'Fresh lemonade with mint' },
        { name: 'Jal Jeera', price: '₹50', description: 'Cumin-flavored refreshing drink' },
      ],
    },
  ];

  return (
    <div className="menu-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="py-5 bg-dhaba-pattern">
        <div className="container">
          <div className="text-center">
            <h1 className="display-3 fw-bold">Our Menu</h1>
            <div className="dhaba-divider"></div>
            <p className="lead text-dhaba-text-light">
              Authentic Indian dhaba cuisine prepared with love
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, index) => (
        <section 
          key={category.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-dhaba-cream'}`}
        >
          <div className="container">
            <div className="text-center mb-5">
              <div className="dhaba-icon-box mx-auto mb-3" style={{ fontSize: '36px' }}>
                {category.icon}
              </div>
              <h2 className="display-5 fw-bold">{category.title}</h2>
            </div>

            <div className="row align-items-center">
              <div className={`col-lg-5 mb-4 mb-lg-0 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="img-fluid rounded shadow-lg"
                />
              </div>

              <div className={`col-lg-7 ${index % 2 === 0 ? 'order-lg-2' : 'order-lg-1'}`}>
                <div className="row g-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="col-12">
                      <div className="menu-item">
                        <div className="d-flex justify-content-between align-items-start">
                          <div className="flex-grow-1">
                            <h4 className="h5 fw-bold mb-1">{item.name}</h4>
                            <p className="text-dhaba-text-light mb-0 small">{item.description}</p>
                          </div>
                          <div className="price-tag ms-3">
                            {item.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;
