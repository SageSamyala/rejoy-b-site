import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Wrench, Briefcase, Sun, BarChart3, Settings } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // Updated to dark circuit board pattern
  const bgPattern = "/images/circuit-bg.png";

  const services = [
    {
      icon: Zap,
      title: 'Electrical Installations',
      description: 'We design and install low, medium, and high-voltage electrical systems for commercial, industrial, municipal, and utility sectors. Our turnkey approach guarantees safe, compliant, and future-proof installations that ensure reliable operations.',
      features: [
        'Power distribution systems',
        'Substation installation and setup',
        'Building wiring and power lines',
        'Industrial electrical systems',
        'Commercial electrical infrastructure',
      ],
    },
    {
      icon: Wrench,
      title: 'Electrical Maintenance & Repairs',
      description: 'We provide preventive and corrective maintenance services that prolong asset lifespans, enhance system performance, and ensure ongoing safety and reliability across the entire electrical infrastructure.',
      features: [
        'Preventive maintenance programs',
        'Emergency repair services',
        'System troubleshooting and diagnostics',
        'Equipment upgrades and replacements',
        'Safety inspections and compliance checks',
      ],
    },
    {
      icon: Briefcase,
      title: 'Project Management & Consulting',
      description: 'From concept and design to procurement, installation, testing, and commissioning, we oversee the entire project lifecycle. Clients benefit from comprehensive, functional electrical solutions provided seamlessly by a single service provider.',
      features: [
        'Project planning and design',
        'Procurement and logistics',
        'Construction management',
        'Testing and commissioning',
        'Operational handover and support',
      ],
    },
    {
      icon: Sun,
      title: 'Solar & Renewable Energy Solutions',
      description: 'We assist organisations in implementing environmentally responsible practices, including energy optimisation, green technology integration, and long-term sustainable infrastructure planning.',
      features: [
        'Solar panel installation',
        'Inverter and battery systems',
        'Grid-tie and off-grid solutions',
        'Energy storage solutions',
        'System monitoring and maintenance',
      ],
    },
    {
      icon: BarChart3,
      title: 'Energy Audits & Efficiency Upgrades',
      description: 'Our team conducts technical energy assessments and implements efficiency upgrades that reduce operational costs, optimise performance, and support clients’ sustainability objectives.',
      features: [
        'Comprehensive energy audits',
        'Efficiency recommendations',
        'LED lighting upgrades',
        'Power factor correction',
        'Energy management systems',
      ],
    },
    {
      icon: Settings,
      title: 'Equipment Supply & Commissioning',
      description: 'We supply high-quality electrical products, including kiosk pillars, stubby boxes, cables, switchgear, lighting, and essential components — ensuring reliable materials that support efficient project execution.',
      features: [
        'Switchgear and circuit breakers',
        'Cables and wiring materials',
        'Lighting fixtures and controls',
        'Solar panels and inverters',
        'Testing and commissioning services',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Rejoy B Development</title>
        <meta name="description" content="Explore Rejoy B Development's comprehensive electrical services including installations, maintenance, project management, solar energy solutions, and equipment supply." />
      </Helmet>

      <div className="bg-gray-50">
        <section 
          className="relative bg-black text-white py-20"
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300">
                Comprehensive electrical solutions tailored to your needs
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    <div className="md:col-span-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-black" />
                        </div>
                        <h2 className="text-2xl font-bold text-black">{service.title}</h2>
                      </div>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300"
                      >
                        Request Quote
                      </button>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-black mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-black text-white py-16 md:py-24" 
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a consultation and quote on your next project.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Now
              </button>
            </motion.div>
          </div>
        </section>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </>
  );
};

export default Services;