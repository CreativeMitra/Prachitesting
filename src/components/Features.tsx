import { Users, Monitor, Clock, BarChart3, MessageSquare, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Small Batch Classes",
      description: "Maximum 8-10 students per batch ensuring personalized attention for every student.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Monitor,
      title: "Online & Offline Modes",
      description: "Flexible learning options with state-of-the-art online platform and physical classroom facilities.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Multiple batch timings to accommodate students' schedules and preferences.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Regular assessments and detailed progress reports to monitor student improvement.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: MessageSquare,
      title: "Parent Communication",
      description: "Regular updates to parents about their child's academic progress and performance.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Experienced Faculty",
      description: "Highly qualified teachers with years of experience in their respective subjects.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">LearnSmart</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unique teaching methodology and student-centric approach make us the preferred 
            choice for academic excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl card-hover group"
            >
              {/* Icon */}
              <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center bg-gradient-primary p-8 rounded-2xl">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their academic goals with LearnSmart.
          </p>
          <a href="#contact" className="btn-secondary">
            Book Your Free Demo Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;