import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <span className="text-primary font-bold">LA</span>
              </div>
              <h2 className="text-xl font-bold">Luces del Ande</h2>
            </div>
            <p className="mb-4 text-gray-300">
              Proyecto de innovación para llevar energía sostenible a comunidades andinas. 
              Trabajamos para mejorar la calidad de vida mediante soluciones energéticas creativas y sostenibles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/proyecto" className="text-gray-300 hover:text-white transition-colors">Proyecto</a></li>
              <li><a href="/galeria" className="text-gray-300 hover:text-white transition-colors">Galería</a></li>
              <li><a href="/equipo" className="text-gray-300 hover:text-white transition-colors">Equipo</a></li>
              <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-2 text-accent flex-shrink-0" />
                <span>info@lucesdelande.org</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-2 text-accent flex-shrink-0" />
                <span>+51 984 567 890</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-2 text-accent flex-shrink-0" />
                <span>Cusco, Perú</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Luces del Ande. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado por Ezer Benito Zuniga Chura</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;