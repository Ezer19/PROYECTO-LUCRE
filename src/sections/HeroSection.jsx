import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Iluminando comunidades andinas
            </h1>
            <p className="text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Energía sostenible para un futuro brillante. Proyectos creativos, verdes y sostenibles 
              para mejorar la calidad de vida de los habitantes de Lucre.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button to="/proyecto" variant="accent">Conoce nuestro proyecto</Button>
              <Button to="/galeria" variant="outline">Ver galería</Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-full h-64 md:h-80 aspect-video flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;