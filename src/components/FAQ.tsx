import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the student-teacher ratio at LearnSmart?",
      answer: "We maintain a small batch size of maximum 8-10 students per class to ensure personalized attention for every student. This allows our teachers to focus on individual learning needs and provide better guidance."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline modes of learning. Our online classes are conducted through our advanced learning platform with interactive whiteboards, screen sharing, and recorded sessions for revision."
    },
    {
      question: "Can I book a trial class before enrolling?",
      answer: "Absolutely! We offer a completely free demo class for all our courses. This allows you to experience our teaching methodology and decide if it suits your learning style before making any commitment."
    },
    {
      question: "What subjects do you cover?",
      answer: "We cover all major subjects including Mathematics, Physics, Chemistry, Biology, and English for grades 6-12. We also provide specialized coaching for competitive exams like JEE, NEET, and other entrance tests."
    },
    {
      question: "How do you track student progress?",
      answer: "We conduct regular assessments, monthly tests, and provide detailed progress reports. Parents receive updates about their child's performance, attendance, and areas that need improvement through our parent portal."
    },
    {
      question: "What are your class timings?",
      answer: "We offer flexible timing options including morning, afternoon, and evening batches. Weekend classes are also available. We work with students and parents to find the most convenient schedule."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, all our packages include comprehensive study materials, practice worksheets, and reference books. Premium packages also include additional resources and competitive exam materials."
    },
    {
      question: "Is there any fee refund policy?",
      answer: "We have a transparent refund policy. If you're not satisfied with our services within the first month, we offer a money-back guarantee (terms and conditions apply). Please contact us for detailed refund terms."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, teaching methods, and enrollment process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-card p-8 rounded-2xl max-w-2xl mx-auto">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="tel:+919876543210" className="btn-outline">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;