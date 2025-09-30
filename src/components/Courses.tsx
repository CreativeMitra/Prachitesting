import { Calculator, Beaker, BookOpen, Globe, Zap, GraduationCap, ArrowRight } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Calculator,
      name: "Mathematics",
      description: "Comprehensive math coaching from basic to advanced levels",
      grades: "Grades 6-12",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Beaker,
      name: "Science",
      description: "Physics, Chemistry, and Biology with practical approach",
      grades: "Grades 8-12",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BookOpen,
      name: "English",
      description: "Language skills, literature, and communication",
      grades: "Grades 6-12",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Zap,
      name: "Physics",
      description: "Conceptual understanding with problem-solving techniques",
      grades: "Grades 11-12",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Globe,
      name: "Chemistry",
      description: "Theoretical concepts with practical applications",
      grades: "Grades 11-12",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: GraduationCap,
      name: "Competitive Exams",
      description: "JEE, NEET, and other competitive exam preparation",
      grades: "All Levels",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section id="courses" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive academic programs designed to help students excel in their studies 
            and competitive examinations.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl card-hover group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${course.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className={`w-8 h-8 ${course.color}`} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {course.name}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">
                    {course.grades}
                  </span>
                  <button className="text-primary hover:text-primary-dark transition-colors duration-200 group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-4 pt-4 border-t border-border">
                <a 
                  href="#contact" 
                  className="text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-200"
                >
                  Enroll Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Don't see your subject? We offer customized programs for all academic needs.
          </p>
          <a href="#contact" className="btn-primary">
            <BookOpen className="w-5 h-5" />
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;