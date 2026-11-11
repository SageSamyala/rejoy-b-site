
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Using the dark circuit board pattern
  const bgImage = "/images/circuit-bg.png";
  const logoUrl = "/images/logo.png";

  return (
    <footer 
      className="text-white pt-12 pb-6 relative bg-black"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-6">
              <div className="bg-transparent inline-flex items-center space-x-3">
                <img src={logoUrl} alt="Rejoy B Development" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-wider text-yellow-400 font-['Poppins'] leading-none">REJOY B</span>
                  <span className="text-xs tracking-widest text-gray-300 uppercase font-medium">Development</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Powering innovation. Building connections. Empowering communities.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61585660794568" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com/company/rejoy-b-development" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Projects</Link></li>
              <li><Link to="/training" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">Training</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:bulelwa@rejoyb.co.za" className="hover:text-yellow-400 transition-colors">bulelwa@rejoyb.co.za</a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-300">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>076 059 8167</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-yellow-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  3081 Abdurahman Street, Bochabela, Bloemfontein, 9323
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-yellow-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  113 Hillcrest Drive, Blue Bend, East London, 5241
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Rejoy B Development. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Registration: 2019/565632/07 | BBBEE Level 1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
