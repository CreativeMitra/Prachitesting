import { Play, BookOpen, Users, Trophy, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning in modern classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-20 left-10 w-8 h-8 text-secondary/30 animate-float" />
        <Trophy className="absolute top-32 right-20 w-6 h-6 text-secondary/20 animate-float" style={{ animationDelay: '1s' }} />
        <Users className="absolute bottom-32 left-20 w-10 h-10 text-secondary/25 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
            Achieve Academic{" "}
            <span className="text-secondary">Excellence</span>
            <br />
            with Expert Tutors
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Personalized coaching for Grades 6 to 12 & Competitive Exams
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto animate-scale-in"
            >
              <Play className="w-5 h-5" />
              Book Free Trial
            </a>
            <a 
              href="#about" 
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto animate-scale-in"
              style={{ animationDelay: '0.5s' }}
            >
              <ArrowRight className="w-5 h-5" />
              Learn More
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-scale-in">
              <div className="text-3xl font-bold text-secondary mb-2">10+</div>
              <div className="text-white/90">Expert Tutors</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-white/90">Happy Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">90%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;