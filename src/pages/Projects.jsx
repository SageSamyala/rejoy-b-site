import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Projects = () => {
  const bgPattern = "/images/circuit-bg.png";
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredProjects = [
    {
      title: 'Commercial Office Complex Electrification',
      category: 'Commercial',
      image: "/images/projects/featured-1.jpg",
      description: 'Complete electrical installation for a multi-story office building including power distribution, lighting systems, and backup power solutions.',
      location: 'Bloemfontein, Free State',
    },
    {
      title: 'Industrial Plant Power Upgrade',
      category: 'Industrial',
      image: "/images/projects/featured-2.jpg",
      description: 'Comprehensive electrical infrastructure upgrade for manufacturing facility, including new substations and power distribution systems.',
      location: 'East London, Eastern Cape',
    },
    {
      title: 'Solar Energy Installation',
      category: 'Renewable Energy',
      image: "/images/projects/featured-3.jpg",
      description: 'Large-scale solar panel installation with battery storage and grid-tie inverter system for commercial property.',
      location: 'Bloemfontein, Free State',
    },
    {
      title: 'Mining Site Electrification',
      category: 'Mining',
      image: "/images/projects/featured-4.jpg",
      description: 'Full electrical infrastructure design and installation for mining operations including power lines and equipment installations.',
      location: 'Northern Cape',
    },
    {
      title: 'Retail Center Electrical Systems',
      category: 'Commercial',
      image: "/images/projects/featured-5.jpg",
      description: 'Complete electrical system installation for shopping center including lighting, HVAC controls, and backup power.',
      location: 'East London, Eastern Cape',
    },
    {
      title: 'Residential Solar Solutions',
      category: 'Renewable Energy',
      image: "/images/projects/featured-6.jpg",
      description: 'Multiple residential solar installations with battery backup and energy management systems.',
      location: 'Various Locations',
    },
  ];

  const galleryImages = [
    { src: "/images/projects/gallery-1.jpg", category: "Substation Work" },
    { src: "/images/projects/gallery-2.jpg", category: "Power Lines" },
    { src: "/images/projects/gallery-3.jpg", category: "Maintenance" },
    { src: "/images/projects/gallery-4.jpg", category: "Wiring" },
    { src: "/images/projects/gallery-5.jpg", category: "Transformers" },
    { src: "/images/projects/gallery-6.jpg", category: "Industrial" },
    { src: "/images/projects/gallery-7.jpg", category: "Power Lines" },
    { src: "/images/projects/gallery-8.jpg", category: "Maintenance" },
    { src: "/images/projects/gallery-9.jpg", category: "Wiring" },
    { src: "/images/projects/gallery-10.jpg", category: "Solar Panels" },
    { src: "/images/projects/gallery-11.jpg", category: "Substation Work" },
    { src: "/images/projects/gallery-12.jpg", category: "Industrial" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects - Rejoy B Development</title>
        <meta name="description" content="Explore completed projects by Rejoy B Development, showcasing our expertise in electrical installations, solar energy, and project management across South Africa." />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-gray-300">
                Showcasing excellence in electrical engineering across South Africa
              </p>
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
                Completed Projects
              </h2>
              <p className="text-lg text-gray-600">
                Quality delivery across diverse sectors and applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold">Location:</span>
                      <span className="ml-2">{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Project Gallery
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A closer look at our work in power lines, substations, solar arrays, and more.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg border-b-2 border-yellow-400 pb-1">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <button 
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.category} 
                className="w-full h-full max-h-[85vh] object-contain rounded-lg" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-center rounded-b-lg">
                <p className="text-lg font-medium">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;