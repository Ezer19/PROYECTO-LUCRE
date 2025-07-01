import React from 'react';
import Button from '../ui/Button';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactoSection = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contáctanos</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            ¿Interesado en nuestro proyecto? Escríbenos y te responderemos a la brevedad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="¿Sobre qué quieres hablar?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div>
                <Button variant="primary" className="w-full">Enviar mensaje</Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-accent">Email</h4>
                    <p className="text-gray-700">info@lucesdelande.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-accent">Teléfono</h4>
                    <p className="text-gray-700">+51 984 567 890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-accent">Ubicación</h4>
                    <p className="text-gray-700">Cusco, Perú</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-xl w-full h-64 flex items-center justify-center">
                  <span className="text-white font-bold">Mapa de Ubicación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;