import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Class 12 Student",
      content:
        "LearnSmart helped my daughter score 95% in Mathematics! The teachers are amazing and very supportive. The personalized attention my daughter received was exceptional.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Class 11 Student",
      content:
        "The physics classes at LearnSmart made complex concepts so easy to understand. I improved my scores from 65% to 89% in just 6 months!",
      rating: 5,
    },
    {
      name: "Arun Kumar",
      role: "JEE Aspirant",
      content:
        "The competitive exam preparation at LearnSmart is top-notch. The mock tests and practice sessions helped me crack JEE with a good rank.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      role: "Class 12 Student",
      content:
        "Chemistry was my weakest subject, but Dr. Anita's teaching style made it my favorite! Scored 92% in boards. Thank you LearnSmart!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our students and parents have to say 
            about their experience with LearnSmart.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl card-hover relative">
                <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-outline">View More Reviews</button>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="bg-card p-8 rounded-2xl relative">
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Student Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;