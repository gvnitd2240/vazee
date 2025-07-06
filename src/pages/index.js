import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaCode, FaDatabase, FaTools, FaUsers, FaChartLine, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Vivek Garg</h1>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden xl:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button - Always visible on mobile/tablet */}
          <div className="xl:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-6 py-4 space-y-0">
              <a 
                href="#about" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                Experience
              </a>
              <a 
                href="#skills" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                Skills
              </a>
              <a 
                href="/blog" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg px-2"
              >
                Blog
              </a>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-3 hover:bg-gray-50 rounded-lg px-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold hover-lift">
            VG
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Vivek Garg
          </h1>
          <h2 className="text-2xl md:text-3xl gradient-text mb-6 font-medium">
            Software Engineer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Passionate software engineer with expertise in microservices architecture, 
            API integrations, and full-stack development. Transforming ideas into scalable solutions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="text-sm sm:text-base">Gurugram, Haryana</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaPhone className="text-blue-500" />
            <span className="text-sm sm:text-base">9649756632</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaEnvelope className="text-blue-500" />
            <span className="text-sm sm:text-base">vgarg7900@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/gvnitd2240"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://drive.google.com/file/d/17778y5y8OR7Ts4N3EuXajV2Lk_aMdFGn/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'animate-fade-in-left' : ''}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-600 hover-lift">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                National Institute Of Technology, Durgapur
              </h4>
              <p className="text-gray-700 mb-2">Bachelor of Technology in Chemical Engineering</p>
              <p className="text-blue-600 font-semibold">Cumulative GPA: 7.6/10.0</p>
              <p className="text-gray-600 text-sm mt-2">Jul 2018 – Jun 2022 • Durgapur, West Bengal</p>
            </div>
          </div>
          
          <div className={isVisible ? 'animate-fade-in-right' : ''}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a passionate Software Engineer with extensive experience in building scalable microservices 
              and integrating complex APIs. My expertise spans across multiple technologies including Kotlin, 
              Python, React, and various cloud services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I specialize in optimizing system performance, reducing response times by up to 50%, and 
              implementing solutions that handle millions of daily tasks. My work has consistently resulted 
              in significant improvements in efficiency, revenue growth, and user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Cogoport Private Limited",
      position: "Software Engineer",
      duration: "Jan. 2022 – Present",
      location: "Gurugram, Haryana",
      achievements: [
        {
          title: "Asynchronous Messaging Optimization",
          description: "Spearheaded RabbitMQ integration within microservices architecture, achieving 50% decrease in response times and managing 1 million daily tasks with unparalleled resilience."
        },
        {
          title: "Sage API Integration",
          description: "Orchestrated seamless integration of accounting data (Invoices, Journal Vouchers, Payments, TDS, Settlements), resulting in 20% enhancement in data accuracy and 15% reduction in processing time."
        },
        {
          title: "Bank Integration",
          description: "Integrated bank services into Accounts Receivables, achieving 20% reduction in payment processing time and fostering revenue growth."
        },
        {
          title: "Stripe Integration",
          description: "Minimized accounts payable management time by 40%, leading to 15% increase in quarterly revenue and 20% expansion of customer base."
        },
        {
          title: "Campaign Management Tool",
          description: "Developed user-friendly front-end with React Flow Renderer, contributing to 30% increase in customer acquisition through targeted e-commerce emails."
        },
        {
          title: "Template Generating System",
          description: "Streamlined email template creation with Bee Free integration, boosting email marketing effectiveness with 15% increase in engagement and conversion rates."
        },
        {
          title: "In-house Lead Source: Athena",
          description: "Built robust data ingestion system using Uvicorn, Peewee, and FastApi, achieving 25% increase in lead generation efficiency."
        },
        {
          title: "Financial Data Management",
          description: "Implemented strategic enhancements achieving 68% reduction in Turnaround Time (TAT) and 35% shorter auditing time."
        },
        {
          title: "Account Receivables and Payables Dashboard",
          description: "Provided real-time insights through advanced data management, achieving 25% improvement in dashboard performance and 30% reduction in processing time."
        }
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600 hover-lift ${isVisible ? 'animate-fade-in-up' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{exp.position}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-gray-600">{exp.duration}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{achievement.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-3xl text-blue-600" />,
      skills: ["Kotlin", "Python", "SQL", "JavaScript", "Java"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaCode className="text-3xl text-purple-600" />,
      skills: ["Micronaut", "FastAPI", "React", "Spring Boot"]
    },
    {
      title: "Databases & Search",
      icon: <FaDatabase className="text-3xl text-green-600" />,
      skills: ["PostgreSQL", "Elastic Search", "Firebase", "Opensearch"]
    },
    {
      title: "Message Brokers",
      icon: <FaTools className="text-3xl text-orange-600" />,
      skills: ["RabbitMQ", "Apache Kafka"]
    },
    {
      title: "Development Tools",
      icon: <FaTools className="text-3xl text-red-600" />,
      skills: ["IntelliJ IDEA", "VS Code", "Table Plus", "Docker", "GIT", "JIRA", "Postman", "Excel"]
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="text-3xl text-indigo-600" />,
      skills: ["Effective Team Coordination", "Leadership", "Clear Communication", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-tag bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={isVisible ? 'animate-fade-in-left' : ''}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-900 font-semibold">vgarg7900@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-900 font-semibold">9649756632</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="text-gray-900 font-semibold">Gurugram, Haryana</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={isVisible ? 'animate-fade-in-right' : ''}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
            <div className="space-y-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover-lift"
              >
                <FaLinkedin className="text-blue-600 text-2xl" />
                <span className="text-gray-900 font-semibold">LinkedIn Profile</span>
              </a>
              
              <a
                href="https://github.com/gvnitd2240"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow hover-lift"
              >
                <FaGithub className="text-gray-800 text-2xl" />
                <span className="text-gray-900 font-semibold">GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; 2025 Vivek Garg. All rights reserved.</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;
