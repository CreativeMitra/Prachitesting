import { Target, Heart, Award, CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-success.jpg";

const About = () => {
  const features = [
    "Experienced and qualified teachers",
    "Small batch sizes for personalized attention",
    "Regular assessments and progress tracking",
    "Interactive teaching methodology",
    "Flexible online and offline modes",
    "Parent-teacher communication"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutImage}
                alt="Students achieving academic success"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                About <span className="text-gradient">LearnSmart</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At LearnSmart Tuition Center, we believe every student has the potential to excel. 
                With over 10 years of experience in education, we provide personalized learning 
                solutions that help students achieve their academic goals.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-card rounded-xl card-hover">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Our Mission</h3>
                <p className="text-sm text-muted-foreground">Excellence in education</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl card-hover">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Our Values</h3>
                <p className="text-sm text-muted-foreground">Care and dedication</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl card-hover">
                <Award className="w-8 h-8 text-success mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Our Goal</h3>
                <p className="text-sm text-muted-foreground">Student success</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Why Choose LearnSmart?
              </h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;