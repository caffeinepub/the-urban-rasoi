import { Heart, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every dish and beverage is prepared with passion and attention to detail',
    },
    {
      icon: Users,
      title: 'Community Hub',
      description: 'A welcoming space where friends, families, and colleagues gather',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Premium ingredients and authentic recipes for an exceptional experience',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/cafe-interior-1.dim_800x600.png"
                alt="The Urban Rasoi Interior"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              THE URBAN RASOI is more than just a cafe—it's a celebration of flavors, 
              culture, and community. Born from a passion for bringing people together 
              over exceptional food and coffee, we've created a space that feels like home.
            </p>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Our name reflects our philosophy: "Rasoi" means kitchen in Hindi, and we've 
              brought that warmth and authenticity into an urban, contemporary setting. 
              From our signature lattes to our carefully curated menu, every element is 
              designed to create memorable moments.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
