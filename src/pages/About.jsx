import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About = () => {
  // Updated to dark circuit board pattern
  const bgPattern = "/images/circuit-bg.png";
  
  const values = [
    {
      title: 'Integrity',
      description: 'Upholding honesty and ethical standards in every interaction.',
    },
    {
      title: 'Excellence',
      description: 'Delivering superior quality and exceeding expectations consistently.',
    },
    {
      title: 'Empowerment',
      description: 'Supporting communities and fostering inclusive growth.',
    },
    {
      title: 'Innovation',
      description: 'Embracing new technologies and creative problem-solving.',
    },
    {
      title: 'Safety',
      description: 'Prioritizing safety in every project and operation.',
    },
  ];

  const certifications = [
    'BBBEE Level 1 Contributor',
    'Registered with CSD (MAAA0898898)',
    'Income Tax Registered (9570188194)',
    'Company Registration: 2019/565632/07',
  ];

  const founderImage = "/images/team/bulelwa-rejoy-phike.jpg";

  return (
    <>
      <Helmet>
        <title>About Us - Rejoy B Development</title>
        <meta name="description" content="Learn about Rejoy B Development, a 100% black, female-owned electrical engineering company founded in 2019, committed to excellence, innovation, and community empowerment." />
      </Helmet>

      <div className="bg-white">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rejoy B Development</h1>
              <p className="text-xl text-gray-300">
                Excellence in Electrical Engineering Since 2019
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-400/20 rounded-lg transform -rotate-3"></div>
                  <img 
                    src={founderImage} 
                    alt="Bulelwa Rejoy Phike - Founder" 
                    className="relative rounded-lg shadow-xl w-full max-w-md mx-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm text-white p-4 rounded-lg text-center">
                    <p className="font-bold text-lg text-yellow-400">Bulelwa Rejoy Phike</p>
                    <p className="text-sm">Founder & Managing Director</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Our Story</h2>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Rejoy B Development is a 100% black, female-owned company founded in 2019 by Bulelwa Rejoy Phike, 
                    who envisioned a turnkey electrical engineering firm that blends technical excellence with meaningful 
                    social impact. Based in Bloemfontein, with a branch in East London, the company was established to 
                    meet the growing demand for reliable, efficient, and locally empowered electrical solutions across 
                    South Africa's public and private sectors.
                  </p>
                  <p>
                    Specialising in electrification, consulting, project management, and construction, Rejoy B Development 
                    provides a comprehensive, end-to-end service that manages every aspect of a project—from initial concept 
                    and design to final operational handover. Clients receive complete, fully functional electrical systems 
                    or facilities without the complexity of coordinating multiple contractors or suppliers.
                  </p>
                  <p>
                    The company manages the full lifecycle of electrical infrastructure, including concept development, 
                    detailed design (power systems, substations, and solar solutions), procurement, construction, installation 
                    (such as power lines and building wiring), testing, commissioning, and ongoing maintenance. This integrated 
                    approach ensures that clients in sectors such as mining, utilities, and commercial developments receive 
                    fully operational, compliant, and energy-efficient solutions delivered seamlessly under a single service provider.
                  </p>
                  <p>
                    Over the years, Rejoy B Development has grown into a proudly South African Level 1 BBBEE contributor and 
                    a symbol of women's empowerment, quality, and innovation in the electrical engineering industry.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Mission & Vision</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
                    <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                    <p className="text-gray-700">
                      To deliver exceptional electrical engineering solutions that power innovation, build lasting 
                      connections, and empower communities across South Africa through technical excellence and 
                      sustainable practices.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
                    <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
                    <p className="text-gray-700">
                      To be the leading electrical engineering firm in South Africa, recognized for our commitment 
                      to quality, innovation, and social empowerment while contributing to the nation's economic 
                      growth and transformation.
                    </p>
                  </div>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-400 relative"
                >
                  <span className="text-3xl font-extrabold text-yellow-400 block mb-3">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">
                Certifications & Accreditations
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-700 text-lg">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;