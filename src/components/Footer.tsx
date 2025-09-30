import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Courses", href: "#courses" },
    { name: "Features", href: "#features" },
    { name: "Teachers", href: "#teachers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const courses = [
    { name: "Mathematics", href: "#courses" },
    { name: "Physics", href: "#courses" },
    { name: "Chemistry", href: "#courses" },
    { name: "Biology", href: "#courses" },
    { name: "English", href: "#courses" },
    { name: "Competitive Exams", href: "#courses" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+91 88600 60569",
      href: "tel:+91 7678430506"
    },
    {
      icon: Mail,
      text: "info@learnsmart.com",
      href: "mailto:info@learnsmart.com"
    },
    {
      icon: MapPin,
      text: "A/103, Nangloi Extension, New Delhi",
      href: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/learnsmart",
      name: "Facebook"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/learnsmart",
      name: "Twitter"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/learnsmart",
      name: "Instagram"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/learnsmart",
      name: "YouTube"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl">LS</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">LearnSmart</h3>
                  <p className="text-sm text-primary-foreground/80">Tuition Center</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering students to achieve academic excellence through personalized learning 
                and expert guidance. Your success is our mission.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Our Courses</h4>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a
                      href={course.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                    >
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <a
                      href={info.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {info.text}
                    </a>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-r-lg hover:bg-secondary-dark transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 LearnSmart Tuition Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-secondary-foreground rounded-full shadow-lg hover:bg-secondary-dark transition-colors duration-200 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
      )}
    </footer>
  );
};

export default Footer;