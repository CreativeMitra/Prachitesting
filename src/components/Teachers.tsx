import { Star, ChevronLeft, ChevronRight } from "lucide-react";  
import { useState } from "react";  

const Teachers = () => {  
  const [currentIndex, setCurrentIndex] = useState(0);  

  const teachers = [  
    {  
      name: "Dr. Rajesh Kumar",  
      qualification: "M.Sc, Ph.D Physics",  
      subject: "Physics & Mathematics",  
      experience: "12 years",  
      bio: "Expert in making complex physics concepts simple and understandable for students.",  
      rating: 4.9,  
    },  
    {  
      name: "Mr. Vikram Singh",  
      qualification: "M.A English Literature",  
      subject: "English",  
      experience: "8 years",  
      bio: "Dedicated to improving students' language skills and literary understanding.",  
      rating: 4.9,  
    },  
    {  
      name: "Dr. Priya Patel",  
      qualification: "M.Sc Biology, Ph.D",  
      subject: "Biology & Life Sciences",  
      experience: "15 years",  
      bio: "Making biology interesting through practical examples and real-world applications.",  
      rating: 4.9,  
    }  
  ];  

  const nextTeacher = () => {  
    setCurrentIndex((prev) => (prev + 1) % teachers.length);  
  };  

  const prevTeacher = () => {  
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);  
  };  

  return (  
    <section id="teachers" className="section-padding bg-muted/30">  
      <div className="container mx-auto px-4">  
        {/* Header */}  
        <div className="text-center mb-12">  
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">  
            Meet Our <span className="text-gradient">Expert Teachers</span>  
          </h2>  
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">  
            Our qualified and experienced faculty members are dedicated to helping you achieve   
            your academic goals with personalized attention and innovative teaching methods.  
          </p>  
        </div>  

        {/* Desktop View */}  
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6">  
          {teachers.map((teacher, index) => (  
            <div key={index} className="bg-card p-6 rounded-2xl card-hover text-center">  
              {/* Teacher Info */}  
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">{teacher.name}</h3>  
              <p className="text-primary font-medium mb-2">{teacher.qualification}</p>  
              <p className="text-muted-foreground text-sm mb-1">{teacher.subject}</p>  
              <p className="text-secondary text-xs mb-3 font-medium">{teacher.experience}</p>  

              {/* Rating */}  
              <div className="flex items-center justify-center mb-4">  
                {[...Array(5)].map((_, i) => (  
                  <Star  
                    key={i}  
                    className={`w-4 h-4 ${i < Math.floor(teacher.rating) ? "text-secondary fill-current" : "text-gray-300"}`}  
                  />  
                ))}  
                <span className="text-sm text-muted-foreground ml-2">({teacher.rating})</span>  
              </div>  

              {/* Bio */}  
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{teacher.bio}</p>  

              <a href="#contact" className="btn-outline text-sm">Book Trial Class</a>  
            </div>  
          ))}  
        </div>  

        {/* Mobile View */}  
        <div className="lg:hidden">  
          <div className="relative">  
            {/* Current Teacher Card */}  
            <div className="bg-card p-6 rounded-2xl text-center">  
              <h3 className="text-xl font-heading font-semibold text-foreground mb-1">{teachers[currentIndex].name}</h3>  
              <p className="text-primary font-medium mb-2">{teachers[currentIndex].qualification}</p>  
              <p className="text-muted-foreground text-sm mb-1">{teachers[currentIndex].subject}</p>  
              <p className="text-secondary text-xs mb-3 font-medium">{teachers[currentIndex].experience}</p>  

              <div className="flex items-center justify-center mb-4">  
                {[...Array(5)].map((_, i) => (  
                  <Star  
                    key={i}  
                    className={`w-4 h-4 ${i < Math.floor(teachers[currentIndex].rating) ? "text-secondary fill-current" : "text-gray-300"}`}  
                  />  
                ))}  
                <span className="text-sm text-muted-foreground ml-2">({teachers[currentIndex].rating})</span>  
              </div>  

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{teachers[currentIndex].bio}</p>  

              <a href="#contact" className="btn-outline">Book Trial Class</a>  
            </div>  

            {/* Navigation Arrows */}  
            <button onClick={prevTeacher} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-full shadow-lg">  
              <ChevronLeft className="w-5 h-5 text-primary" />  
            </button>  
            <button onClick={nextTeacher} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card p-2 rounded-full shadow-lg">  
              <ChevronRight className="w-5 h-5 text-primary" />  
            </button>  
          </div>  

          {/* Dots Indicator */}  
          <div className="flex justify-center mt-6 space-x-2">  
            {teachers.map((_, index) => (  
              <button  
                key={index}  
                onClick={() => setCurrentIndex(index)}  
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? "bg-primary" : "bg-border"}`}  
              />  
            ))}  
          </div>  
        </div>  
      </div>  
    </section>  
  );  
};  

export default Teachers;