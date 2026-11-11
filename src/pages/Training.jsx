import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Briefcase } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

const Training = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  // Updated to dark circuit board pattern
  const bgPattern = "/images/circuit-bg.png";

  const courses = [
    {
      title: 'Basic Electrical Safety',
      description: 'Fundamental safety protocols for working with electrical systems and equipment.',
      duration: '2 Days',
    },
    {
      title: 'Solar Installation Basics',
      description: 'Introduction to solar panel installation, wiring, and system components.',
      duration: '5 Days',
    },
    {
      title: 'Technical Project Management',
      description: 'Skills for managing technical and engineering projects effectively.',
      duration: '3 Days',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Training & Empowerment - Rejoy B Development</title>
        <meta name="description" content="Rejoy B Development offers training programs and empowerment initiatives to build skills and foster community growth in the electrical engineering sector." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Training & Empowerment</h1>
              <p className="text-xl text-gray-300">
                Building skills and empowering communities for a brighter future
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">Our Commitment to Skills Development</h2>
                <p className="text-gray-700 mb-4">
                  As a 100% black female-owned company, we are deeply committed to empowerment and skills transfer. 
                  We believe that true development goes beyond infrastructure—it's about building people.
                </p>
                <p className="text-gray-700 mb-6">
                  Our training programs are designed to provide practical skills in the electrical and renewable energy sectors, 
                  helping to address the skills gap and create employment opportunities within our communities.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black">Community Focus</h3>
                      <p className="text-sm text-gray-600">Targeting local communities for skills upliftment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-black">Accredited Training</h3>
                      <p className="text-sm text-gray-600">Aligned with industry standards and requirements.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-400"
              >
                 <img src="https://images.unsplash.com/photo-1581094794329-cd1096a7a2e6?auto=format&fit=crop&q=80" alt="Training session" className="w-full h-64 object-cover rounded-lg mb-6" />
                 <h3 className="text-xl font-bold text-black mb-2">Practical Experience</h3>
                 <p className="text-gray-600">
                   We combine theoretical knowledge with hands-on practical experience to ensure our trainees are job-ready.
                 </p>
              </motion.div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Available Programs</h2>
              <p className="text-gray-600">Current training opportunities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <BookOpen className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>
                  <div className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded mb-3">
                    Duration: {course.duration}
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full border border-black text-black font-semibold py-2 px-4 rounded hover:bg-black hover:text-white transition-colors"
                  >
                    Inquire Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </>
  );
};

export default Training;