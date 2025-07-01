import React from 'react';
import { FiSun, FiUsers, FiGlobe, FiMap } from 'react-icons/fi';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ProyectoSection = () => {
  const features = [
    {
      icon: <FiSun size={36} className="text-primary" />,
      title: "Energía Solar",
      description: "Implementamos paneles solares para comunidades remotas con acceso limitado a electricidad."
    },
    {
      icon: <FiUsers size={36} className="text-primary" />,
      title: "Comunidad",
      description: "Trabajamos con líderes locales para asegurar que nuestras soluciones sean sostenibles."
    },
    {
      icon: <FiGlobe size={36} className="text-primary" />,
      title: "Sostenibilidad",
      description: "Proyectos diseñados para tener impacto a largo plazo con mínimo impacto ambiental."
    },
    {
      icon: <FiMap size={36} className="text-primary" />,
      title: "Territorio Andino",
      description: "Enfocados en las comunidades de los Andes peruanos con mayores necesidades energéticas."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Nuestro Proyecto</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Luces del Ande lleva energía solar a comunidades remotas de los Andes, mejorando la 
            calidad de vida de sus habitantes mediante tecnología sostenible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-light rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Abordaje del Proyecto de Innovación</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">Problema:</h4>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Contaminación ambiental</li>
                    <li>Pérdida de biodiversidad</li>
                    <li>Olvido por parte de las autoridades</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">Solución Tentativa:</h4>
                  <p className="mt-2 text-gray-700">
                    Crear un circuito nocturno guiado por la laguna, con tecnología ecoamigable, 
                    culturalmente enriquecedora y sostenible para reactivar la economía local.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl w-full h-64 md:h-96 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl w-4/5 h-4/5 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Imagen del Proyecto</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button to="/proyecto" variant="primary" className="px-8">Ver más detalles</Button>
        </div>
      </div>
    </section>
  );
};

export default ProyectoSection;