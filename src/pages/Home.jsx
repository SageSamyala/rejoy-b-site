import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Sun, Briefcase, Package, Award, Users, Target, ArrowRight } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const logoUrl = "/images/logo.png";
  // Updated to dark circuit board pattern
  const bgPattern = "/images/circuit-bg.png";

  const services = [
    {
      icon: Zap,
      title: 'Electrical Solutions',
      description: 'Complete electrical installations, maintenance, and repair services for all sectors.',
    },
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Renewable energy solutions with solar panels, inverters, and complete system integration.',
    },
    {
      icon: Briefcase,
      title: 'Project Management',
      description: 'End-to-end project consulting and management from concept to completion.',
    },
    {
      icon: Package,
      title: 'Equipment Supply',
      description: 'Quality electrical equipment, switchgear, cables, and commissioning services.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'BBBEE Level 1 certified with commitment to highest industry standards.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Cutting-edge solutions combining technical expertise with modern technology.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: '100% black, female-owned company dedicated to community development.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Rejoy B Development - Electrical Engineering Excellence</title>
        <meta name="description" content="Rejoy B Development is a 100% black, female-owned electrical engineering company providing comprehensive electrical solutions, solar energy, and project management services across South Africa." />
      </Helmet>

      <div className="bg-white">
        <section 
          className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
          style={{
            backgroundImage: `url('${bgPattern}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-block bg-transparent p-4 rounded-xl mb-4">
                  <img src={logoUrl} alt="Rejoy B Development" className="h-32 md:h-40 w-auto" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  POWERING INNOVATION.<br />
                  BUILDING CONNECTIONS.<br />
                  EMPOWERING COMMUNITIES.
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Excellence in Electrical Engineering & Project Management
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Request a Quote
                  </button>
                  <Link
                    to="/services"
                    className="bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Our Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Your Trusted Partner in Electrical Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rejoy B Development is a 100% black, female-owned electrical engineering company founded in 2019. 
                Based in Bloemfontein with a branch in East London, we specialize in turnkey electrical solutions 
                that blend technical excellence with meaningful social impact. As a Level 1 BBBEE contributor, 
                we deliver comprehensive electrical installations, solar energy solutions, and project management 
                services across South Africa.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Our Key Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive electrical solutions for every need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-400"
                >
                  <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <span>View All Services</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Why Choose Rejoy B Development
              </h2>
              <p className="text-lg text-gray-600">
                Excellence, innovation, and empowerment in every project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-4">
                    <item.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className="relative py-16 md:py-24 bg-black text-white"
          style={{
            backgroundImage: `url('${bgPattern}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Power Your Next Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team for a consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                >
                  Request a Quote
                </button>
                <Link
                  to="/contact"
                  className="bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </>
  );
};

export default Home;