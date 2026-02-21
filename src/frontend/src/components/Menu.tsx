import { Coffee, UtensilsCrossed, Cake } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      id: 'beverages',
      title: 'Beverages',
      icon: Coffee,
      image: '/assets/generated/coffee-latte.dim_600x600.png',
      items: [
        { name: 'Signature Latte', price: '$5.50', description: 'Espresso with steamed milk and latte art' },
        { name: 'Cappuccino', price: '$5.00', description: 'Classic Italian coffee with foam' },
        { name: 'Cold Brew', price: '$4.50', description: 'Smooth, refreshing cold coffee' },
        { name: 'Masala Chai', price: '$4.00', description: 'Traditional Indian spiced tea' },
        { name: 'Matcha Latte', price: '$5.50', description: 'Premium Japanese green tea' },
        { name: 'Fresh Juice', price: '$4.50', description: 'Seasonal fruit juices' },
      ],
    },
    {
      id: 'meals',
      title: 'Meals',
      icon: UtensilsCrossed,
      image: '/assets/generated/food-dish-1.dim_600x600.png',
      items: [
        { name: 'Artisan Sandwich', price: '$12.00', description: 'Gourmet sandwich with fresh ingredients' },
        { name: 'Buddha Bowl', price: '$13.50', description: 'Healthy grain bowl with seasonal vegetables' },
        { name: 'Panini', price: '$11.00', description: 'Grilled Italian sandwich' },
        { name: 'Pasta Special', price: '$14.00', description: 'Chef\'s daily pasta creation' },
        { name: 'Salad Bowl', price: '$10.50', description: 'Fresh greens with house dressing' },
        { name: 'Wrap', price: '$11.50', description: 'Wholesome wrap with your choice of filling' },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      icon: Cake,
      image: '/assets/generated/dessert-display.dim_600x600.png',
      items: [
        { name: 'Chocolate Brownie', price: '$6.00', description: 'Rich, fudgy brownie with ice cream' },
        { name: 'Cheesecake', price: '$7.00', description: 'Creamy New York style cheesecake' },
        { name: 'Tiramisu', price: '$7.50', description: 'Classic Italian coffee-flavored dessert' },
        { name: 'Croissant', price: '$4.50', description: 'Buttery, flaky French pastry' },
        { name: 'Muffin', price: '$4.00', description: 'Freshly baked daily muffins' },
        { name: 'Cookie Platter', price: '$5.50', description: 'Assorted homemade cookies' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="text-base md:text-lg text-foreground/70">
            Discover our carefully curated selection of beverages, meals, and desserts
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16 md:space-y-24">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center justify-center gap-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Category Content */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Image */}
                <div className={`${categoryIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                </div>

                {/* Menu Items */}
                <div className={`${categoryIndex % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="grid gap-6">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="group p-4 rounded-xl hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 space-y-1">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-foreground/60">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-lg font-bold text-primary whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
