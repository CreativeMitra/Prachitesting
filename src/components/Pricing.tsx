import { Check, Crown, Star, Zap } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "₹2,999",
      period: "per month",
      description: "Perfect for individual subject support",
      features: [
        "1-2 subjects coaching",
        "8 classes per month",
        "Study materials included",
        "Monthly assessments",
        "Parent-teacher meetings",
        "Online doubt solving"
      ],
      icon: Star,
      color: "border-border",
      buttonStyle: "btn-outline"
    },
    {
      name: "Standard",
      price: "₹4,999",
      period: "per month",
      description: "Most popular choice for comprehensive learning",
      features: [
        "3-4 subjects coaching",
        "16 classes per month",
        "Premium study materials",
        "Weekly assessments",
        "Priority doubt solving",
        "Mock tests included",
        "Parent progress reports",
        "Online & offline access"
      ],
      icon: Crown,
      color: "border-secondary",
      buttonStyle: "btn-secondary",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Premium",
      price: "₹7,999",
      period: "per month",
      description: "Complete academic excellence package",
      features: [
        "All subjects coaching",
        "24 classes per month",
        "Premium + extra materials",
        "Daily practice sessions",
        "24/7 doubt support",
        "Competitive exam prep",
        "Personal mentor assigned",
        "Career guidance sessions",
        "Scholarship opportunities"
      ],
      icon: Zap,
      color: "border-primary",
      buttonStyle: "btn-primary"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient">Learning Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing plans designed to fit your academic needs and budget. 
            All packages include quality education and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 ${pkg.color} ${
                pkg.popular ? "scale-105 shadow-xl" : "card-hover"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Package Icon */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  pkg.popular ? "bg-secondary/20" : "bg-primary/10"
                }`}>
                  <pkg.icon className={`w-8 h-8 ${
                    pkg.popular ? "text-secondary" : "text-primary"
                  }`} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">/{pkg.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a 
                  href="#contact" 
                  className={`${pkg.buttonStyle} w-full justify-center`}
                >
                  Choose {pkg.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-card p-6 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Special Offers & Guarantees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-success" />
                <span>Free demo class for all packages</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-success" />
                <span>10% discount on annual payment</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Check className="w-4 h-4 text-success" />
                <span>Money-back guarantee*</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              *Terms and conditions apply. Contact us for more details.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom package? Have questions about our pricing?
          </p>
          <a href="#contact" className="btn-outline">
            Contact Us for Custom Plans
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;