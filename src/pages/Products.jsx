import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ContactModal from '@/components/ContactModal';

const Products = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // Updated to dark circuit board pattern
  const bgPattern = "/images/circuit-bg.png";

  return (
    <>
      <Helmet>
        <title>Our Products - Rejoy B Development</title>
        <meta name="description" content="Quality electrical products including kiosk pillars, stubby boxes, switchgear, circuit breakers, cables, lighting, solar panels, and inverters from Rejoy B Development." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-gray-300">
                Quality electrical equipment and components for every need
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Product 1: Kiosk Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img alt="Electrical Kiosk Pillar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1683914817797-b21e83f6c5c9" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-3">Kiosk Pillars</h2>
                  <p className="text-gray-700 mb-4 flex-grow">High-quality electrical kiosk pillars for outdoor and industrial applications. Durable, weather-resistant, and designed for optimal performance.</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Weather-resistant construction</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Various capacity options</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Easy installation and maintenance</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Compliant with industry standards</span></li>
                    </ul>
                  </div>
                  <button onClick={() => setIsContactModalOpen(true)} className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">Request Quote</button>
                </div>
              </motion.div>

              {/* Product 2: Stubby Boxes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img alt="Electrical Stubby Box" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612663155099-9dc5efc9c6da" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-3">Stubby Boxes</h2>
                  <p className="text-gray-700 mb-4 flex-grow">Compact and robust stubby boxes for residential and commercial electrical installations. Perfect for meter installations and power distribution.</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Durable steel construction</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Multiple configuration options</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Easy access design</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Powder-coated finish</span></li>
                    </ul>
                  </div>
                  <button onClick={() => setIsContactModalOpen(true)} className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">Request Quote</button>
                </div>
              </motion.div>

              {/* Product 3: Switchgear & Circuit Breakers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img alt="Switchgear and Circuit Breakers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567617234229-d7d7c5c9c2f6" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-3">Switchgear & Circuit Breakers</h2>
                  <p className="text-gray-700 mb-4 flex-grow">Premium switchgear and circuit breakers from leading manufacturers. Essential components for safe and efficient electrical distribution.</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Low and medium voltage options</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">High breaking capacity</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Reliable protection systems</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Easy maintenance access</span></li>
                    </ul>
                  </div>
                  <button onClick={() => setIsContactModalOpen(true)} className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">Request Quote</button>
                </div>
              </motion.div>

              {/* Product 4: Electrical Cables & Lighting */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img alt="Electrical Cables and Lighting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1693943533461-e9613eb3b358" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-3">Electrical Cables & Lighting</h2>
                  <p className="text-gray-700 mb-4 flex-grow">Comprehensive range of electrical cables and lighting solutions for all applications. Quality products that meet rigorous safety standards.</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Power and control cables</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">LED lighting solutions</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Indoor and outdoor options</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Energy-efficient products</span></li>
                    </ul>
                  </div>
                  <button onClick={() => setIsContactModalOpen(true)} className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">Request Quote</button>
                </div>
              </motion.div>

              {/* Product 5: Solar Panels & Inverters */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img alt="Solar Panels and Inverters" className="w-full h-full object-cover" src="https://images.unsplash.com/flagged/photo-1566838616811-559be2de7f3e" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-3">Solar Panels & Inverters</h2>
                  <p className="text-gray-700 mb-4 flex-grow">High-efficiency solar panels and inverters for renewable energy installations. Complete solar solutions for residential and commercial applications.</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Monocrystalline and polycrystalline panels</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Grid-tie and off-grid inverters</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Battery storage systems</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Monitoring and control systems</span></li>
                    </ul>
                  </div>
                  <button onClick={() => setIsContactModalOpen(true)} className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">Request Quote</button>
                </div>
              </motion.div>

              {/* Product 6: Distribution Boards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img alt="Distribution Boards" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1575747107036-cae29f851681" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-black mb-3">Distribution Boards</h2>
                  <p className="text-gray-700 mb-4 flex-grow">Quality distribution boards for safe power distribution. Available in various configurations to suit different installation requirements.</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-black mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Single and three-phase options</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Surface and flush mounting</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">IP-rated enclosures</span></li>
                      <li className="flex items-start space-x-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div><span className="text-sm text-gray-600">Modular design for flexibility</span></li>
                    </ul>
                  </div>
                  <button onClick={() => setIsContactModalOpen(true)} className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">Request Quote</button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We can source and supply specialized electrical equipment to meet your specific requirements. 
                Contact us to discuss your needs.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-black text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </>
  );
};

export default Products;